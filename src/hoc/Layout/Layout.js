import React, { Component, Fragment } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

import classes from './Layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { showDropdownMenu: false };
  }

  menuClickHandler = () => {
    this.setState(prevState => ({
      showDropdownMenu: !prevState.showDropdownMenu
    }));
  };

  render() {
    return (
      <Fragment>
        <Toolbar
          menuOpen={this.state.showDropdownMenu}
          onClickHamburger={this.menuClickHandler}
        />
        <main className={classes.Container}>{this.props.children}</main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
