import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CityModule } from './city/city.module';
import { CountyModule } from './county/county.module';
import { CitySchema } from './city/city.schema';
import { CountySchema } from './county/county.schema';
import * as dotenv from 'dotenv';
import { SeederService } from './seeder/seeder.service';

dotenv.config();

@Module({
  imports: [
    CityModule,
    CountyModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: 'City', schema: CitySchema }]),
    MongooseModule.forFeature([{ name: 'County', schema: CountySchema }])
  ],
  controllers: [AppController],
  providers: [AppService, SeederService],
})
export class AppModule {}
