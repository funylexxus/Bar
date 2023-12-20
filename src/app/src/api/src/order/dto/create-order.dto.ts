import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { CreateDrinkDto } from 'src/drink/dto';

export class CreateOrderDto {
	@IsNotEmpty()
	@IsString()
	// @MaxLength(50)
	readonly address: string;

	@IsNotEmpty()
	@IsNumber()
	// @MaxLength(15)
	@IsNotEmpty()
	@Transform(({ value }) => {
		return Number(value);
	})
	readonly phoneNumber: string;

	@IsNotEmpty()
	readonly drinks: CreateDrinkDto[];

	@IsNotEmpty()
	@IsNumber()
	readonly totalCount: number;
}
