import React from 'react';

import Screenshot1 from '../../assets/images/screenshot-1.jpg';
import Screenshot2 from '../../assets/images/screenshot-2.jpg';
import Screenshot3 from '../../assets/images/screenshot-3.jpg';
import Screenshot4 from '../../assets/images/screenshot-4.jpg';
import ScreenshotFrame from '../../assets/images/app-frame.png';


export default function Screenshots() {
  return (
    <div>
        <section id="screenshots" class="screenshots-area pt-110 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="section-title text-center pb-45">
                        <h3 class="title">App Screenshots.</h3>
                        <p class="text">Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor comprehensam at vis. Vel ut percipitur dignissim signiferumque.</p>
                    </div>
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-12">
                    <div class="screenshot-slider">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="slider-image">
                                        <img src={Screenshot1} alt="screenshot" />
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="slider-image">
                                        <img src={Screenshot2} alt="screenshot" />
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="slider-image">
                                        <img src={Screenshot3} alt="screenshot" />
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="slider-image">
                                        <img src={Screenshot4} alt="screenshot" />
                                    </div>
                                </div>
                            </div>
                           
                            <div class="swiper-pagination"></div>
                            <div class="screenshot-frame d-none d-sm-block">
                                <img src={ScreenshotFrame} alt="frame" />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div> 
  );
}
