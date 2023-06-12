import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

/**
 * @description 인가
 */
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector,
    ) { }

    canActivate(context: ExecutionContext): boolean {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();

        const bypassAuth = this.reflector.get<string>('bypassAuth', context.getHandler());
        if (bypassAuth) {
            return true; // 특정 메서드에 대해 인증 절차를 생략
        }

        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            throw new UnauthorizedException('Invalid token');
            return false; // 토큰이 없으면 인증 실패
        }

        try {
            // 토큰을 검증하여 사용자 정보를 추출하는 로직
            const decoded = this.jwtService.verify(token);
            req.user = decoded; // 요청 객체에 사용자 정보 추가

            return true; // 인증 성공
        } catch (error) {
            throw new UnauthorizedException('Expired token or Sign');
            return false; // 토큰 검증 실패로 인증 실패
        }
    }
}
