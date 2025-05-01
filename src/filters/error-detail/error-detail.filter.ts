import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class ErrorDetailFilter<T> implements ExceptionFilter {
  constructor(private readonly showStack: boolean = false) {}
  catch(exception: T, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const request = context.getRequest<Request>();
    const response = context.getResponse<Response>();

    if (exception instanceof HttpException) {
      // LISKOV
      response.status(exception.getStatus()).json({
        statusCode: exception.getStatus(),
        messagem: exception.message,
        errorType: exception.name,
        timestamp: new Date().toISOString(),
        path: request.url,
        stack: this.showStack ? exception.stack : '', //nunca utilizar dessa forma
      });
    }

    throw new InternalServerErrorException();
  }
}
