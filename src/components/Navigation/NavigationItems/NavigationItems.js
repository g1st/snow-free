import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const NavigationItems = (props) => {
  const attachedClasses = props.inDropdown
    ? classes.NavItemsInDropdown
    : classes.NavigationItems;
  return (
    <ul className={attachedClasses}>
      <NavigationItem
        inDropdown={props.inDropdown}
        showDark={props.showDark}
        link="/"
        scrollTo="/#about"
      >
        About
      </NavigationItem>
      <NavigationItem
        inDropdown={props.inDropdown}
        showDark={props.showDark}
        link="/"
        scrollTo="/#contact"
      >
        Contact
      </NavigationItem>
      <NavigationItem
        inDropdown={props.inDropdown}
        showDark={props.showDark}
        link="/portfolio"
      >
        Portfolio
      </NavigationItem>
      <NavigationItem
        inDropdown={props.inDropdown}
        showDark={props.showDark}
        link="/blog"
      >
        Blog
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
