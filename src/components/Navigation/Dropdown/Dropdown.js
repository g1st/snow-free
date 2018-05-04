import React, { Fragment } from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import classes from './Dropdown.css';

const dropdown = (props) => {
  let attachedClassess = [classes.Dropdown, classes.Close];

  if (props.inDropdown) {
    attachedClassess = [classes.Dropdown, classes.Open];
  }

  return (
    <Fragment>
      <Backdrop show={props.inDropdown} />
      <nav className={attachedClassess.join(' ')}>
        <NavigationItems inDropdown />
      </nav>
    </Fragment>
  );
};

export default dropdown;
