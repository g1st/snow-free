import React from 'react';

import classes from './ProjectsGrid.css';

const projectsGrid = (props) => {
  let grid = classes.ProjectsGrid;
  if (props.match && props.match.path === '/portfolio') {
    grid = [classes.ProjectsGrid, classes.ExtraMargin].join(' ');
  }

  return (
    <div className={grid}>
      <div className={classes.Container}>
        <div className={[classes.Item1, classes.Dark].join(' ')}>
          <div className={classes.Overlay}>
            <h1 className={classes.Heading}>Lorem Ipsum</h1>
            <h3 className={classes.Info}>Mockup</h3>
          </div>
        </div>
        <div className={[classes.Item2, classes.Dark].join(' ')}>
          <div className={classes.Overlay}>
            <h1 className={classes.Heading}>Lorem Ipsum</h1>
            <h3 className={classes.Info}>Mockup</h3>
          </div>
        </div>
        <div className={[classes.Item3, classes.Dark].join(' ')}>
          <div className={classes.Overlay}>
            <h1 className={classes.Heading}>Lorem Ipsum</h1>
            <h3 className={classes.Info}>Mockup</h3>
          </div>
        </div>
        <div className={[classes.Item4, classes.Dark].join(' ')}>
          <div className={classes.Overlay}>
            <h1 className={classes.Heading}>Lorem Ipsum</h1>
            <h3 className={classes.Info}>Mockup</h3>
          </div>
        </div>
        <div className={[classes.Item5, classes.Dark].join(' ')}>
          <div className={classes.Overlay}>
            <h1 className={classes.Heading}>Lorem Ipsum</h1>
            <h3 className={classes.Info}>Mockup</h3>
          </div>
        </div>
        <div className={[classes.Item6, classes.Dark].join(' ')}>
          <div className={classes.Overlay}>
            <h1 className={classes.Heading}>Lorem Ipsum</h1>
            <h3 className={classes.Info}>Mockup</h3>
          </div>
        </div>
        <div className={[classes.Item7, classes.Dark].join(' ')}>
          <div className={classes.Overlay}>
            <h1 className={classes.Heading}>Lorem Ipsum</h1>
            <h3 className={classes.Info}>Mockup</h3>
          </div>
        </div>
        <div className={[classes.Item8, classes.Dark].join(' ')}>
          <div className={classes.Overlay}>
            <h1 className={classes.Heading}>Lorem Ipsum</h1>
            <h3 className={classes.Info}>Mockup</h3>
          </div>
        </div>
        <div className={[classes.Item9, classes.Dark].join(' ')}>
          <div className={classes.Overlay}>
            <h1 className={classes.Heading}>Lorem Ipsum</h1>
            <h3 className={classes.Info}>Mockup</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectsGrid;
