import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FileValidationPipe implements PipeTransform {
  transform(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo foi enviado');
    }

    if (!['image/png', 'image/jpg'].includes(file.mimetype)) {
      throw new BadRequestException(
        `Tipo de arquivo é inválido. Permitidos: ${['image/png', 'image/jpg'].join(', ')}`,
      );
    }

    if (file.size > 2 * 1024 * 1024) {
      throw new BadRequestException(
        'O arquivo excede o tamanho máximo permitido de 2MB',
      );
    }

    return file;
  }
}
