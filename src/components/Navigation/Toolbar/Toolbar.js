import React, { Component } from 'react';
import classes from './Toolbar.css';

import Logo from '../../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import NavigationItems from '../NavigationItems/NavigationItems';
import Dropdown from '../Dropdown/Dropdown';

class Toolbar extends Component {
  state = {
    scrolledDown: false
  };

  componentDidMount() {
    console.log(this.props);
    return window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    return window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolledDown = +window.scrollY > 100;

    return this.setState({ scrolledDown });
  };

  render() {
    const attachedClasses = [classes.Toolbar];

    if (this.state.scrolledDown) {
      attachedClasses.push(classes.ToolbarWhite);
    }

    return (
      <header className={attachedClasses.join(' ')}>
        <div className={classes.Wrapper}>
          <Logo
            showDark={this.state.scrolledDown}
            menuOpen={this.props.menuOpen}
          />
          <Hamburger
            menuOpen={this.props.menuOpen}
            onClickHamburger={this.props.onClickHamburger}
          />
          <Dropdown inDropdown={this.props.menuOpen} />
          {this.props.menuOpen ? null : (
            <nav className={classes.DesktopOnly}>
              <NavigationItems showDark={this.state.scrolledDown} />
            </nav>
          )}
        </div>
      </header>
    );
  }
}

export default Toolbar;
