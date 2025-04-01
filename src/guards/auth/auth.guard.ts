import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // TODO: Verificar se o usuário tem autorização para acessar a rota, mesmo que ele esteja autenticado.
    console.log('Passamos pelo Guard');
    return false;
  }
}
