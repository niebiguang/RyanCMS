import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { renderFullPage } from '../SSR/renderFullPage';

@Injectable()
export class RenderMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    const renderPage = await renderFullPage(req.url as string, 'www.maocanhua.cn');
    if (renderPage) {
      res.contentType('text/html; charset=utf-8');
      return res.end(renderPage);
    }

    next();
  }
}
