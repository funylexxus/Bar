import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Drink } from './schemas/drink.schema';
import { Model } from 'mongoose';
import * as _ from 'lodash';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { DeleteDrinksDto } from './dto/delete-drinks.dto';

const SORT_ORDER = {
	asc: 1,
	desc: -1,
};

@Injectable()
export class DrinkService {
	constructor(
		@InjectModel(Drink.name)
		private drinkModel: Model<Drink>,
	) {}

	async findAll({
		page = 1,
		itemsPerPage = 2,
		sortField = 'name',
		sortOrder = 'asc',
		...query
	}) {
		const matchStage = { $or: [] };
		const pipeline = [];

		if (query.keyword) {
			const escapedQuery = _.replace(
				query.keyword,
				/[.*+?^${}()|[\]\\]/g,
				'\\$&',
			);
			const regex = { $regex: escapedQuery, $options: 'i' };

			matchStage.$or.push(
				{ name: regex },
				{ description: regex },
				{ volume: regex },
				{ price: regex },
			);

			pipeline.push({ $match: matchStage });
		}

		const facetData = [
			{ $sort: { [sortField]: SORT_ORDER[sortOrder] } },
			{ $skip: (page - 1) * itemsPerPage },
			{ $limit: _.parseInt(itemsPerPage) },
		];

		pipeline.push({
			$facet: {
				data: facetData,
				count: [{ $count: 'count' }],
			},
		});

		const [{ data: drinks, count }] = await this.drinkModel.aggregate(
			pipeline,
			{ collation: { locale: 'en_US' } },
		);
		const totalCount = count?.[0]?.count ?? 0;
		let pagesCount = 0;
		pagesCount = _.ceil(totalCount / itemsPerPage);

		return {
			drinks,
			pagination: {
				currentPage: page,
				itemsPerPage,
				pagesCount,
				totalCount,
				sortField,
				sortOrder,
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
