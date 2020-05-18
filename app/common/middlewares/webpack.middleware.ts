import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const config = require('config/webpack.config');
const compiler = webpack(config('development'));

@Injectable()
export class WerbpackMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    });
  }
}
