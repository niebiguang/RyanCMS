import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import { isProduction } from '../../util/util';
import fs from 'fs-extra';

async function getHtmlTemplete() {
  let htmlTemplete = '';
  return (async () => {
    if (htmlTemplete) return htmlTemplete;
    if (isProduction()) {
      htmlTemplete = await fs.readFile('build/index.html', {
        encoding: 'utf8'
      })
    } else {
      const { data } = await axios.get('/', {
        baseURL: 'http://localhost:3000',
      });
      htmlTemplete = data;
    }
    return htmlTemplete;
  })()
}

export const renderFullPage = async (url: string, domain: string) => {

  const { SSR } = require('@client/router/SSR');
  let component = SSR(url);

  if (!component) {
    return null;
  }
  let html = ReactDOMServer.renderToString(component);
  if (!html) {
    return null;
  }
  const htmlTemplete = await getHtmlTemplete();
  const renderHtml = htmlTemplete.replace(
    /(\<div\s+id\="root"\>)(.|\n|\r)*(\<\/div\>)/i,
    '$1' + html + '$3',
  );
  return renderHtml;
};



