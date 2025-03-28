import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Response } from 'express';

@Injectable()
export class ResponseUnsafeHeadersRemoverInterceptor
  implements NestInterceptor
{
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpContext = context.switchToHttp();

    return next.handle().pipe(
      tap(() => {
        const res: Response = httpContext.getResponse();
        res.removeHeader('X-Powered-By');
      }),
    );
  }
}
