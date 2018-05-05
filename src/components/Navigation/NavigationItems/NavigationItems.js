import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const NavigationItems = (props) => {
  const attachedClasses = props.inDropdown
    ? classes.NavItemsInDropdown
    : classes.NavigationItems;
  return (
    <ul className={attachedClasses}>
      <NavigationItem inDropdown={props.inDropdown} showDark={props.showDark}>
        About
      </NavigationItem>
      <NavigationItem inDropdown={props.inDropdown} showDark={props.showDark}>
        Contact
      </NavigationItem>
      <NavigationItem inDropdown={props.inDropdown} showDark={props.showDark}>
        Portfolio
      </NavigationItem>
      <NavigationItem inDropdown={props.inDropdown} showDark={props.showDark}>
        Blog
      </NavigationItem>
      <NavigationItem inDropdown={props.inDropdown} showDark={props.showDark}>
        Google
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
