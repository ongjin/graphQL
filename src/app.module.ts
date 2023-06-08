import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import {
    GraphQL_Module,
    JWT_Module,
    MemberModule,
    SalesModule,
    Users_TempsModule,
    Users_Temps_Copy_Module
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
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [
        JwtModule.register({
            secret: JWT_SECRET_KEY,
            signOptions: { expiresIn: '1h' }
        }),
        // JWT_Module,
        GraphQL_Module,
        // GraphQLModule.forRoot<ApolloDriverConfig>({
        //     driver: ApolloDriver,
        //     // gql ui 배포환경에서는 false
        //     playground: true,
        //     typePaths: ['./**/*.graphql'],
        //     formatError,
        //     context: ({ req }) => ({ headers: req.headers }),
        // }),
        DatabaseModule,
        Users_TempsModule,
        MemberModule,
        SalesModule,
        Users_Temps_Copy_Module,
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