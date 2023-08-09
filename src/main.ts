import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NODE_PORT } from './shared';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';


async function bootstrap() {
    // const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    const app = await NestFactory.create(AppModule, {
        cors: true
    });
    app.enableCors({
        origin: true,
        credentials: true,
        
    })

    // app.setViewEngine('svelte');
    // app.useStaticAssets(join(__dirname, '..', '..', 'public'));
    // app.setBaseViewsDir(join(__dirname, '..', '..', 'views'));
    // app.engine('svelte', svelteTemplateEngine)
    // app.setViewEngine('svelte')

    await app.listen(NODE_PORT);
}
bootstrap();