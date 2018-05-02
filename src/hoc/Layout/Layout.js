import React, { Component, Fragment } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Main from '../../components/Main/Main';

import classes from './Layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { showDropdownMenu: false };
  }

  menuClickHandler = () => {
    this.setState(prevState => ({
      showDropdownMenu: !prevState.showDropdownMenu,
    }));
  };

  render() {
    return (
      <Fragment>
        <div className={classes.Container}>
          <Toolbar
            menuOpen={this.state.showDropdownMenu}
            onClickHamburger={this.menuClickHandler}
          />
          <Main />
          <main>{this.props.children}</main>
        </div>
      </Fragment>
    );
  }
}

export default Layout;
