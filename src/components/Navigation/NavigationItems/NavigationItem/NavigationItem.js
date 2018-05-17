import React from 'react';

import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import classes from './NavigationItem.css';

const navigationItem = (props) => {
  const attachedClasses = props.inDropdown
    ? [classes.NavigationItemInDropdown]
    : [classes.NavigationItem];

  if (props.showDark) {
    attachedClasses.push(classes.DarkTextColor);
  }

  let item = <li className={attachedClasses.join(' ')}>{props.children}</li>;

  if (props.link) {
    item = (
      <li className={attachedClasses.join(' ')}>
        <NavLink
          to={props.link}
          activeClassName={classes.Active}
          onClick={props.toggleBackdrop}
        >
          {props.children}
        </NavLink>
      </li>
    );
  }

  if (props.scrollTo) {
    item = (
      <li className={attachedClasses.join(' ')}>
        <NavHashLink
          to={props.scrollTo}
          activeClassName={classes.Active}
          smooth
          onClick={props.toggleBackdrop}
        >
          {props.children}
        </NavHashLink>
      </li>
    );
  }

  return item;
};

export default navigationItem;
