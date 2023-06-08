import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ROLES_KEY } from '../environments';

/**
 * @description roles 인가
 */
@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector, 
        private jwtService: JwtService
    ) { }

    canActivate(context: ExecutionContext): boolean {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        const roles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
        // const roles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);

        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException('Invalid token');
            return false; // 토큰이 없으면 인증 실패
        }

        try {
            // 토큰을 검증하여 사용자 정보를 추출하는 로직
            const decoded = this.jwtService.verify(token);
            req.user = decoded; // 요청 객체에 사용자 정보 추가

            // 사용자의 역할과 요청에 필요한 역할 비교
            const userRoles = decoded.roles;
            const hasRequiredRoles = userRoles.some((role) => roles.includes(role));


            return hasRequiredRoles; // 권한 검사 결과 반환
        } catch (error) {
            throw new UnauthorizedException('Unauthenticated');
            return false; // 토큰 검증 실패로 인증 실패
        }
    }
}
