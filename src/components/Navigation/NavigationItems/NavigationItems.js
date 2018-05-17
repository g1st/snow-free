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
        toggleBackdrop={props.toggleBackdrop}
      >
        About
      </NavigationItem>
      <NavigationItem
        inDropdown={props.inDropdown}
        showDark={props.showDark}
        link="/"
        scrollTo="/#contact"
        toggleBackdrop={props.toggleBackdrop}
      >
        Contact
      </NavigationItem>
      <NavigationItem
        inDropdown={props.inDropdown}
        showDark={props.showDark}
        link="/portfolio"
        toggleBackdrop={props.toggleBackdrop}
      >
        Portfolio
      </NavigationItem>
      <NavigationItem
        inDropdown={props.inDropdown}
        showDark={props.showDark}
        link="/blog"
        toggleBackdrop={props.toggleBackdrop}
      >
        Blog
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
