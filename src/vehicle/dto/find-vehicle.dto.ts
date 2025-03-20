import { IsOptional } from 'class-validator';

export class FindVehicleDto {
  @IsOptional()
  brand: string;

  @IsOptional()
  seats: number;

  @IsOptional()
  uppercase: boolean;
}
