import chokidar from 'chokidar';
import path from 'path';
import { clearModuleCache } from './clearModuleCache';
import chalk from 'chalk';
import dayjs from 'dayjs';

export function watchClientReload() {
  console.log(`${chalk.blue('[watchClientReload start]  - ')} ${dayjs().format('YYYY-MM-DD HH":mm:ss')}`);
  chokidar
    .watch([path.join(process.cwd(), 'client')])
    .on('change', (path) => {
      console.log(`${chalk.blue('[Client hot reload]  - ')} ${dayjs().format('YYYY-MM-DD HH":mm:ss')}`);
      clearModuleCache('client/router/SSR')

    });
}