import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../pages/Login/Login';

export const HotApp = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Login} />
    </Switch>
  </BrowserRouter>
);
