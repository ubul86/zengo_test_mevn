import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City, CityDocument  } from './city.schema';
import { County, CountyDocument  } from '../county/county.schema';
import { CreateCityDto } from "./dto/create-city.dto";
import { UpdateCityDto } from "./dto/update-city.dto";
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class CityService {

    constructor(
        @InjectModel(City.name) private cityModel: Model<CityDocument>,
        @InjectModel(County.name) private countyModel: Model<CountyDocument>
    ) {}

    async findById(id: string): Promise<City> {
        return await this.cityModel.findById(id).populate('county').exec();
    }

    async findAllCities(countyId?: string): Promise<City[]> {
        const filter = countyId ? { county: countyId } : {};
        return await this.cityModel.find(filter).populate('county').exec();
    }

    async createCity(createCityDto: CreateCityDto): Promise<City> {
        const county = await this.countyModel.findById(createCityDto.countyId).exec();

        if (!county) {
            throw new Error('County not found');
        }

        const createdCity = new this.cityModel({
            name: createCityDto.name,
            county: county._id,
        });

        return createdCity.save();
    }

    async updateCity(id: string, updateCityDto: UpdateCityDto): Promise<City> {
        const city = await this.cityModel.findByIdAndUpdate(
            id,
            { $set: updateCityDto },
            { new: true }
        ).populate('county').exec();

        if (!city) {
            throw new NotFoundException(`City with id ${id} not found`);
        }

        return city;
    }

    async deleteCity(id: string): Promise<boolean> {
        const result = await this.cityModel.findByIdAndDelete(id).exec();

        if (!result) {
            throw new NotFoundException(`City with id ${id} not found`);
        }

        return true;
    }
}