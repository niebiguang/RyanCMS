import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '../modal';

export function routerWarp(children: React.ReactNode) {
  return (url?: string) => {
    console.log('routerWarp-----', url);
    if (url) {
      console.log('static-----');
      return (
        <StaticRouter context={{}} location={url}>
          <StoreProvider>{children}</StoreProvider>
        </StaticRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <StoreProvider>{children}</StoreProvider>
        </BrowserRouter>
      );
    }
  };
}
