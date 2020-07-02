import React from 'react';
import { Button } from 'reactstrap';

import HeaderImg from '../../assets/images/header-app.png';
import ImageShape from '../../assets/images/image-shape.svg';
import ImageShape2 from '../../assets/images/header-shape-2.svg';

export default function Main() {
  return (
    <div>
      <div
        id="home"
        className="header-hero bg_cover d-lg-flex align-items-center"
      >
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
        <div className="shape shape-5" />
        <div className="shape shape-6" />

        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-lg-6 col-md-10">
              <div className="header-hero-content">
                <h3
                  className="header-title wow fadeInLeftBig"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  <span>Print your files</span> With Confidence and Creativity.
                </h3>
                <p
                  className="text wow fadeInLeftBig"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.6s"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diamnon umy eirmomp or invidunt ut labore et dolore magna
                  aliquyam eratse diam voluptua. At vero eosaccusam.
                </p>
                <ul className="d-flex">
                  <li>
                    <Button
                      color="danger"
                      className="main-btn wow fadeInLeftBig"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.8s"
                    >
                      Login using Google
                    </Button>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                      className="header-video video-popup wow fadeInLeftBig"
                      data-wow-duration="1.3s"
                      data-wow-delay="1.2s"
                    >
                      <i className="lni lni-play" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-10">
              <div className="header-image">
                <img
                  src={HeaderImg}
                  alt="app"
                  className="image wow fadeInRightBig"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.5s"
                />
                <div
                  className="image-shape wow fadeInRightBig"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.8s"
                >
                  <img src={ImageShape} alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-shape-1 d-none d-md-block" />
        <div className="header-shape-2">
          <img src={ImageShape2} alt="shape" />
        </div>
      </div>
    </div>
  );
}
