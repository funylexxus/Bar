import { Transform } from 'class-transformer';
import { IsNumber, IsPositive, Min } from 'class-validator';

export class GetDrinksDto {
	@IsPositive()
	@Transform(({ value }) => {
		return Number(value);
	})
	readonly page: number;

	@IsPositive()
	@IsNumber()
	@Transform(({ value }) => {
		return Number(value);
	})
	readonly itemsPerPage: number;

	readonly sortFiend: string;
	readonly sortOrder: string;
}
