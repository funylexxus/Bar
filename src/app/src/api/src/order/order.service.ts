import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Model } from 'mongoose';
import { Order } from './schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrderService {
	constructor(
		@InjectModel(Order.name)
		private orderModel: Model<Order>,
	) {}

	findAll({ query = {} }) {
		return this.orderModel.find({ ...query });
	}

	create(createOrderDto: CreateOrderDto) {
		return this.orderModel.create(createOrderDto);
	}
}
