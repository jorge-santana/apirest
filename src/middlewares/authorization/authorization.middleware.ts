import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Estamos passando pelo AuthorizationMiddleware');
    const token = req.headers.authorization?.split(' ')[1];
    if (token !== '4rga654ga6e54ga6e4gr6a54egra78') {
      res.setHeader('X-Auth-Attemps-Remaining', 5); // Tentativas
      res.setHeader('Retry-After', 60); //Tempo em segundos para nova tentativa
      throw new ForbiddenException();
    }
    next();
  }
}
