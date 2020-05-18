import lessParser from 'postcss-less';
require('css-modules-require-hook')({
  generateScopedName: '[path][name]__[local]',
  extensions: ['.css', '.less', '.scss'],
  processorOpts: { parser: lessParser.parse },
});
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { NestFactory } from '@nestjs/core';
import ServerStatuc from 'serve-static';
import { AppModule } from './app.module';
import { ExceptionFilter } from './common/filters/exception.filter';
import path from 'path';
import bodyParser from 'body-parser';
import { watchClientReload } from './common/SSR/watchClientReload';
import { isProduction } from './util/util';
import { staticDir } from './common/constant/path';
import { awaitStaticReady } from './common/SSR/awaitStaticReady';

async function bootstrap() {

  if (isProduction()) {
    awaitStaticReady()
  } else {
    watchClientReload()
  }

  const app = await NestFactory.create(
    AppModule,
  );
  app.useGlobalFilters(new ExceptionFilter());

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(ServerStatuc(staticDir, {

  }));
  await app.listen(8080, () => {

    console.log('服务器已开启: http:localhost:8080');
  });
}

bootstrap();