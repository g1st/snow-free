import React from 'react';

import classes from './BlogPost.css';

const blogPost = props => (
  <div className={classes.Wrapper}>
    <div className={classes.Card}>
      <div className={classes.CardContent}>
        <div className={classes.CardInner}>
          <div className={classes.CardImage}>
            <img src={props.img} alt="Blog post" />
            <div className={classes.CardTag}>{props.author}</div>
          </div>
          <h1 className={classes.Heading}>Lorem Ipsum</h1>
          <span className={classes.Date}>August 14, 2018</span>
          <div className={classes.Paragraph}>{props.children}</div>
        </div>
      </div>
    </div>
  </div>
);

export default blogPost;
