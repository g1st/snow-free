import React from 'react';
import { Element } from 'react-scroll';

import classes from './About.css';

const about = () => (
  <section className={classes.About}>
    <Element name="scrollToAbout" />
    <div className={classes.Wrapper}>
      <div className={classes.Heading}>About Our Agency</div>
      <p className={classes.Paragraph}>
        We are a new design studio based in USA. We have over 20 years of
        combined experience, and know a thing or two about designing websites
        and mobile apps. Clever use of technology and lean processes enable us
        to work faster and smarter.
      </p>
    </div>
  </section>
);

export default about;
