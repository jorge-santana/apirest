import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class SaveVehicleDto {
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
  @Transform(({ value }) => Number(value))
  @IsInt()
  year: number;

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @IsInt()
  seats: number;

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @IsInt()
  doors: number;
}
