import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';  // Itt is importáljuk a Mongoose Schema-t
import { City } from '../city/city.schema';  // A City modellre való hivatkozás

export type CountyDocument = County & Document;

@Schema()
export class County {
    @Prop({ required: true, maxlength: 150 })
    name: string;

    @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'City' })  // Helyesen használjuk a MongooseSchema-t
    cities: City[];  // Ha a County-ban a City-k kapcsolódnak
}

export const CountySchema = SchemaFactory.createForClass(County);
