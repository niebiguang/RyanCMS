import lessParser from 'postcss-less';
require('css-modules-require-hook')({
  generateScopedName: '[path][name]__[local]',
  extensions: ['.css', '.less', '.scss'],
  processorOpts: { parser: lessParser.parse },
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionFilter } from './common/filters/exception.filter';
import path from 'path';
import bodyParser from 'body-parser';
import { renderFullPage } from './common/renderFullPage';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ExceptionFilter());
  // app.useStaticAssets({
  //   root: path.join(__dirname, '..', 'public'),
  // });
  // app.use(async (req, res, next) => {
  //   // const acceptHost = req.headers['accept-host'];
  //   console.log(req.url);
  //   const renderPage = await renderFullPage(req.url as string, '');
  //   if (renderPage) {
  //     console.log('res.header', res.headers);
  //     console.log('res.header', typeof res.header);
  //     // res.contentType('html');
  //     return (res.end(renderPage));
  //   }
  //   next();
  // });
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  await app.listen(8080, () => {
    console.log('服务器已开启: http:localhost:8080');
  });
}

bootstrap();
