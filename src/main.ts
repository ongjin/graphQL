import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NODE_PORT } from './environments';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await app.listen(NODE_PORT);
}
bootstrap();