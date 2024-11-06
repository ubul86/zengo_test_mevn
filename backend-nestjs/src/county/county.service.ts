import { Injectable } from '@nestjs/common';
import { County, CountyDocument} from "./county.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class CountyService {

    constructor(@InjectModel(County.name) private countyModel: Model<CountyDocument>) {}

    async getCounties(): Promise<County[]> {
        return await this.countyModel.find().exec();
    }

}
