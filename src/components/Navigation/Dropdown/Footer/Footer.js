import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faCodepen from '@fortawesome/fontawesome-free-brands/faCodepen';
import classes from './Footer.css';

const footer = () => (
  <div className={classes.Container}>
    <ul className={classes.Social}>
      <li className={classes.Link}>
        <a href="https://twitter.com/g1stas">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li className={classes.Link}>
        <a href="https://codepen.io/g1st">
          <FontAwesomeIcon icon={faCodepen} />
        </a>
      </li>
      <li className={classes.Link}>
        <a href="https://github.com/g1st/snow-free">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  </div>
);

export default footer;
