import React from 'react';

import classes from './Hamburger.css';

const Hamburger = (props) => {
  let icon = (
    <div className={classes.Hamburger} onClick={props.onClickHamburger}>
      <div />
      <div />
      <div />
    </div>
  );

  if (props.menuOpen) {
    icon = (
      <div className={classes.Close} onClick={props.onClickHamburger}>
        &times;
      </div>
    );
  }

  return <div className={classes.HamburgerContainer}>{icon}</div>;
};

export default Hamburger;
