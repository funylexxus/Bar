import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDrinkDto {
	@IsOptional()
	@IsString()
	readonly name: string;

	@IsOptional()
	@IsString()
	readonly description: string;

	@IsOptional()
	@IsNumber()
	readonly price: number;

	@IsOptional()
	@IsNumber()
	readonly volume: number;
}
