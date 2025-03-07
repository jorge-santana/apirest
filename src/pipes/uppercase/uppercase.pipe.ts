import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any) {
    // String
    if (typeof value === 'string') {
      return value.toUpperCase();
    }

    // Array<string>
    if (Array.isArray(value)) {
      return value.map((item) => {
        if (typeof item === 'string') {
          return item.toUpperCase();
        }
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value;
  }
}
