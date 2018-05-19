import React, { Fragment } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import BlogPost from './BlogPost/BlogPost';

import img1 from '../../assets/project_1.jpg';
import img2 from '../../assets/project_2.jpg';
import img3 from '../../assets/project_3.jpg';
import img4 from '../../assets/project_4.jpg';
import img5 from '../../assets/project_5.jpg';

import classes from './Blog.css';

const blog = () => (
  <Fragment>
    <Toolbar static />
    <div className={classes.Blog}>
      <BlogPost img={img1} author="John">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
      </BlogPost>
      <BlogPost img={img2} author="John">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
      </BlogPost>
      <BlogPost img={img3} author="John">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
      </BlogPost>
      <BlogPost img={img4} author="John">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
      </BlogPost>
      <BlogPost img={img5} author="John">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi
          facilis ducimus minima voluptas accusantium! Obcaecati sit ipsam quas,
          a, error, aliquam necessitatibus aut ad dolorum voluptatibus vitae
          consequatur quod.
        </p>
      </BlogPost>
    </div>
  </Fragment>
);

export default blog;
