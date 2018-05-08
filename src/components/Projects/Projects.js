import React from 'react';
import ProjectsGrid from './ProjectsGrid/ProjectsGrid';

import classes from './Projects.css';

const projects = () => (
  <div className={classes.Projects}>
    <div className={classes.Wrapper}>
      <div className={classes.Heading}>Best Projects</div>
      <p className={classes.Paragraph}>
        Donec orci sem, pretium ac dolor et, faucibus faucibus mauris.
        Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non
        ultrices.
      </p>
    </div>
    <ProjectsGrid />
  </div>
);

export default projects;
