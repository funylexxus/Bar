import { Module } from '@nestjs/common';
import { DrinkService } from './drink.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DrinkSchema } from './schemas/drink.schema';
import { DrinkController } from './drink.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
	imports: [
		AuthModule,
		MongooseModule.forFeature([{ name: 'Drink', schema: DrinkSchema }]),
	],
	controllers: [DrinkController],
	providers: [DrinkService],
})
export class DrinkModule {}
