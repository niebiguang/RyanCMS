import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getStore, AppState } from '../reducers';

export function routerWarp(children: React.ReactNode) {
  return (url?: string, initStore?: Partial<AppState>) => {
    const store = getStore(initStore);
    if (url) {
      return (
        <StaticRouter context={{}} location={url}>
          <Provider store={store}>{children}</Provider>
        </StaticRouter>
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
