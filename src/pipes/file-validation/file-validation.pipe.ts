import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FileValidationPipe implements PipeTransform {
  constructor(
    private readonly allowedMimeTypes: string[] = [],
    private readonly maxSize: number = 2 * 1024 * 1024,
  ) {}

  transform(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo foi enviado');
    }

    if (!this.allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        `Tipo de arquivo é inválido. Permitidos: ${this.allowedMimeTypes.join(', ')}`,
      );
    }

    if (file.size > this.maxSize) {
      throw new BadRequestException(
        `O arquivo excede o tamanho máximo permitido de ${this.maxSize / 1024 / 1024}MB`,
      );
    }

    return file;
  }
}
