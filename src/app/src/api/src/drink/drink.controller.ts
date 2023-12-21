import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
	UploadedFile,
	Res,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { DrinkService } from './drink.service';
import { Drink } from './schemas/drink.schema';
import { ValidateMongoId } from 'src/pipes/validationPipe';
import { CreateDrinkDto, UpdateDrinkDto } from './dto';
import { DeleteDrinksDto } from './dto/delete-drinks.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetDrinksDto } from './dto/get-drink.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/v1/drinks')
export class DrinkController {
	constructor(private drinkService: DrinkService) {}

	@Get()
	@UseGuards(AuthGuard())
	getAll(@Query() query): Promise<{
		drinks: Drink[];
		pagination: {
			totalCount: number;
			currentPage: number;
			itemsPerPage: number;
			sortField: string;
			sortOrder: string;
		};
	}> {
		return this.drinkService.findAll(query);
	}

	@Get('/count')
	count() {
		return this.drinkService.getDrinksNumber();
	}

	@Get(':id')
	getById(
		@Param('id', ValidateMongoId)
		id: string,
	): Promise<Drink> {
		return this.drinkService.findById(id);
	}

	@Post()
	@UseGuards(AuthGuard())
	create(@Body() createDrinkDto: CreateDrinkDto): Promise<Drink> {
		return this.drinkService.create(createDrinkDto);
	}

	@Patch(':id')
	update(
		@Param('id', ValidateMongoId)
		id: string,
		@Body() updateDrinkDto: UpdateDrinkDto,
	): Promise<Drink> {
		return this.drinkService.update(id, updateDrinkDto);
	}

	@Delete()
	delete(
		@Body() deleteDrinksDto: DeleteDrinksDto,
	): Promise<{ acknowledged; deletedCount }> {
		return this.drinkService.deleteMany(deleteDrinksDto);
	}

	@Post('upload')
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file: Express.Multer.File) {
		return this.drinkService.uploadFile(file);
	}

	@Post('export')
	exportCsv(@Res() res: Response) {
		return this.drinkService.exportCsv(res);
	}
}
