import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { County } from '../county/county.schema';

export type CityDocument = City & Document;

@Schema()
export class City {
    @Prop({ required: true, maxlength: 150 })
    name: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'County' })
    county: County;
}

export const CitySchema = SchemaFactory.createForClass(City);
