import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CurrencyPipe implements PipeTransform {
  constructor(
    private readonly locale: string = 'pt-BR',
    private readonly currency: string = 'BRL',
  ) {}

  transform(value: any) {
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
    return Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency: this.currency,
    }).format(value);
  }
}
