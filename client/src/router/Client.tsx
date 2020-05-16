import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../controller/common/page/Login/Login';

export const HotApp = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Login} />
    </Switch>
  </BrowserRouter>
);
