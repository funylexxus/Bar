import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDrinkDto {
	@IsNotEmpty()
	@IsString()
	readonly name: string;

	readonly description: string;

	@IsNotEmpty()
	@IsNumber()
	readonly price: string;

	@IsNotEmpty()
	@IsNumber()
	readonly volume: string;
}
