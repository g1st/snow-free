import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => {
  let attachedClasses = [classes.Backdrop, classes.Hidden];

  if (props.show) {
    attachedClasses = [classes.Backdrop, classes.Visible];
  }

  return <div className={attachedClasses.join(' ')}>{props.children}</div>;
};

export default backdrop;
