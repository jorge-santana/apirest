import { applyDecorators, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UserRole } from 'src/common/enums/user-role.enum';
import { Roles } from 'src/decorators/roles/roles.decorator';

export const DeleteDecorator = () =>
  applyDecorators(
    Delete(':id'),
    Roles(UserRole.PUBLIC),
    HttpCode(HttpStatus.NO_CONTENT),
  );
