import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const staticProxy = createProxyMiddleware('/static', {
  target: 'http://localhost:3000',
  changeOrigin: true,
});

@Injectable()
export class StaticProxyMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    staticProxy(req, res, next);
  }
}
