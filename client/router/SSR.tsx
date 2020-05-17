import React from 'react';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../pages/Login/Login';

export const SSR = (url: string) => (
  <StaticRouter context={{}} location={url}>
    <Switch>
      <Route path="/u/*" component={Login} />
    </Switch>
  </StaticRouter>
);
