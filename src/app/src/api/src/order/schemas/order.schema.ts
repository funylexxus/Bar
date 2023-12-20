import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Drink } from 'src/drink/schemas/drink.schema';

@Schema({
	timestamps: true,
})
export class Order {
	@Prop()
	drinks: Drink[];

	@Prop()
	address: string;

	@Prop()
	phoneNumber: number;

	@Prop()
	totalCount: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
