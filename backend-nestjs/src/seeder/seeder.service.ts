import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City, CityDocument } from '../city/city.schema';
import { County, CountyDocument } from '../county/county.schema';

@Injectable()
export class SeederService {
    constructor(
        @InjectModel(City.name) private cityModel: Model<CityDocument>,
        @InjectModel(County.name) private countyModel: Model<CountyDocument>,
    ) {}

    async seed() {
        await this.countyModel.deleteMany();
        await this.cityModel.deleteMany();

        const counties = await this.countyModel.create([
            { name: 'Csongrád-Csanád' },
            { name: 'Borsod' },
        ]);

        const cities = await this.cityModel.create([
            { name: 'Szeged', countyId: counties[0]._id },
            { name: 'Miskolc', countyId: counties[1]._id },
        ]);

        console.log('Data seeded successfully:', { counties, cities });
    }
}
