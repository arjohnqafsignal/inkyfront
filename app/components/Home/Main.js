import React from 'react';

import HeaderImg from '../../assets/images/header-app.png';
import ImageShape from '../../assets/images/image-shape.svg';
import ImageShape2 from '../../assets/images/header-shape-2.svg';

export default function Main() {
  return (
    <div>
        <div id="home" class="header-hero bg_cover d-lg-flex align-items-center">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
            <div class="shape shape-5"></div>
            <div class="shape shape-6"></div>
            
            <div class="container">
                <div class="row align-items-center justify-content-center justify-content-lg-between">
                    <div class="col-lg-6 col-md-10">
                        <div class="header-hero-content">
                            <h3 class="header-title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s"><span>Print your files</span> With Confidence and Creativity.</h3>
                            <p class="text wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnon umy eirmomp or invidunt ut labore et dolore magna aliquyam eratse diam voluptua. At vero eosaccusam.</p>
                            <ul class="d-flex">
                                <li><a href="#" class="main-btn wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.8s">Login using Google</a></li>
                                <li><a href="https://www.youtube.com/watch?v=r44RKWyfcFw" class="header-video video-popup wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="1.2s"><i class="lni lni-play"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-10">
                        <div class="header-image">
                            <img src={HeaderImg} alt="app" class="image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s" />
                            <div class="image-shape wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.8s">
                                <img src={ImageShape} alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-shape-1 d-none d-md-block"></div>
            <div class="header-shape-2">
                <img src={ImageShape2} alt="shape" ></img>
            </div>
        </div>
    </div> 
  );
}
