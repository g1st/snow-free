import React, { Fragment } from 'react';

import Footer from '../../components/Footer/Footer';
import classes from './Layout.css';

const layout = props => (
  <Fragment>
    <main className={classes.Container}>{props.children}</main>
    <Footer />
  </Fragment>
);

export default layout;
