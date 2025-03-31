import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseDataFilterInterceptor implements NestInterceptor {
  constructor(private readonly dataFilter: string[] = []) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: Vehicle[]) => {
        console.log(this.dataFilter, data);
        const filteredData = data.map((item: Vehicle) => {
          this.dataFilter.map((value) => {
            delete item[value as keyof Vehicle];
          });
          return item;
        });
        return filteredData;
      }),
    );
  }
}
