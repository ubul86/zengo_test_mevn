import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateCityDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
