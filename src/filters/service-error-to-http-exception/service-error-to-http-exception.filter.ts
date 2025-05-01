import {
  BadRequestException,
  Catch,
  ExceptionFilter,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { RecordNotFoundError } from 'src/errors/record-not-found-error';

@Catch(RecordNotFoundError, Error)
export class ServiceErrorToHttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T) {
    if (exception instanceof RecordNotFoundError) {
      throw new NotFoundException(exception.message);
    }
    if (exception instanceof Error) {
      throw new InternalServerErrorException(exception.message);
    }
    throw new InternalServerErrorException();
  }
}
