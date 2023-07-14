import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * @description 모든 요청에 대한 로깅
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor(
        private reflector: Reflector,
    ){}
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const target = context.getClass();
        const propertyKey = context.getHandler().name;
        const logger = new Logger(target.name);
        const now = Date.now();


        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();

        
        const bypassAuth = this.reflector.get<string>('bypassAuth', context.getHandler());
        if (bypassAuth) {
            return next.handle(); // 로깅 생략
        }

        // logger.log(`Calling ${propertyKey} with arguments ${JSON.stringify(context.getArgs(), this.getCircularReplacer())}`);
        // logger.log(`Calling ${propertyKey} time: ${Date.now() - now}ms`);

        return next.handle().pipe(
            tap((result) => {
                logger.log(`Calling ${propertyKey}`);
                logger.log(`ExecutionTime: ${Date.now() - now}ms`);
                logger.log(`JWT \n발급 일자 : ${new Date(req.user?.iat * 1000)} \n만료 일자 : ${new Date(req.user?.exp * 1000)}`)
                // logger.log(`Method ${propertyKey} returned ${JSON.stringify(result, this.getCircularReplacer())}`);
                // logger.log(`Method ${propertyKey} returned ${JSON.stringify(result, this.getCircularReplacer())}`);
            }),
        );
    }

    private getCircularReplacer(): (key: string, value: any) => any {
        const seen = new WeakSet();
        return (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (seen.has(value)) {
                    return;
                }
                seen.add(value);
            }
            return value;
        };
    }
}
