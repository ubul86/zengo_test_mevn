import {Body, Controller, Get, Post, Put, Delete, Param, Query, NotFoundException} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto} from "./dto/update-city.dto";
import {formatCityResponse} from "../utils/format-response.util";

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) {}

    @Get(':id')
    async getCity(@Param('id') id: string) {
        const city = this.cityService.findById(id);

        if (!city) {
            throw new NotFoundException(`City not found`);
        }

        return formatCityResponse(city);
    }

    @Get()
    async index(@Query('countyId') countyId?: string) {
        const cities = await this.cityService.findAllCities(countyId);
        return cities.map( city => formatCityResponse(city));
    }

    @Post()
    async create(@Body() CreateCityDto: CreateCityDto) {
        const city = await this.cityService.createCity(CreateCityDto);
        return formatCityResponse(city);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() UpdateCityDto: UpdateCityDto) {
        const city = this.cityService.updateCity(id, UpdateCityDto);
        return formatCityResponse(city);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.cityService.deleteCity(id);
    }

}