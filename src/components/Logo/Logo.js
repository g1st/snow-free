import React from 'react';

import LightSnowflake from '../../assets/snowflake-white.svg';
import classes from './Logo.css';

const Logo = () => (
  <div className={classes.Logo}>
    <img src={LightSnowflake} alt="Snowflake" />
  </div>
);

export default Logo;

// if scrolled a 50px down - render dark snowflake. Need to pass props here
