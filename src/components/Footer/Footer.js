import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faCodepen from '@fortawesome/fontawesome-free-brands/faCodepen';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

import classes from './Footer.css';

const footer = () => (
  <div className={classes.Footer}>
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
    <span className={classes.Credits}>
      {`${new Date().getFullYear()} `}
      Template cloned solely for practice purpose by{' '}
      <a href="https://github.com/g1st/snow-free">g1st</a>. Original at{' '}
      <a href="http://unvab.com" target="_blank" rel="noopener noreferrer">
        unvab.com
      </a>.
    </span>
  </div>
);

export default footer;
