import React, { Component, Fragment } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Brag from '../../components/Brag/Brag';
import Projects from '../../components/Projects/Projects';
import Testimonials from '../../components/Testimonials/Testimonials';
import ClientsSlider from '../../components/ClientsSlider/ClientsSlider';

import classes from './Layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { showDropdownMenu: false, width: 0 };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  menuClickHandler = () => {
    this.setState(prevState => ({
      showDropdownMenu: !prevState.showDropdownMenu
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
          <ClientsSlider width={this.state.width} />
          <div>{this.props.children}</div>
        </div>
      </Fragment>
    );
  }
}

export default Layout;
