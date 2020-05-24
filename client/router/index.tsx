///<reference path="../../typings/global.d.ts"/>
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routerWarp } from './routerWarp';
import { Home } from '../pages/blog/home';
import { BlogLayout } from '../layouts/blog';

export const routesMap = {
  blog: [
    {
      path: "/",
      component: Home,
      exact: true
    }
  ]
};

export const router = routerWarp(
  <Switch>
    {/* <Route exact path="/login" component={Login} /> */}
    <BlogLayout>
      <Switch>
        {
          routesMap.blog.map(route => (
            <Route key={route.path} {...route} />
          ))
        }
      </Switch>
    </BlogLayout>
  </Switch>

);
