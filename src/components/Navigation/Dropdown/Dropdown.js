import React, { Fragment } from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Backdrop from '../../UI/Backdrop/Backdrop';

import classes from './Dropdown.css';

const dropdown = (props) => {
  let attachedClassess = [classes.Dropdown, classes.Close];

  if (props.open) {
    attachedClassess = [classes.Dropdown, classes.Open];
  }

  return (
    <Fragment>
      <Backdrop show={props.open} />
      <nav className={attachedClassess.join(' ')}>
        <ul className={classes.List}>
          <li>About</li>
          <li>Contact</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Blog</li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default dropdown;
