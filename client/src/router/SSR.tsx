import React from 'react';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import Login from '../controller/common/page/Login/Login';

export const SSR = (url: string, store: any) => (
  <StaticRouter>
    <Switch>
      <Route component={Login} />
    </Switch>
  </StaticRouter>
);
