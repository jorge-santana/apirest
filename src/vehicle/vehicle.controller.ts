import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('api/v1/vehicle')
export class VehicleController {
  @Get()
  findAll() {
    // TODO: Retornar todos os registros de vículos
    return [{ brand: 'Toyota' }, { brand: 'Ford' }];
  }

  @Get(':id')
  findOne() {
    // TODO: Recuperar um veículo por id
    return { message: 'Retorna um veículo por id' };
  }

  @Post()
  save() {
    // TODO: Registrar um veículo
    return { message: 'Registrar veículo' };
  }

  @Patch(':id')
  update() {
    // TODO: Atualizar um veículo (parcial)
    return { message: 'Atualizar parte de um veículo' };
  }

  @Put(':id')
  replace() {
    // TODO: Atualizar todos os dados de um veículo (substituir)
    return { message: 'Atualiza todos os dados de um veículo' };
  }

  @Delete(':id')
  delete() {
    // TODO: Remover um veículo
    return { message: 'Remove um veículo' };
  }
}
