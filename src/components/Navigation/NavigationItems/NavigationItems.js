import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const NavigationItems = (props) => {
  const attachedClasses = props.inDropdown
    ? classes.NavItemsInDropdown
    : classes.NavigationItems;
  return (
    <ul className={attachedClasses}>
      <NavigationItem inDropdown={props.inDropdown}>About</NavigationItem>
      <NavigationItem inDropdown={props.inDropdown}>Contact</NavigationItem>
      <NavigationItem inDropdown={props.inDropdown}>Portfolio</NavigationItem>
      <NavigationItem inDropdown={props.inDropdown}>Blog</NavigationItem>
      <NavigationItem inDropdown={props.inDropdown}>Google</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
