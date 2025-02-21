import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

interface Vehicle {
  brand: string;
  model: string;
  color: string;
  year: number;
  seats: number;
  doors: number;
}

@Controller('api/v1/vehicle')
export class VehicleController {
  @Get()
  findAll(
    @Query('seats') seats: string,
    @Query('uppercase') uppercase: string,
    @Query('brand') brand: string,
    @Query('doors') doors: string,
  ) {
    console.log('SEATS: ', seats);
    console.log('UPPERCASE: ', uppercase);
    console.log('BRAND: ', brand);
    console.log('DOORS: ', doors);
    // TODO: Retornar todos os registros de vículos
    return [{ brand: 'Toyota' }, { brand: 'Ford' }];
  }

  // /api/v1/vehicle/1
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('ID: ', id);
    // TODO: Recuperar um veículo por id
    return { message: 'Retorna um veículo por id' };
  }

  // /api/v1/vehicle/toyota/4/seats/2
  @Get(':brand/:doors/seats/:seats')
  find(
    @Param('brand') brand: string,
    @Param('doors') doors: string,
    @Param('seats') seats: string,
  ) {
    console.log('BRAND: ', brand);
    console.log('DOORS: ', doors);
    console.log('SEATS: ', seats);
    // TODO: Recuperar um veículo por id
    return { message: 'Retorna um veículo por id' };
  }

  @Post()
  save(@Body() body: Vehicle) {
    // TODO: Tipo do parâmetro para DTO
    console.log(body);
    console.log(body?.model);
    // TODO: Registrar um veículo
    return { message: 'Registrar veículo' };
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    console.log(id);
    // TODO: Atualizar um veículo (parcial)
    return { message: 'Atualizar parte de um veículo' };
  }

  @Put(':id')
  replace(@Param('id') id: string) {
    console.log(id);
    // TODO: Atualizar todos os dados de um veículo (substituir)
    return { message: 'Atualiza todos os dados de um veículo' };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log(id);
    // TODO: Remover um veículo
    return { message: 'Remove um veículo' };
  }
}
