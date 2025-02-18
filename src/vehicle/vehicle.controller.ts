import { Controller, Get } from '@nestjs/common';

@Controller('api/v1/vehicle')
export class VehicleController {
  @Get()
  findAll() {
    return [{ brand: 'Toyota' }, { brand: 'Ford' }];
  }
}
