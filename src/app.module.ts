import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';

import {
    MemberModule,
    SalesModule,
    Users_TempsModule,
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
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { JwtokenController } from './modules/jwt/jwtoken.controller';
import { JwtokenService } from './modules/jwt/jwtoken.service';


@Module({
    imports: [
        HttpModule,
        JwtModule.register({
            secret: JWT_SECRET_KEY,
            signOptions: { expiresIn: '30d' },
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: true,
            typePaths: ['./**/*.graphql'],
            formatError,
            context: ({ req }) => ({ headers: req.headers }),
            introspection: true,
        }),
        DatabaseModule,
        Users_TempsModule,
        MemberModule,
        SalesModule,
    ],
    controllers: [
        JwtokenController
    ],
    providers: [
        JwtokenService,
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