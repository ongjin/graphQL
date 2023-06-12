import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

/**
 * @description Header정보를 가져옴
 */
export const Header = createParamDecorator((data: string, context: ExecutionContext) => {
    const gqlContext = GqlExecutionContext.create(context);
    const request = gqlContext.getContext().req;

    if (data) {
        // 특정 헤더 필드를 가져오려면 request.headers 객체를 사용합니다.
        return request.headers[data];
    }

    // 모든 헤더 정보를 가져오려면 request.headers를 직접 반환합니다.
    return request.headers;
});



/**
 * @description customRequest 정보를 가져옴
 */
export const CustomRequest = createParamDecorator((data: string, context: ExecutionContext) => {
    const gqlContext = GqlExecutionContext.create(context);
    const request = gqlContext.getContext().req;

    return request[data];
});
