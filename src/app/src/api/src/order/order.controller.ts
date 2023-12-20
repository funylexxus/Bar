import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { Order } from './schemas/order.schema';

@Controller('api/v1/orders')
export class OrderController {
	constructor(private orderService: OrderService) {}
	@Post()
	createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
		return this.orderService.create(createOrderDto);
	}
}
