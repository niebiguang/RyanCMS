import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { renderFullPage } from '../SSR/renderFullPage';

@Injectable()
export class RenderMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const renderPage = await renderFullPage(req, res, next);
    if (renderPage) {
      res.contentType('text/html; charset=utf-8');
      return res.end(renderPage);
    }

    next();
  }
}
