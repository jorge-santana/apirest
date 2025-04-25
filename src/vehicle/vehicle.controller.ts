import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { SaveVehicleDto } from './dto/save-vehicle.dto';
import { FindVehicleDto } from './dto/find-vehicle.dto';
import { FindByIdVehicleDto } from './dto/find-by-id-vehicle.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { VehicleService } from './vehicle.service';
import { UppercasePipe } from 'src/pipes/uppercase/uppercase.pipe';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { CurrencyPipe } from 'src/pipes/currency/currency.pipe';
import { FileValidationPipe } from 'src/pipes/file-validation/file-validation.pipe';
import { ResponseDataFilterInterceptor } from './interceptors/response-data-filter/response-data-filter.interceptor';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { UserRole } from 'src/common/enums/user-role.enum';
import { GetId } from 'src/decorators/get-id.decorator';
import { DeleteDecorator } from './decorators/delete-decorator.decorator';
import { TooManyRequestsHttpException } from 'src/errors/too-many-requests-http-exception';
import { RecordNotFoundError } from 'src/errors/record-not-found-error';

@Controller('api/v1/vehicle')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}
  @Get()
  @Roles(UserRole.PUBLIC)
  @UseInterceptors(new ResponseDataFilterInterceptor(['vin']))
  findAll(@Query() data: FindVehicleDto) {
    console.log('Passamos pelo manipulador de rota');
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
  @Roles(UserRole.ADMIN)
  @UseInterceptors(FileInterceptor('cover'))
  save(
    @Body() body: SaveVehicleDto,
    @Body('purchaseValue', new CurrencyPipe()) purchaseValue: string,
    @UploadedFile(new FileValidationPipe(['image/png'], 3 * 1024 * 1024))
    cover: Express.Multer.File,
    // @Headers() headers: SaveVehicleHeadersDto,
  ) {
    // TODO: Tipo do parâmetro para DTO
    console.log(cover);
    // TODO: Registrar um veículo
    return { message: 'Registrar veículo' };
  }

  @Patch()
  @UsePipes(UppercasePipe)
  async update(
    @Query('id', ParseIntPipe) id: number,
    @Body() body: UpdateVehicleDto,
  ) {
    console.log('Dentro do Controller');
    // console.log(body);
    // TODO: Atualizar um veículo (parcial)
    await new Promise((resolve) => setTimeout(resolve, 6000));
    return { message: 'Atualizar parte de um veículo' };
  }

  @Put(':id')
  @Roles(UserRole.PUBLIC)
  replace(@Param('id', ParseIntPipe) id: number) {
    //throw new Error('Erro: A requisição foi mal formada');
    /*
    throw new HttpException(
      'A requisição foi mal formada',
      HttpStatus.BAD_REQUEST,
    );
    */
    //throw new BadRequestException('A requisição foi mal formada');
    //throw new TooManyRequestsHttpException();
    try {
      return this.vehicleService.replace(id);
    } catch (error: unknown) {
      if (error instanceof RecordNotFoundError) {
        throw new NotFoundException(error.message);
      }
      throw new InternalServerErrorException();
    }
  }

  @DeleteDecorator()
  delete(@GetId() id: string) {
    console.log(`Remove um veículo ${id}`);
    // TODO: Remover um veículo
    return { message: `Remove um veículo ${id}` };
  }
}
