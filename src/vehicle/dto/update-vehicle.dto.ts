import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateVehicleDto {
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsInt()
  year: number;

  @IsNotEmpty()
  @IsInt()
  seats: number;

  @IsNotEmpty()
  @IsInt()
  doors: number;

  @IsNotEmpty()
  @IsBoolean()
  isEletric: boolean;

  @IsNotEmpty()
  @IsNumber()
  engine: number;

  @IsNotEmpty()
  @IsArray()
  features: Array<string>;

  @IsNotEmpty()
  @IsString()
  purchaseValue: string;
}
