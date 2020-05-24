import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getStore, AppState } from '../reducers';

interface IOptions {
  initStore: Partial<AppState>;
}

export function routerWarp(children: React.ReactNode) {
  return (url?: string, options?: IOptions) => {
    const store = getStore(options ? options.initStore : {});
    if (url) {
      return (
        <Provider store={store}>
          <StaticRouter context={{}} location={url}>
            {children}
          </StaticRouter>
        </Provider>
      );
    } else {
      const preloadedState = global.window.__INITIAL_STATE__ || {}; //
      return (
        <BrowserRouter>
          <Provider store={getStore(preloadedState)}>{children}</Provider>
        </BrowserRouter>
      );
    }
  };
}
