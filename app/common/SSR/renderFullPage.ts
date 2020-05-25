import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Request, Response, NextFunction } from 'express';
import _ from 'lodash';
import fs from 'fs-extra';
import axios from 'axios';
import { isProduction, isServer } from '../../util/util';
import { SERVER_PORT } from '../constant/path';
import { matchPath } from 'react-router-dom';
React.useLayoutEffect = React.useEffect;

async function getHtmlTemplete() {
  let htmlTemplete = '';
  return (async () => {
    if (isProduction()) {
      if (htmlTemplete) return htmlTemplete;
      htmlTemplete = await fs.readFile('build/index.html', {
        encoding: 'utf8',
      });
      return htmlTemplete;
    } else {
      // 开发环境不需要缓存
      const { data } = await axios.get('/index.html', {
        baseURL: 'http://localhost:8080',
      });
      return data;
    }
  })();
}

export const renderFullPage = async (req: Request, res: Response, next: NextFunction) => {
  const { routesMap } = await import('@/client/router');

  // 判断有没有匹配的路由
  if (!_.flatMap(Object.values(routesMap)).some(route => matchPath(req.path, route))) {
    return null;
  }

  const url = req.url;
  const { router } = await import('@/client/router');
  const { PromiseList } = await import('@/client/hooks/useSSRProps');
  const { axiosInstance } = await import('@/client/services/axios.config');

  axiosInstance.defaults.baseURL = `http://localhost:${SERVER_PORT}`;
  const initStore = {
    config: {
      acceptHost: 'www.maocanhua.cn'
    }
  };

  // 收集依赖数据
  const initComponent = router(url, {
    initStore,
  });
  PromiseList.clear();
  ReactDOMServer.renderToStaticMarkup(initComponent);

  const store = await PromiseList.getData();
  const component = router(url, {
    initStore: store
  });
  const renderContent = ReactDOMServer.renderToString(component);
  const htmlTemplete = await getHtmlTemplete();

  // 初始化props文件
  const initStoreJS = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(store)}</script>`;
  const renderHtml = htmlTemplete.replace(
    /(\<div\s+id\="root"\>)(.|\n|\r)*(\<\/div\>)/i,
    '$1' + renderContent + '$3' + initStoreJS,
  );
  return renderHtml;
};
