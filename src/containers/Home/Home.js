import React, { Component, Fragment } from 'react';

import Waypoint from 'react-waypoint';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Brag from '../../components/Brag/Brag';
import Projects from '../../components/Projects/Projects';
import Testimonials from '../../components/Testimonials/Testimonials';
import ClientsSlider from '../../components/ClientsSlider/ClientsSlider';
import BlogSlider from './../../components/BlogSlider/BlogSlider';
import Contact from '../../components/Contact/Contact';

class Home extends Component {
  state = {
    width: 0
  };

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

  render() {
    return (
      <Fragment>
        <Toolbar />
        <Hero />
        <Waypoint
          topOffset="60%"
          bottomOffset="85%"
          onEnter={() => this.setState({ aboutInView: true })}
          onLeave={() => this.setState({ aboutInView: false })}
        />
        <About />
        <Brag />
        <Projects />
        <Testimonials />
        <ClientsSlider width={this.state.width} />
        <BlogSlider width={this.state.width} />
        {/* <Waypoint
          onEnter={() => console.log('entered waypoint')}
          onLeave={() => console.log('leave waypoint')}
        /> */}
        <Contact />
      </Fragment>
    );
  }
}

export default Home;
