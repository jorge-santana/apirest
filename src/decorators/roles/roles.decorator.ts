import { SetMetadata } from '@nestjs/common';

export const Roles = (...args: string[]) => {
  // Não exibe o console.log porque o decorador personalizado é executado na fase de definição
  console.log('Passamos pelo Decorator Personalizado');
  return SetMetadata('roles', args);
}; // Contexto de Execução
