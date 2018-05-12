import React from 'react';
import Slider from 'react-slick';

import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';
import logo3 from '../../assets/logo3.svg';
import logo4 from '../../assets/logo4.svg';
import logo5 from '../../assets/logo5.svg';
import logo6 from '../../assets/logo6.svg';
import logo7 from '../../assets/logo7.svg';
import logo8 from '../../assets/logo8.svg';
import classes from './ClientsSlider.css';

const clientsSlider = (props) => {
  let slidesToShow = 3;

  if (props.width > 800) {
    slidesToShow = 4;
  }
  if (props.width > 1200) {
    slidesToShow = 5;
  }

  const settings = {
    arrows: false,
    slidesToShow,
  };

  return (
    <div className={classes.ClientsSlider}>
      <Slider {...settings}>
        <div>
          <img src={logo1} alt="logo" />
        </div>
        <div>
          <img src={logo2} alt="logo" />
        </div>
        <div>
          <img src={logo3} alt="logo" />
        </div>
        <div>
          <img src={logo4} alt="logo" />
        </div>
        <div>
          <img src={logo5} alt="logo" />
        </div>
        <div>
          <img src={logo6} alt="logo" />
        </div>
        <div>
          <img src={logo7} alt="logo" />
        </div>
        <div>
          <img src={logo8} alt="logo" />
        </div>
      </Slider>
    </div>
  );
};

export default clientsSlider;
