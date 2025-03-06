import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CurrencyPipe implements PipeTransform {
  transform(value: any) {
    console.log('Dentro do Pipe: ', value);

    if (typeof value === 'string') {
      // TODO: Converter para number e aplicar máscara monetária
      const numericValue = value.replace('.', '').replace(',', '.');

      const parsedValue = parseFloat(numericValue);

      if (isNaN(parsedValue)) {
        throw new HttpException(
          `Não foi possível aplicar a máscara monetária ao valor: ${value}`,
          HttpStatus.BAD_REQUEST,
        );
      }

      return this.format(parsedValue);
    }

    if (typeof value === 'number') {
      // TODO: Aplicar máscara monetária
      return this.format(value);
    }

    throw new HttpException(
      `Não foi possível aplicar a máscara monetária ao valor: ${value}`,
      HttpStatus.BAD_REQUEST,
    );
  }

  private format(value: number): string {
    // local = pt-BR; currency = BRL
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  }
}
