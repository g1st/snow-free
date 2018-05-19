import React, { Fragment } from 'react';

import classes from './Portfolio.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import ProjectsGrid from '../Projects/ProjectsGrid/ProjectsGrid';

const portfolio = () => (
  <Fragment>
    <Toolbar static />
    <div className={classes.Portfolio}>
      <ProjectsGrid />
    </div>
  </Fragment>
);

export default portfolio;
