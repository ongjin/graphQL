// transform.interceptor.ts

import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { isArray } from 'class-validator';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EncryptionLibrary } from '../common';


/**
 * @description 
 *  - 데이터 변환 로직을 수행하고 수정된 데이터를 반환합니다.
 *  - 예를 들어, 특정 필드를 숨기거나 데이터를 가공할 수 있습니다.
 */
@Injectable()
export class TransformInterceptor implements NestInterceptor {
    constructor(
        private readonly encryptionLibrary: EncryptionLibrary
    ) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map(async (data: any) => {
                // console.log('data', data);

                // if(isArray(data)){
                //     data.map(val => delete val.MS_NO)
                //     data.map(val => delete val.USER_NO)
                // }else{
                //     delete data.USER_NO
                //     delete data.MS_NO
                // }

                const encrypt1 = this.encryptionLibrary.encrypt('admin')
                console.log('encryptResult', this.encryptionLibrary.encrypt('admin'), this.encryptionLibrary.encrypt('user'));

                return data;
            }),
        );
    }
}
