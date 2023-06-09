import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

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
} from './shared';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


@Module({
    imports: [
        JwtModule.register({
            secret: JWT_SECRET_KEY,
            signOptions: { expiresIn: '1h' }
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
    providers: [
        {
            provide: APP_FILTER,
            useClass: GraphQlExceptionFilter
        },
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter
        },
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
        // {
        //     provide: APP_GUARD,
        //     useClass: RolesGuard,
        // },
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor,
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformInterceptor
        },
        // {
        //     provide: APP_PIPE,
        //     useClass: ValidationPipe
        // },
    ]
})
export class AppModule { }