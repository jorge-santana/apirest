import { Injectable } from '@nestjs/common';
import { FindVehicleDto } from './dto/find-vehicle.dto';

@Injectable()
export class VehicleService {
  findAll(data: FindVehicleDto) {
    console.log('Dados recebidos no service: ', data);
    // TODO: Retornar todos os registros de vículos
    return [{ brand: 'Toyota' }, { brand: 'Ford' }, { brand: 'Honda' }];
  }
}
