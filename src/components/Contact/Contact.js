import React from 'react';
import Form from './Form/Form';

import classes from './Contact.css';

const contact = () => (
  <div className={classes.Contact} id="contact">
    <div className={classes.Wrapper}>
      <div className={classes.Info}>
        <h1 className={classes.Heading}>Contact Info:</h1>
        <p className={classes.Paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          doloribus nam. Architecto sequi repellendus magni, id incidunt
          assumenda, eaque libero tempore facere, sunt molestiae magnam dolore
          expedita alias veniam porro.
        </p>
        <p className={classes.ParagraphInfo}>
          <strong>Address:</strong> 12345 Times Square, NY
        </p>
        <p className={classes.ParagraphInfo}>
          <strong>Phone:</strong> +11 123 456 789
        </p>
        <p className={classes.ParagraphInfo}>
          <strong>Email:</strong> coolmail@post.com
        </p>
        <p className={classes.ParagraphInfo}>
          <strong>Fax:</strong> +11 123 456 711
        </p>
      </div>
      <div className={classes.Form}>
        <Form />
      </div>
    </div>
  </div>
);

export default contact;
