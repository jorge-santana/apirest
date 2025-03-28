import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseDataFilterInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: Vehicle[]) => {
        console.log('Dados recebidos do manipulador de rota: ', data);
        const filteredData = data.map((item: Vehicle) => {
          delete item.vin;
          return item;
        });
        return filteredData;
      }),
    );
  }
}
