import React from 'react';

import BlogSlides from './BlogSlides/BlogSlides';
import classes from './BlogSlider.css';

const blogSlider = props => (
  <div className={classes.BlogSlider}>
    <div className={classes.Container}>
      <h1 className={classes.Heading}>Latest Blogs</h1>
      <p className={classes.Paragraph}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id harum
        commodi corrupti assumenda consequuntur quo ullam quidem, tempora,
        explicabo quod repudiandae quasi fuga? Deserunt, necessitatibus nesciunt
        possimus dicta tenetur ducimus.
      </p>
    </div>
    <BlogSlides width={props.width} />
  </div>
);

export default blogSlider;
