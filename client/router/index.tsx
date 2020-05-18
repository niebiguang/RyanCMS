import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from '../pages/Login/Login';
import { Hello } from '../pages/Hello';
import { routerWarp } from './routerWarp';

export const router = routerWarp(
  <Switch>
    <Route exact path='/' component={Login} />
    <Route exact path="/hello" component={Hello} />
  </Switch>
)
