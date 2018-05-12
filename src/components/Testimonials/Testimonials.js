import React from 'react';
import Slider from 'react-slick';

import classes from './Testimonials.css';

const settings = {
  dots: true,
  arrows: false,
  ceterMode: true,
};

const testimonials = () => (
  <div className={classes.Testimonials}>
    <Slider {...settings}>
      <div className={classes.CarouselItem}>
        <blockquote className={classes.Quote}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad numquam
          aspernatur doloremque molestiae. Eaque facilis cumque saepe sed ipsum
          voluptatem.
        </blockquote>
        <cite className={classes.Author}>Lorem Ipsum 1</cite>
      </div>
      <div className={classes.CarouselItem}>
        <blockquote className={classes.Quote}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad numquam
          aspernatur doloremque molestiae. Eaque facilis cumque saepe sed ipsum
          voluptatem.
        </blockquote>
        <cite className={classes.Author}>Lorem Ipsum 2</cite>
      </div>
      <div className={classes.CarouselItem}>
        <blockquote className={classes.Quote}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad numquam
          aspernatur doloremque molestiae. Eaque facilis cumque saepe sed ipsum
          voluptatem.
        </blockquote>
        <cite className={classes.Author}>Lorem Ipsum 3</cite>
      </div>
      <div className={classes.CarouselItem}>
        <blockquote className={classes.Quote}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad numquam
          aspernatur doloremque molestiae. Eaque facilis cumque saepe sed ipsum
          voluptatem.
        </blockquote>
        <cite className={classes.Author}>Lorem Ipsum 4</cite>
      </div>
      <div className={classes.CarouselItem}>
        <blockquote className={classes.Quote}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad numquam
          aspernatur doloremque molestiae. Eaque facilis cumque saepe sed ipsum
          voluptatem.
        </blockquote>
        <cite className={classes.Author}>Lorem Ipsum 5</cite>
      </div>
    </Slider>
  </div>
);

export default testimonials;
