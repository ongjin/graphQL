// decorators/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

/**
 * @author 조용진
 * @description roles추가
 * @param roles ex) admin, user
 * @returns 
 */
export const Auth = (...roles: string[]) => SetMetadata('roles', roles);

