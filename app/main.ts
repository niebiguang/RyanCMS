///<reference path="../typings/global.d.ts"/>
import lessParser from 'postcss-less';
require('css-modules-require-hook')({
  generateScopedName: '[path][name]__[local]',
  extensions: ['.css', '.less', '.scss'],
  processorOpts: { parser: lessParser.parse },
});
import { NestFactory } from '@nestjs/core';
import ServerStatic from 'serve-static';
import { AppModule } from './app.module';
import { ExceptionFilter } from './common/filters/exception.filter';
import bodyParser from 'body-parser';
import { isDevelopment } from './util/util';
import { staticDir, SERVER_PORT } from './common/constant/path';
import { awaitStaticReady } from './common/SSR/awaitStaticReady';
import { watchClientReload } from '@/app/common/SSR/watchClientReload';

async function bootstrap() {
  if (isDevelopment()) {
    watchClientReload();
  } else {
    awaitStaticReady();
  }

  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ExceptionFilter());

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(
    ServerStatic(staticDir, {
      index: false,
    }),
  );
  await app.listen(8080, () => {
    console.log(`服务器已开启: http://localhost:${SERVER_PORT}`);
  });
}

bootstrap();
