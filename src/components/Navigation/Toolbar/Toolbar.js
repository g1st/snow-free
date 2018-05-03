import React from 'react';
import classes from './Toolbar.css';

import Logo from '../../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import NavigationItems from '../NavigationItems/NavigationItems';
import Dropdown from '../Dropdown/Dropdown';

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <Logo />
    <Hamburger
      menuOpen={props.menuOpen}
      onClickHamburger={props.onClickHamburger}
    />
    <Dropdown open={props.menuOpen} />
    {props.menuOpen ? null : (
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    )}
  </header>
);

export default Toolbar;
