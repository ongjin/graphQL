import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import {
    MemberModule,
    SalesModule,
    UsersTempsModule,

    AccountModule,
    JwtokenModule,

    CategoryModule,
    SubMenuModule,
    PromotionModule,
    StoreModule,
    LanguageModule,
    DailyReportModule,
} from './modules';

import {
    GraphQlExceptionFilter,
    RolesGuard,
    AuthGuard,
    formatError,
    TransformInterceptor,
    DatabaseModule,
    LoggingInterceptor,
    ValidationPipe,
    HttpExceptionFilter,
    JWT_SECRET_KEY,
    EncryptionLibrary,
    CacheableModule,
} from './shared';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig, ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { CacheInterceptor, CacheModule, CacheStoreFactory } from '@nestjs/cache-manager';

// npm uninstall cache-manager-ioredis --save
// npm uninstall -D @types/cache-manager-ioredis
import * as redisStore from 'cache-manager-ioredis';

@Module({
    imports: [
        CacheModule.register({
            store: redisStore,
            host: 'localhost',
            port: 6379,
            isGlobal: true,
            // ttl: 5
        }),
        CacheableModule.register(),
        JwtModule.register({
            secret: JWT_SECRET_KEY,
            signOptions: { expiresIn: '365d' },
        }),
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            // path: '/tete',
            driver: ApolloFederationDriver,
            playground: true,
            formatError,
            context: ({ req }) => ({ req }),
            // context: ({ req }) => ({ headers: req.headers }),
            introspection: true,
            typePaths: ['./**/*.graphql'],
            // autoSchemaFile: true,
            csrfPrevention: false,
        }),

        DatabaseModule,
        UsersTempsModule,
        MemberModule,
        SalesModule,
        AccountModule,

        JwtokenModule,

        CategoryModule,
        SubMenuModule,
        PromotionModule,
        StoreModule,
        LanguageModule,

        DailyReportModule
    ],
    providers: [
        EncryptionLibrary,
        { provide: APP_FILTER, useClass: GraphQlExceptionFilter },
        { provide: APP_FILTER, useClass: HttpExceptionFilter },

        // { provide: APP_GUARD, useClass: AuthGuard },
        { provide: APP_GUARD, useClass: RolesGuard, },

        { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
        // { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },

        // { provide: APP_PIPE, useClass: ValidationPipe },

        // {
        //     provide: APP_INTERCEPTOR,
        //     useClass: CacheInterceptor,
        // },
    ]
})
export class AppModule { }

