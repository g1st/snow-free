import React from 'react';

import classes from './NavigationItem.css';

const NavigationItem = props => (
  <li className={classes.NavigationItem}>{props.children}</li>
);

export default NavigationItem;
