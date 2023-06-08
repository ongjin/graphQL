// // logging.interceptor.ts

// import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

// /**
//  * @description 모든 요청에 대한 로깅
//  */
// @Injectable()
// export class LoggingInterceptor implements NestInterceptor {
//     intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//         const httpContext = context.switchToHttp();
//         const request = httpContext.getRequest();
//         const response = httpContext.getResponse();
//         const method = request?.method;
//         const url = request?.url;
//         const now = Date.now();

//         const target = context.getClass();
//         const propertyKey = context.getHandler().name;
//         const logger = new Logger(target.name);

//         return next.handle().pipe(
//             tap(() => {
//                 console.log(`${method} ${url} ${Date.now() - now}ms`);
//                 Logger.log(`${method} ${url} ${Date.now() - now}ms`)
//                 logger.log(`Calling ${propertyKey} with arguments ${JSON.stringify(context.getArgs())}`);
//             }),
//         );
//     }
// }



import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const target = context.getClass();
        const propertyKey = context.getHandler().name;
        const logger = new Logger(target.name);
        const now = Date.now();

        // logger.log(`Calling ${propertyKey} with arguments ${JSON.stringify(context.getArgs(), this.getCircularReplacer())}`);
        // logger.log(`Calling ${propertyKey} time: ${Date.now() - now}ms`);

        return next.handle().pipe(
            tap((result) => {
                logger.log(`Calling ${propertyKey}`);
                logger.log(`ExecutionTime: ${Date.now() - now}ms`);
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
