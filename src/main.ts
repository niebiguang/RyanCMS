import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { ExceptionFilter } from './common/filters/exception.filter';
import path from 'path';
import bodyParser from 'body-parser';
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.useGlobalFilters(new ExceptionFilter());
  app.useStaticAssets({
    root: path.join(__dirname, '..', 'public')
  });
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  await app.listen(8080, () => {
    console.log('服务器已开启: http:localhost:8080');
  });
}

bootstrap();
