import {
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, timeout } from 'rxjs';

@Injectable()
export class MaxExecutionTimeInterceptor implements NestInterceptor {
  constructor(private readonly timeout: number = 5000) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(timeout(this.timeout))
      .pipe(
        catchError((error: unknown) => {
          if (error instanceof Error) {
            throw new InternalServerErrorException(error.message);
          } else {
            throw new InternalServerErrorException(
              'A requisição excedeu o tempo limite de resposta',
            );
          }
        }),
      );
  }
}
