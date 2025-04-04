import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const GetId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req: Request = ctx.switchToHttp().getRequest();

    const id = req.params['id'];
    const idByQuery = req.query['id'];
    const idByBody = (req.body as Record<string, unknown>)?.['id'];

    console.log('Decorador personalizado: ', id, idByQuery, idByBody);

    return idByBody ?? idByQuery ?? id;
  },
);
