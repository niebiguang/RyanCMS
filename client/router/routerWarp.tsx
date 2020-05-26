import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getStore, AppState } from '../modal';
import { Store } from 'redux';

interface IOptions {
  store: Store<AppState>;
}

export function routerWarp(children: React.ReactNode) {
  return (url?: string, options?: IOptions) => {
    if (url) {
      return (
        <Provider store={options!.store}>
          <StaticRouter context={{}} location={url}>
            {children}
          </StaticRouter>
        </Provider>
      );
    } else {
      const preloadedState = window.__INITIAL_STATE__ || {}; //
      return (
        <BrowserRouter>
          <Provider store={getStore(preloadedState)}>{children}</Provider>
        </BrowserRouter>
      );
    }
  };
}
