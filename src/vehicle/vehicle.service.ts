import { Injectable } from '@nestjs/common';
import { FindVehicleDto } from './dto/find-vehicle.dto';
import { RecordNotFoundError } from 'src/errors/record-not-found-error';

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
  replace(id: number) {
    // 1 - Verificar se o item a ser substituído existe (se sim, avançar na lógica, se não, lançar uma exceção)
    throw new RecordNotFoundError(id);
    /*
     throw new Error(
      `Erro: Item de ID ${id} não foi localizado no banco de dados`,
    );
    */
    // 2 - Inserir o novo item no banco de dados (se sim, avançar na lógica, se não, lançar uma exceção)
    // 3 - Inativar o item antigo no banco de dados (se sim, avançar na lógica, se não, lançar uma exceção)
    return { message: `SERVICE: Substituir veículo ID ${id}` };
  }
}
