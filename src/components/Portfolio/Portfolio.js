import React from 'react';

import classes from './Portfolio.css';

import ProjectsGrid from '../Projects/ProjectsGrid/ProjectsGrid';

const portfolio = () => (
  <div className={classes.Portfolio}>
    <ProjectsGrid />
  </div>
);

export default portfolio;
