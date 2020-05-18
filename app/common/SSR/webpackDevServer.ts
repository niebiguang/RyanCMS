import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const config = require('config/webpack.config');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
};
const compiler = webpack(config);

// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);
