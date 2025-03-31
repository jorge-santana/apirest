import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, timeout } from 'rxjs';

@Injectable()
export class MaxExecutionTimeInterceptor implements NestInterceptor {
  constructor(private readonly timeout: number = 5000) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(timeout(this.timeout));
  }
}
