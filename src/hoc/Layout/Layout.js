import React, { Component, Fragment } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import classes from './Layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div className={classes.Container}>
          <Toolbar />
          <main>{this.props.children}</main>
        </div>
      </Fragment>
    );
  }
}

export default Layout;
