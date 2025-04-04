import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/common/enums/user-role.enum';

export const Roles = (...args: UserRole[]) => {
  // Não exibe o console.log porque o decorador personalizado é executado na fase de definição
  console.log('Passamos pelo Decorator Personalizado');
  return SetMetadata('roles', args);
}; // Contexto de Execução
