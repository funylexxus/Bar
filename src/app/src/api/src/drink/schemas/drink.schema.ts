import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
	timestamps: true,
})
export class Drink {
	@Prop()
	name: string;

	@Prop()
	description: string;

	@Prop()
	price: number;

	@Prop()
	volume: number;
}

export const DrinkSchema = SchemaFactory.createForClass(Drink);
