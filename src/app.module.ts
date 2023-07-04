import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { Module } from '@nestjs/common';
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
    GoodsModule,
    StoreModule,
    LanguageModule,

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
} from './shared';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig, ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { CacheModule, CacheStoreFactory } from '@nestjs/cache-manager';

@Module({
    imports: [
        // CacheModule.register({
        //     max: 100,
        //     isGlobal: true,
        //     ttl: 1000 * 60,
        // }),
        JwtModule.register({
            secret: JWT_SECRET_KEY,
            signOptions: { expiresIn: '365d' },
        }),
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            // path: '/tete',
            driver: ApolloFederationDriver,
            playground: true,
            formatError,
            context: ({ req }) => ({ headers: req.headers }),
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
        GoodsModule,
        StoreModule,
        LanguageModule,
    ],
    providers: [
        EncryptionLibrary,
        { provide: APP_FILTER, useClass: GraphQlExceptionFilter },
        { provide: APP_FILTER, useClass: HttpExceptionFilter },

        // { provide: APP_GUARD, useClass: AuthGuard },
        { provide: APP_GUARD, useClass: RolesGuard, },

        { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
        { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },

        // { provide: APP_PIPE, useClass: ValidationPipe },
    ]
})
export class AppModule { }
