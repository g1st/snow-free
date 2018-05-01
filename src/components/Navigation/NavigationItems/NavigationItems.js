import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem>About</NavigationItem>
    <NavigationItem>Contact</NavigationItem>
    <NavigationItem>Portfolio</NavigationItem>
    <NavigationItem>Blog</NavigationItem>
    <NavigationItem>Google</NavigationItem>
  </ul>
);

export default NavigationItems;
