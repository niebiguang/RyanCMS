import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Hello } from '../pages/Hello';
import { routerWarp } from './routerWarp';
import { Home } from '../pages/blog/home';

export const router = routerWarp(
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path="/hello" component={Hello} />
  </Switch>
)
