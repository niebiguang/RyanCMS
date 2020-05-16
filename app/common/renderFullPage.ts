import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import { SSR } from '../../client/router/SSR';
import axios from 'axios';


let CACHE_ROUTE_MAP = {};

export const renderFullPage = async (url: string, domain: string) => {
  const { data: htmlTemplete } = await axios.get('/', {
    baseURL: 'http://localhost:3000',
  });
  let component = SSR(url);
  if (component) {
    return null;
  }
  let html = ReactDOMServer.renderToString(component);

  const renderHtml = htmlTemplete.replace(
    /(\<div\s+id\="root"\>)(.|\n|\r)*(\<\/div\>)/i,
    '$1' + html + '$3',
  );
  return renderHtml;
};