import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

export const renderFullPage = async (url: string, domain: string) => {
  const { data: htmlTemplete } = await axios.get('/', {
    baseURL: 'http://localhost:3000',
  });
  const { SSR } = require('../../client/router/SSR');
  let component = SSR(url);

  if (!component) {
    return null;
  }
  let html = ReactDOMServer.renderToString(component);
  if (!html) {
    return null;
  }
  const renderHtml = htmlTemplete.replace(
    /(\<div\s+id\="root"\>)(.|\n|\r)*(\<\/div\>)/i,
    '$1' + html + '$3',
  );
  return renderHtml;
};



