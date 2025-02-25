import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { SaveVehicleDto } from './dto/save-vehicle.dto';
import { SaveVehicleHeadersDto } from './dto/save-vehicle-headers.dto';
import { FindVehicleDto } from './dto/find-vehicle.dto';
import { FindByIdVehicleDto } from './dto/find-by-id-vehicle.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/v1/vehicle')
export class VehicleController {
  @Get()
  findAll(@Query() data: FindVehicleDto) {
    console.log('Dados via Query String: ', data);
    // TODO: Retornar todos os registros de vículos
    return [{ brand: 'Toyota' }, { brand: 'Ford' }];
  }

  // /api/v1/vehicle/1
  @Get(':id')
  findOne(@Param('id') id: FindByIdVehicleDto) {
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
  @UseInterceptors(FileInterceptor('cover'))
  save(
    @Body() body: SaveVehicleDto,
    @UploadedFile() cover: Express.Multer.File,
    @Headers() headers: SaveVehicleHeadersDto,
  ) {
    // TODO: Tipo do parâmetro para DTO
    console.log(headers, body, cover);
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
