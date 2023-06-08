import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Pagination = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const { current, limit } = request.query;
        

        return {
            current: Number(current) || 1,
            limit: Number(limit) || 10,
        };
    },
);
