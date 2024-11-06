import {Body, Controller, Get, Post, Put, Delete, Param, Query, NotFoundException} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto} from "./dto/update-city.dto";

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) {}

    @Get(':id')
    async getCity(@Param('id') id: string) {
        const city = this.cityService.findById(id);

        if (!city) {
            throw new NotFoundException(`City not found`);
        }

        return city;
    }

    @Get()
    async index(@Query('countyId') countyId?: string) {
        return this.cityService.findAllCities(countyId);
    }

    @Post()
    async create(@Body() CreateCityDto: CreateCityDto) {
        return this.cityService.createCity(CreateCityDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() UpdateCityDto: UpdateCityDto) {
        return this.cityService.updateCity(id, UpdateCityDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.cityService.deleteCity(id);
    }

}