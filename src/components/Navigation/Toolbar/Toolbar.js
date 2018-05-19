import React, { Component } from 'react';
import classes from './Toolbar.css';

import Logo from '../../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import NavigationItems from '../NavigationItems/NavigationItems';
import Dropdown from '../Dropdown/Dropdown';

class Toolbar extends Component {
  state = {
    scrolledDown: false,
    menuOpen: false,
  };

  componentDidMount() {
    return this.props.static
      ? null
      : window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    return this.props.static
      ? null
      : window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (!this.props.static) {
      const scrolledDown = +window.scrollY > 100;

      return this.setState({ scrolledDown });
    }
    return null;
  };

  menuClickHandler = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  render() {
    const attachedClasses = [classes.Toolbar];

    if (this.state.scrolledDown) {
      attachedClasses.push(classes.ToolbarWhite);
    }

    if (this.props.static) {
      attachedClasses.push(classes.StaticToolbar);
    }

    return (
      <header className={attachedClasses.join(' ')}>
        <div className={classes.Wrapper}>
          <Logo
            showDark={this.state.scrolledDown}
            menuOpen={this.state.menuOpen}
            static={this.props.static}
          />
          <Hamburger
            menuOpen={this.state.menuOpen}
            onClickHamburger={this.menuClickHandler}
          />
          <Dropdown
            inDropdown={this.state.menuOpen}
            onClickHamburger={this.menuClickHandler}
          />
          {this.state.menuOpen ? null : (
            <nav className={classes.DesktopOnly}>
              <NavigationItems
                showDark={this.state.scrolledDown}
                static={this.props.static}
              />
            </nav>
          )}
        </div>
      </header>
    );
  }
}

export default Toolbar;
