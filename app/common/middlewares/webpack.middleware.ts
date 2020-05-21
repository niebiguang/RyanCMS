import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
const config = require('config/webpack.config')('development');

const compiler = webpack(config);

@Injectable()
export class WebpackMiddleware implements NestMiddleware {
  private webpackDev = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    logLevel: "warn",
    index: false,
    writeToDisk: true,
    headers: {
      "Cache-Control": "no-cache"
    }
  });
  async use(req: Request, res: Response, next: NextFunction) {
    this.webpackDev(req, res, next);
  }
}
