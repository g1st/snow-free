import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './containers';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/blog" component={Blog} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
