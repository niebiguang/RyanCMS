import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const config = require('config/webpack.config')('development');

const compiler = webpack(config);

export function webpackDevServer() {
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    logLevel: 'silent',
    writeToDisk: true
  });
}