import ReactDOMServer from 'react-dom/server';
import fs from 'fs-extra';
import axios from 'axios';
import { isProduction, isServer } from '../../util/util';
import { SERVER_PORT } from '../constant/path';

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

export const renderFullPage = async (url: string, acceptHost: string) => {
  const { router } = await import('@/client/router');
  const { PromiseList } = await import('@/client/hooks/useSSRProps');
  const { axiosInstance } = await import('@/client/services/axios.config');
  axiosInstance.defaults.baseURL = `http://localhost:${SERVER_PORT}`;
  const initStore = {
    config: {
      acceptHost
    }
  };
  let initComponent = router(url, initStore);
  if (!initComponent) return null;
  PromiseList.clear();
  ReactDOMServer.renderToStaticMarkup(initComponent);
  const store = await PromiseList.getData();
  const component = router(url, store);
  let html = ReactDOMServer.renderToString(component);
  if (!html) return null;
  const htmlTemplete = await getHtmlTemplete();

  // 初始化props文件
  const initStoreJS = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(store)}</script>`;
  const renderHtml = htmlTemplete.replace(
    /(\<div\s+id\="root"\>)(.|\n|\r)*(\<\/div\>)/i,
    '$1' + html + '$3' + initStoreJS,
  );
  return renderHtml;
};
