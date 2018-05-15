import React from 'react';
import { Link } from 'react-scroll';

import { NavLink } from 'react-router-dom';

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
        <NavLink to={props.link}>{props.children}</NavLink>
      </li>
    );
  }

  if (props.scrollTo) {
    item = (
      <li className={attachedClasses.join(' ')}>
        <NavLink to={props.link}>
          <Link to="scrollToAbout" smooth duration={500} offset={-100}>
            {props.children}
          </Link>
        </NavLink>
      </li>
    );
  }

  return item;
};

export default navigationItem;
