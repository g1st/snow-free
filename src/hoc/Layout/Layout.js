import React, { Component, Fragment } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Brag from '../../components/Brag/Brag';
import Projects from '../../components/Projects/Projects';
import Testimonials from '../../components/Testimonials/Testimonials';

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
        <div className={classes.Container} name="scrollToAbout">
          <Toolbar
            menuOpen={this.state.showDropdownMenu}
            onClickHamburger={this.menuClickHandler}
          />
          <Hero />
          <About />
          <Brag />
          <Projects />
          <Testimonials />
          <div>{this.props.children}</div>
        </div>
      </Fragment>
    );
  }
}

export default Layout;
