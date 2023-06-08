import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { formatError } from 'src/shared';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            // gql ui 배포환경에서는 false
            playground: true,
            typePaths: ['./**/*.graphql'],
            formatError,
            context: ({ req }) => ({ headers: req.headers }),
        }),
    ],
})
export class GraphQL_Module { }
