import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';

import { 
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
} from './shared';
import { HttpExceptionFilter } from './shared/exceptions/bad-request.filter';


@Module({
    imports: [
        JwtModule.register({
            secret: 'SECRET_KEY',
            signOptions: { expiresIn: '1h' }
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            // gql ui 배포환경에서는 false
            playground: true,
            typePaths: ['./**/*.graphql'],
            formatError,
            context: ({ req }) => ({ headers: req.headers }),
        }),
        Users_TempsModule,
        DatabaseModule,
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
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter
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
        {
            provide: APP_PIPE,
            useClass: ValidationPipe
        }
    ]
})
export class AppModule { }