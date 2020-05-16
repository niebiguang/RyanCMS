import React from 'react';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../pages/Login/Login';

export const SSR = (url: string) => (
  <StaticRouter>
    <Switch>
      <Route component={Login} />
    </Switch>
  </StaticRouter>
);
