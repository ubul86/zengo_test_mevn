import { Controller, Get, Param } from '@nestjs/common';
import { CountyService } from './county.service';
import {NotFoundError} from "rxjs";

@Controller('county')
export class CountyController {

    constructor(private readonly countyService: CountyService) {}

    @Get()
    async index() {
        const counties = this.countyService.getCounties();

        if (!counties) {
            throw new NotFoundError(`Counties not found!`);
        }

        return counties;
    }
}
