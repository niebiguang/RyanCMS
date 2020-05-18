import ReactDOMServer from 'react-dom/server';
import fs from 'fs-extra';

async function getHtmlTemplete() {
  let htmlTemplete = '';
  return (async () => {
    if (htmlTemplete) return htmlTemplete;
    return htmlTemplete = await fs.readFile('build/index.html', {
      encoding: 'utf8'
    })
  })()
}

export const renderFullPage = async (url: string, domain: string) => {
  const { router } = require('@client/router');
  let component = router(url);
  if (!component) return null;
  let html = ReactDOMServer.renderToString(component);
  if (!html) return null;
  const htmlTemplete = await getHtmlTemplete();
  const renderHtml = htmlTemplete.replace(
    /(\<div\s+id\="root"\>)(.|\n|\r)*(\<\/div\>)/i,
    '$1' + html + '$3',
  );
  return renderHtml;
};



