import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderService } from './order.service';
import { AuthModule } from '../auth/auth.module';
import { OrderSchema } from './schemas/order.schema';

@Module({
	imports: [
		AuthModule,
		MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
	],
	controllers: [OrderController],
	providers: [OrderService],
})
export class OrderModule {}
