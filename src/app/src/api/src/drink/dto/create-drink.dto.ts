import { Transform } from 'class-transformer';
import {
	IsDecimal,
	IsNotEmpty,
	IsNumber,
	IsString,
	Max,
	MaxLength,
	Min,
	MinLength,
} from 'class-validator';

export class CreateDrinkDto {
	@IsNotEmpty()
	@IsString()
	@MaxLength(20)
	readonly name: string;

	@IsNotEmpty()
	@IsString()
	@MaxLength(30)
	readonly description: string;

	@Min(10)
	@Max(10000)
	@IsNotEmpty()
	@Transform(({ value }) => {
		return Number(value);
	})
	readonly price: number;

	@IsNotEmpty()
	@Min(0.5)
	@Max(1)
	@Transform(({ value }) => {
		return Number(value);
	})
	readonly volume: number;

	readonly imgUrl: string;
}
