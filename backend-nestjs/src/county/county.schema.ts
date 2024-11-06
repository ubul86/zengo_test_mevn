import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CountyDocument = County & Document;

@Schema()
export class County {
    @Prop({ required: true, maxlength: 150 })
    name: string;
}

export const CountySchema = SchemaFactory.createForClass(County);