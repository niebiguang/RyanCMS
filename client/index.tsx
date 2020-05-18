import { render } from 'react-dom';
import { router } from './router';

async function bootstrap() {
  render(router(), document.getElementById('root'));
}

bootstrap();
