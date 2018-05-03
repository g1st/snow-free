import React from 'react';
import Close from './Close/Close';

import classes from './Hamburger.css';

const hamburger = props => (
  <div className={classes.HamburgerContainer}>
    {props.menuOpen ? (
      <Close clicked={props.onClickHamburger} />
    ) : (
      <div className={classes.Hamburger} onClick={props.onClickHamburger}>
        <div />
        <div />
        <div />
      </div>
    )}
  </div>
);

export default hamburger;
