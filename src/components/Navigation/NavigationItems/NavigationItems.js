import React from 'react';
import { Link } from 'react-scroll';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const NavigationItems = (props) => {
  const attachedClasses = props.inDropdown
    ? classes.NavItemsInDropdown
    : classes.NavigationItems;
  return (
    <ul className={attachedClasses}>
      <Link to="scrollToAbout" smooth duration={500} offset={-100}>
        <NavigationItem inDropdown={props.inDropdown} showDark={props.showDark}>
          About
        </NavigationItem>
      </Link>
      <Link to="scrollToContact" smooth duration={500} offset={-100}>
        <NavigationItem inDropdown={props.inDropdown} showDark={props.showDark}>
          Contact
        </NavigationItem>
      </Link>
      <NavigationItem inDropdown={props.inDropdown} showDark={props.showDark}>
        Portfolio
      </NavigationItem>
      <NavigationItem inDropdown={props.inDropdown} showDark={props.showDark}>
        Blog
      </NavigationItem>
      <a href="https://www.google.com/">
        <NavigationItem inDropdown={props.inDropdown} showDark={props.showDark}>
          Google
        </NavigationItem>
      </a>
    </ul>
  );
};

export default NavigationItems;
