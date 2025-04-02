import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // TODO: Verificar se o usuário tem autorização para acessar a rota, mesmo que ele esteja autenticado.
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log('Metadado do contexto de execução: ', roles);
    console.log('Passamos pelo Guard');
    if (roles.includes('guest')) {
      return true;
    }

    return false;
  }
}
