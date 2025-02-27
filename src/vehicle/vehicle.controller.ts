import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { SaveVehicleDto } from './dto/save-vehicle.dto';
import { SaveVehicleHeadersDto } from './dto/save-vehicle-headers.dto';
import { FindVehicleDto } from './dto/find-vehicle.dto';
import { FindByIdVehicleDto } from './dto/find-by-id-vehicle.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { VehicleService } from './vehicle.service';
import { Response } from 'express';

@Controller('api/v1/vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}
  @Get()
  findAll(@Query() data: FindVehicleDto) {
    return this.vehicleService.findAll(data);
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
  replace(@Param('id') id: string, @Res() res: Response) {
    console.log(id);
    // TODO: Atualizar todos os dados de um veículo (substituir)
    //return { message: 'Atualiza todos os dados de um veículo' };
    return res
      .status(202) //Requisição aceita, porém o processamento será feito mais tarde, de forma assíncrona
      .json({ message: 'Atualiza todos os dados de um veículo' });
  }

  @Delete(':id')
  @HttpCode(204) // Requisição bem-sucedida, mas sem conteúdo
  delete(@Param('id') id: string) {
    console.log(id);
    // TODO: Remover um veículo
    return { message: 'Remove um veículo' };
  }
}
