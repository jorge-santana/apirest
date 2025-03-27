import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap, timeout } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();

    return next
      .handle()
      .pipe(timeout(5000))
      .pipe(
        tap(() => {
          console.log(
            `Tempo de execução do manipulador de rota: ${Date.now() - now}ms`,
          );
        }),
      );
  }
}
