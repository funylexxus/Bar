import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Drink } from './schemas/drink.schema';
import { Model } from 'mongoose';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { DeleteDrinksDto } from './dto/delete-drinks.dto';

@Injectable()
export class DrinkService {
	constructor(
		@InjectModel(Drink.name)
		private drinkModel: Model<Drink>,
	) {}

	async findAll({ page = 1, itemsPerPage = 2, ...query }) {
		const skip = itemsPerPage * (page - 1);
		const keyword = query.keyword
			? {
					name: {
						$regex: query.keyword,
						$options: 'i',
					},
			  }
			: {};

		const drinks = await this.drinkModel
			.find({ ...keyword })
			.skip(skip)
			.limit(itemsPerPage);

		return {
			drinks,
			pagination: {
				currentPage: page,
				itemsPerPage,
			},
		};
	}

	async findById(id: string): Promise<Drink> {
		const drink = await this.drinkModel.findById(id);

		if (drink === null) {
			throw new NotFoundException('Drink is not found');
		}

		return drink;
	}

	create(createDrinkDto: CreateDrinkDto): Promise<Drink> {
		return this.drinkModel.create(createDrinkDto);
	}

	update(id: string, updateDrinkDto: UpdateDrinkDto): Promise<Drink> {
		return this.drinkModel.findByIdAndUpdate(id, updateDrinkDto, {
			new: true,
			runValidators: true,
		});
	}

	deleteMany({
		ids,
	}: DeleteDrinksDto): Promise<{ acknowledged; deletedCount }> {
		console.log('ids', ids);
		return this.drinkModel.deleteMany({ _id: { $in: ids } });
	}
}
