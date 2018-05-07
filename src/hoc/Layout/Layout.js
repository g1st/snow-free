import React, { Component, Fragment } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';

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
      <Fragment name="scrollToAbout">
        <div className={classes.Container}>
          <Toolbar
            menuOpen={this.state.showDropdownMenu}
            onClickHamburger={this.menuClickHandler}
          />
          <Hero />

          <About />
          <div>{this.props.children}</div>
        </div>
      </Fragment>
    );
  }
}

export default Layout;
