import React from 'react';

import LightSnowflake from '../../assets/snowflake-white.svg';
import DarkSnowflake from '../../assets/snowflake-dark.svg';
import classes from './Logo.css';

const Logo = (props) => {
  const logo = !props.menuOpen && props.showDark ? DarkSnowflake : LightSnowflake;
  return (
    <div className={classes.Logo}>
      <img src={props.static ? DarkSnowflake : logo} alt="Snowflake" />
    </div>
  );
};

export default Logo;
