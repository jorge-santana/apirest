import { Injectable } from '@nestjs/common';
import { FindVehicleDto } from './dto/find-vehicle.dto';

@Injectable()
export class VehicleService {
  findAll(data: FindVehicleDto): Vehicle[] {
    console.log('Passamos pelo service');
    // TODO: Retornar todos os registros de vículos
    return [
      { brand: 'Toyota', model: 'Corolla', vin: '4gra4grae646' },
      { brand: 'Ford', model: 'Focus', vin: 'gr584a6g4are6' },
      { brand: 'Honda', model: 'Civic', vin: 'gra5gra54gr5ae' },
    ];
  }
}
