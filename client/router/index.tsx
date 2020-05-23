///<reference path="../../typings/global.d.ts"/>
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routerWarp } from './routerWarp';
import { Home } from '../pages/blog/home';
import { BlogLayout } from '../layouts/blog';

export const router = routerWarp(
  <BlogLayout>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BlogLayout>
);
