import { Module } from '@nestjs/common';
import { CountyController } from './county.controller';
import { CountyService } from './county.service';
import {MongooseModule} from "@nestjs/mongoose";
import {County, CountySchema} from "./county.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: County.name, schema: CountySchema }])
  ],
  controllers: [CountyController],
  providers: [CountyService],
  exports: [MongooseModule.forFeature([{ name: County.name, schema: CountySchema }])],
})
export class CountyModule {}
