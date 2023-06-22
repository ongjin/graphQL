import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GraphqlCacheInterceptor, NODE_PORT } from './shared';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: true
    });
    // app.useGlobalInterceptors(new GraphqlCacheInterceptor())
    await app.listen(NODE_PORT);
}
bootstrap();