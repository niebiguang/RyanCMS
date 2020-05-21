import ReactDOMServer from 'react-dom/server';
import fs from 'fs-extra';
import axios from 'axios';
import { isProduction, delay } from '../../util/util';
import { PromiseList } from '@client/hooks/useSSRProps';
import { router } from '@client/router';

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

export const renderFullPage = async (url: string, domain: string) => {
  let initComponent = router(url);
  if (!initComponent) return null;

  PromiseList.clear();
  ReactDOMServer.renderToStaticMarkup(initComponent);
  const store = await PromiseList.getData();

  const component = router(url, store);
  let html = ReactDOMServer.renderToString(component);
  if (!html) return null;
  const htmlTemplete = await getHtmlTemplete();
  const renderHtml = htmlTemplete.replace(
    /(\<div\s+id\="root"\>)(.|\n|\r)*(\<\/div\>)/i,
    '$1' + html + '$3',
  );
  return renderHtml;
};
