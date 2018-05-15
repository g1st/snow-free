import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './containers';
import Portfolio from './components/Projects/ProjectsGrid/ProjectsGrid';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/portfolio" component={Portfolio} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
