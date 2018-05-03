import React from 'react';

import classes from './Close.css';

const close = props => (
  <div className={classes.Close} onClick={props.clicked}>
    &times;
  </div>
);
export default close;
