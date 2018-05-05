import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faCodepen from '@fortawesome/fontawesome-free-brands/faCodepen';
import classes from './Footer.css';

const footer = () => (
  <div className={classes.Container}>
    <ul className={classes.Social}>
      <li>
        <FontAwesomeIcon icon={faTwitter} />
      </li>
      <li>
        <FontAwesomeIcon icon={faFacebook} />
      </li>
      <li>
        <FontAwesomeIcon icon={faCodepen} />
      </li>
    </ul>
  </div>
);

export default footer;
