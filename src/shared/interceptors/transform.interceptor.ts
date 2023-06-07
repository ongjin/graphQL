// transform.interceptor.ts

import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @author 조용진
 * @description 
 *  - 데이터 변환 로직을 수행하고 수정된 데이터를 반환합니다.
 *  - 예를 들어, 특정 필드를 숨기거나 데이터를 가공할 수 있습니다.
 */
@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => {
                // console.log('data', data);
                // delete data.USER_NO
                
                return data;
            }),
        );
    }
}
