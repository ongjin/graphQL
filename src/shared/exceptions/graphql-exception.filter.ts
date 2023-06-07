import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { GqlArgumentsHost, GqlContextType } from '@nestjs/graphql';

/**
 * @author 조용진
 * @description GQL Error Filter
 */
@Catch(HttpException)
export class GraphQlExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const contextType = host.getType<GqlContextType>();

        if (contextType === 'graphql') {
            const gqlHost = GqlArgumentsHost.create(host);
            const response = gqlHost.getContext().res;
            if (!response) {
                return;
            }
            this.handleGraphQLError(exception, response);
        } else {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse();
            if (!response) {
                return;
            }
            this.handleHttpException(exception, response);
        }
    }

    private handleGraphQLError(exception: HttpException, response: any) {
        const status = exception.getStatus();
        const error = exception.getResponse() as Record<string, any>;
        const errorMessage = error.message || 'Internal Server Error';

        response.status(status).json({
            statusCode: status,
            error: errorMessage,
        });
    }

    private handleHttpException(exception: HttpException, response: any) {
        const status = exception.getStatus();
        const error = exception.getResponse() as Record<string, any>;
        const errorMessage = error.message || 'Internal Server Error';

        response.status(status).json({
            statusCode: status,
            error: errorMessage,
        });
    }
}
