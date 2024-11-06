import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';  // Itt importáljuk a Mongoose Schema-t
import { County } from '../county/county.schema';  // A County modellre való hivatkozás

export type CityDocument = City & Document;

@Schema()
export class City {
    @Prop({ required: true, maxlength: 150 })
    name: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'County' })  // Helyesen használjuk a MongooseSchema-t
    county: County;  // Ha a City-nek van egy hivatkozása egy County-ra
}

export const CitySchema = SchemaFactory.createForClass(City);
