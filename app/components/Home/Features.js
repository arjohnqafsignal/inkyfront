import React from 'react';


import FeatureApp from '../../assets/images/features-app.png';
import FeatureShape from '../../assets/images/header-shape-2.svg';

export default function Features() {
  return (
    <div>
        <section id="features" class="features-area pt-110">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="section-title text-center pb-25">
                            <h3 class="title">Awesome Key Features.</h3>
                            <p class="text">Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor comprehensam at vis. Vel ut percipitur dignissim signiferumque.</p>
                        </div>
                    </div>
                </div> 
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="features-items">
                            <div class="single-features features-color-1 d-sm-flex mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                                <div class="features-icon d-flex justify-content-center align-items-center">
                                    <i class="lni lni-laptop-phone"></i>
                                </div>
                                <div class="features-content media-body">
                                    <h4 class="features-title">Fully Responsive</h4>
                                    <p class="text">Lorem ipsum dolor sit ametco snsetetur sadipscing elitr sed diam nonumy eirmod.</p>
                                </div>
                            </div>
                            
                            <div class="single-features features-color-2 d-sm-flex mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.4s">
                                <div class="features-icon d-flex justify-content-center align-items-center">
                                    <i class="lni lni-leaf"></i>
                                </div>
                                <div class="features-content media-body">
                                    <h4 class="features-title">Refreshing Design</h4>
                                    <p class="text">Lorem ipsum dolor sit ametco snsetetur sadipscing elitr sed diam nonumy eirmod.</p>
                                </div>
                            </div>
                            
                            <div class="single-features features-color-3 d-sm-flex mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.6s">
                                <div class="features-icon d-flex justify-content-center align-items-center">
                                    <i class="lni lni-bootstrap"></i>
                                </div>
                                <div class="features-content media-body">
                                    <h4 class="features-title">Bootstrap 4</h4>
                                    <p class="text">Lorem ipsum dolor sit ametco snsetetur sadipscing elitr sed diam nonumy eirmod.</p>
                                </div>
                            </div> 
                        </div> 
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="features-image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                            <img class="image" src={FeatureApp} alt="App"></img>
                            
                            <div class="features-shape-1"></div>
                            <div class="features-shape-2">
                                <img class="svg" src={FeatureShape} alt=""></img>
                            </div>
                        </div> 
                    </div>
                </div>
            </div> 
        </section>
    </div> 
  );
}
