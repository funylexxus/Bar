import { IsDecimal, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDrinkDto {
	@IsNotEmpty()
	@IsString()
	readonly name: string;

	@IsNotEmpty()
	@IsString()
	readonly description: string;

	@IsDecimal()
	@IsNotEmpty()
	readonly price: number;

	@IsNotEmpty()
	@IsDecimal()
	readonly volume: number;
}
