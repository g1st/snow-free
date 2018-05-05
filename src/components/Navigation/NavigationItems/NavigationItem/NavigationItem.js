import React from 'react';

import classes from './NavigationItem.css';

const NavigationItem = (props) => {
  const attachedClasses = props.inDropdown
    ? [classes.NavigationItemInDropdown]
    : [classes.NavigationItem];

  if (props.showDark) {
    attachedClasses.push(classes.DarkTextColor);
  }

  return <li className={attachedClasses.join(' ')}>{props.children}</li>;
};

export default NavigationItem;
