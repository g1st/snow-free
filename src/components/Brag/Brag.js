import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFolder from '@fortawesome/fontawesome-free-regular/faFolderOpen';
import faClock from '@fortawesome/fontawesome-free-regular/faClock';
import faStar from '@fortawesome/fontawesome-free-regular/faStar';
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart';

import classes from './Brag.css';

const brag = () => (
  <div className={classes.Brag}>
    <div className={classes.Wrapper}>
      <div className={classes.IconWrapper}>
        <div className={classes.Icon}>
          <FontAwesomeIcon icon={faFolder} />
        </div>
        <div className={classes.Info}>
          <span className={classes.Number}>548</span>
          <span className={classes.Title}>Project completed</span>
        </div>
      </div>
      <div className={classes.IconWrapper}>
        <div className={classes.Icon}>
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div className={classes.Info}>
          <span className={classes.Number}>1454</span>
          <span className={classes.Title}>Working hours</span>
        </div>
      </div>
      <div className={classes.IconWrapper}>
        <div className={classes.Icon}>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={classes.Info}>
          <span className={classes.Number}>764</span>
          <span className={classes.Title}>Positive feedbacks</span>
        </div>
      </div>
      <div className={classes.IconWrapper}>
        <div className={classes.Icon}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className={classes.Info}>
          <span className={classes.Number}>2323</span>
          <span className={classes.Title}>Happy clients</span>
        </div>
      </div>
    </div>
  </div>
);

export default brag;
