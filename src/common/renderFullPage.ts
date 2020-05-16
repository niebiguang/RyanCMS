import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import { SSR } from '../../client/src/router/SSR';
import { createStore } from 'ryan-redux';
import BlogRouter from '../../client/src/controller/blog/router/BlogRouter';
import { ServerData } from '../../client/src/interface/serverData.interface';
import * as model from '../../client/src/model';
import axios from 'axios';
import DomainRouter from '../../client/src/controller/blog/router/DomainRouter';
import { axiosInstance } from '../../client/src/services/axios.config';
axiosInstance.defaults.baseURL = 'http://localhost:8080';

const themeJson = require('../../client/build/theme.json');
model.themeModel.setThemeColorData(themeJson); // 初始化主题颜色
const htmlTemplete = fs.readFileSync(
  process.cwd() + '/client/build/index.html',
  'utf-8',
);
let CACHE_ROUTE_MAP = {};

export const renderFullPage = async (url: string, domain: string) => {
  let cacheUrl = url;
  try {
    // 对路由进行缓存
    if (CACHE_ROUTE_MAP[cacheUrl]) {
      return CACHE_ROUTE_MAP[cacheUrl];
    }

    let serverData: ServerData = { title: 'RyanCMS 内容管理系统', props: {} };

    if (/^\/u\/.+/.test(url)) {
    } else if (/^\/domain\b/.test(url)) {
    } else {
      return null;
    }

    const store = createStore(model, serverData.props);
    let component = SSR(url, store) as any;
    let html = ReactDOMServer.renderToString(component);
    console.log('初始化props文件');

    return html;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const flushCache = function(url?: string) {
  //清空全部
  if (!url) {
    CACHE_ROUTE_MAP = {};
  }

  // 清空单个路由
  if (url && CACHE_ROUTE_MAP[url]) {
    CACHE_ROUTE_MAP[url] = undefined;
  }
};
