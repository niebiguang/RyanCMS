import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';

export function routerWarp(children: React.ReactNode) {
  return (url?: string) => {
    if (url) {
      return (
        <StaticRouter context={{}} location={url}>
          {children}
        </StaticRouter>
      )
    } else {
      return (
        <BrowserRouter>
          {children}
        </BrowserRouter>
      )
    }
  }
}