import { DynamicModule, Inject, Module } from '@nestjs/common';
import { setCacheManager } from './cacheable.helper';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Module({})
export class CacheableModule {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {
        setCacheManager(this.cacheManager);
    }
    static register(): DynamicModule {
        return {
            module: CacheableModule,
        };
    }
}