import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CityDocument = City & Document;

@Schema()
export class City {
    @Prop({ required: true, maxlength: 150 })
    name: string;

    @Prop({ required: true })
    countyId: string;
}

export const CitySchema = SchemaFactory.createForClass(City);