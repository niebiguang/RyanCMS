import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '../modal';

export function routerWarp(children: React.ReactNode) {
  return (url?: string, store?: any) => {
    if (url) {
      return (
        <StaticRouter context={{}} location={url}>
          <StoreProvider initStore={store}>{children}</StoreProvider>
        </StaticRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <StoreProvider initStore={{}}>{children}</StoreProvider>
        </BrowserRouter>
      );
    }
  };
}
