import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { map, Observable, tap, timeout } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpContext = context.switchToHttp();

    const req: Request = httpContext.getRequest();
    console.log('Cabeçalhos da requisição: ', req.headers);

    const now = Date.now();

    return next
      .handle()
      .pipe(timeout(5000))
      .pipe(
        map((data: Array<{ brand: string }>) => {
          console.log('Dados recebidos do manipulador de rota: ', data);
          return data[0];
        }),
      )
      .pipe(
        tap(() => {
          const res: Response = httpContext.getResponse();
          res.removeHeader('X-Powered-By');
          console.log('Cabeçalhos da resposta: ', res.getHeaders());
          console.log(
            `Tempo de execução do manipulador de rota: ${Date.now() - now}ms`,
          );
        }),
      );
  }
}
