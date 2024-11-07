import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { City } from '../city/city.schema';

export type CountyDocument = County & Document;

@Schema()
export class County {
    @Prop({ required: true, maxlength: 150 })
    name: string;

    @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'City' })
    cities: City[];
}

export const CountySchema = SchemaFactory.createForClass(County);
