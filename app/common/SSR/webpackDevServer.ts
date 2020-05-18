import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
const { copyPublicFolder } = require('scripts/copyPublicFolder');
const config = require('config/webpack.config')('development');

const compiler = webpack(config);

export function webpackDevServer() {
  copyPublicFolder();
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    logLevel: 'info',
    writeToDisk: true
  });
}