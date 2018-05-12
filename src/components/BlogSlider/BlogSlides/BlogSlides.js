import React from 'react';
import Slider from 'react-slick';

import classes from './BlogSlides.css';

import img1 from '../../../assets/project_1.jpg';
import img2 from '../../../assets/project_2.jpg';
import img3 from '../../../assets/project_3.jpg';
import img4 from '../../../assets/project_4.jpg';
import img5 from '../../../assets/project_5.jpg';

const blogSlides = (props) => {
  let slidesToShow = 1;

  if (props.width > 800) {
    slidesToShow = 2;
  }
  if (props.width > 1200) {
    slidesToShow = 3;
  }

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow,
  };

  return (
    <div className={classes.BlogSlides}>
      <Slider {...settings}>
        <div>
          <div className={classes.Card}>
            <div className={classes.CardContent}>
              <div className={classes.CardInner}>
                <div className={classes.CardImage}>
                  <img src={img1} alt="Blog post image" />
                  <div className={classes.CardTag}>Lorem</div>
                </div>
                <h1 className={classes.Heading}>Lorem Ipsum</h1>
                <span className={classes.Date}>August 14, 2018</span>
                <p className={classes.Paragraph}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ullam at repellat ducimus cumque error eligendi, sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.Card}>
            <div className={classes.CardContent}>
              <div className={classes.CardInner}>
                <div className={classes.CardImage}>
                  <img src={img2} alt="Blog post image" />
                  <div className={classes.CardTag}>Lorem</div>
                </div>
                <h1 className={classes.Heading}>Lorem Ipsum</h1>
                <span className={classes.Date}>August 14, 2018</span>
                <p className={classes.Paragraph}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ullam at repellat ducimus cumque error eligendi, sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.Card}>
            <div className={classes.CardContent}>
              <div className={classes.CardInner}>
                <div className={classes.CardImage}>
                  <img src={img3} alt="Blog post image" />
                  <div className={classes.CardTag}>Lorem</div>
                </div>
                <h1 className={classes.Heading}>Lorem Ipsum</h1>
                <span className={classes.Date}>August 14, 2018</span>
                <p className={classes.Paragraph}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ullam at repellat ducimus cumque error eligendi, sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.Card}>
            <div className={classes.CardContent}>
              <div className={classes.CardInner}>
                <div className={classes.CardImage}>
                  <img src={img4} alt="Blog post image" />
                  <div className={classes.CardTag}>Lorem</div>
                </div>
                <h1 className={classes.Heading}>Lorem Ipsum</h1>
                <span className={classes.Date}>August 14, 2018</span>
                <p className={classes.Paragraph}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ullam at repellat ducimus cumque error eligendi, sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.Card}>
            <div className={classes.CardContent}>
              <div className={classes.CardInner}>
                <div className={classes.CardImage}>
                  <img src={img5} alt="Blog post image" />
                  <div className={classes.CardTag}>Lorem</div>
                </div>
                <h1 className={classes.Heading}>Lorem Ipsum</h1>
                <span className={classes.Date}>August 14, 2018</span>
                <p className={classes.Paragraph}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ullam at repellat ducimus cumque error eligendi, sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default blogSlides;
