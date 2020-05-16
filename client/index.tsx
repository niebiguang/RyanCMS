import { render } from 'react-dom';
import { HotApp } from './router/Client';

async function bootstrap() {
  render(HotApp(), document.getElementById('root'));
}

bootstrap();
