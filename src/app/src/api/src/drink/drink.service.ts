import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Drink } from './schemas/drink.schema';
import { Model } from 'mongoose';
import * as _ from 'lodash';
import * as AWS from 'aws-sdk';
import { Parser } from '@json2csv/plainjs';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { DeleteDrinksDto } from './dto/delete-drinks.dto';

const SORT_ORDER = {
	asc: 1,
	desc: -1,
};

@Injectable()
export class DrinkService {
	AWS_S3_BUCKET = 'dat-vu-bar/drinks';
	s3 = new AWS.S3({
		accessKeyId: 'AKIA254P34RSZVY54TUK',
		secretAccessKey: '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',
	});
	constructor(
		@InjectModel(Drink.name)
		private drinkModel: Model<Drink>,
	) {}

	async findAll({
		page = 1,
		itemsPerPage = 2,
		sortField = 'name',
		sortOrder = 'asc',
		keyword,
	}) {
		const matchStage = { $or: [] };
		const pipeline = [];

		if (keyword) {
			if (_.isNaN(Number(keyword))) {
				const escapedQuery = _.replace(keyword, /[.*+?^${}()|[\]\\]/g, '\\$&');
				const regex = { $regex: escapedQuery, $options: 'i' };

				matchStage.$or.push({ name: regex }, { description: regex });
			} else {
				const regex = _.toNumber(keyword);
				matchStage.$or.push({ volume: regex }, { price: regex });
			}

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

	async uploadFile(file) {
		const { originalname } = file;

		return await this.s3_upload(
			file.buffer,
			this.AWS_S3_BUCKET,
			originalname,
			file.mimetype,
		);
	}

	async s3_upload(file, bucket, name, mimetype) {
		const params = {
			Bucket: bucket,
			Key: String(name),
			Body: file,
			ACL: 'public-read',
			ContentType: mimetype,
			ContentDisposition: 'inline',
			CreateBucketConfiguration: {
				LocationConstraint: 'eu-central-1',
			},
		};

		try {
			const s3Response = await this.s3.upload(params).promise();
			console.log('s3Response', s3Response);
			return s3Response;
		} catch (e) {
			console.log(e);
		}
	}

	async exportCsv(res) {
		const fields = [
			{ label: 'Name', value: 'name' },
			{ label: 'Description', value: 'description' },
			{ label: 'Price', value: 'price' },
			{ label: 'Volume', value: 'volume' },
		];
		const drinks = await this.drinkModel.find(
			{},
			{ _id: 0, name: 1, description: 1, price: 1, volume: 1 },
		);
		const parser = new Parser({ fields });
		const csv = parser.parse(drinks);

		res.header('Content-Type', 'text/csv');
		res.attachment('drinks.csv');
		return res.send(csv);
	}
}
