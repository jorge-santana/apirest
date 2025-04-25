import { HttpException, HttpStatus } from '@nestjs/common';

export class TooManyRequestsHttpException extends HttpException {
  constructor() {
    super(
      'Quantidade requisições excedidas para este end-point!',
      HttpStatus.TOO_MANY_REQUESTS,
    );
  }
}
