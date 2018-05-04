import React from 'react';

import classes from './NavigationItem.css';

const NavigationItem = (props) => {
  const attachedClasses = props.inDropdown
    ? classes.NavigationItemInDropdown
    : classes.NavigationItem;

  return <li className={attachedClasses}>{props.children}</li>;
};

export default NavigationItem;
