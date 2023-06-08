// decorators/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';
import { ROLES_KEY } from '../environments';

/**
 * @description roles추가
 * @param roles ex) admin, user
 * @returns 
 */
export const Auth = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
