import React from 'react';

import classes from './ProjectsGrid.css';

const projectsGrid = () => (
  <div className={classes.ProjectsGrid}>
    <div className={classes.Container}>
      <div className={classes.Item}>
        <div className={classes.Project}>
          <div>Axujiens projects</div>
        </div>
      </div>
      <div className={classes.Item}>Item</div>
      <div className={classes.Item}>Item</div>
      <div className={classes.Item}>Item</div>
      <div className={classes.Item}>Item</div>
      <div className={classes.Item}>Item</div>
      <div className={classes.Item}>Item</div>
      <div className={classes.Item}>Item</div>
      <div className={classes.Item}>Item</div>
    </div>
  </div>
);

export default projectsGrid;
