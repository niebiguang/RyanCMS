import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { renderFullPage } from '../renderFullPage';

@Injectable()
export class RenderMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    const renderPage = await renderFullPage(req.url as string, '');
    if (renderPage) {
      res.contentType('text/html; charset=utf-8');
      // console.log('res.header', typeof res.header());
      // res.contentType('html');
      return res.end(renderPage);
    }

    next();
  }
}
