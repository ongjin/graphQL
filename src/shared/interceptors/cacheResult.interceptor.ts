import { Injectable, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@Injectable()
export class GraphqlCacheInterceptor extends CacheInterceptor {
    trackBy(context: ExecutionContext): string | undefined {
        const gqlContext = GqlExecutionContext.create(context);
        const info = gqlContext.getInfo();
        const cacheKey = `${info.parentType.name}:${info.fieldName}`;
        
        return cacheKey;
    }
}
