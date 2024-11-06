import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from './city.schema';
import { County, CountySchema } from "../county/county.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
    MongooseModule.forFeature([{ name: County.name, schema: CountySchema }])
  ],
  controllers: [CityController],
  providers: [CityService]
})
export class CityModule {}
