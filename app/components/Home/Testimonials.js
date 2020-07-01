import React from 'react';


import IconQuote from '../../assets/images/icon-quote.svg';
import Author1 from '../../assets/images/author-1.jpg';
import Author2 from '../../assets/images/author-2.jpg';
import Author3 from '../../assets/images/author-3.jpg';
import Author4 from '../../assets/images/author-4.jpg';
import Author5 from '../../assets/images/author-5.jpg';
import Author6 from '../../assets/images/author-6.jpg';

export default function Testimonials() {
  return (
    <div>
        <section id="testimonial" class="testimonial-area pt-110 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="section-title text-center pb-45">
                        <h3 class="title">User Reviews.</h3>
                        <p class="text">Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor comprehensam at vis. Vel ut percipitur dignissim signiferumque.</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="testimonial-wrapper">
                        <div class="testimonial-content">
                            <div class="single-testimonial-content text-center">
                                <div class="testimonial-quote">
                                    <img class="svg" src={IconQuote} alt="quote" />
                                </div>
                                <div class="testimonial-text">
                                    <p class="text">Lorem ipsum dolor situt amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo invidunt  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor amet sadipscing elitr.</p>
                                    <h4 class="holder-name">Linda Sophia</h4>
                                    <span class="sub-title">Designer, SpaceX</span>
                                </div>
                            </div>
                            
                            <div class="single-testimonial-content text-center">
                                <div class="testimonial-quote">
                                    <img class="svg" src={IconQuote} alt="quote" />
                                </div>
                                <div class="testimonial-text">
                                    <p class="text">Lorem ipsum dolor situt amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo invidunt  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor amet sadipscing elitr.</p>
                                    <h4 class="holder-name">Michel Jhonsmith</h4>
                                    <span class="sub-title">CEO, OnePlus</span>
                                </div>
                            </div>
                            
                            <div class="single-testimonial-content text-center">
                                <div class="testimonial-quote">
                                    <img class="svg" src={IconQuote} alt="quote" />
                                </div>
                                <div class="testimonial-text">
                                    <p class="text">Lorem ipsum dolor situt amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo invidunt  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor amet sadipscing elitr.</p>
                                    <h4 class="holder-name">John Doe</h4>
                                    <span class="sub-title">CEO, UIdeck</span>
                                </div>
                            </div>
                            
                            <div class="single-testimonial-content text-center">
                                <div class="testimonial-quote">
                                    <img class="svg" src={IconQuote} alt="quote" />
                                </div>
                                <div class="testimonial-text">
                                    <p class="text">Lorem ipsum dolor situt amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo invidunt  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor amet sadipscing elitr.</p>
                                    <h4 class="holder-name">Windy Lisa</h4>
                                    <span class="sub-title">Founder, PageBulb</span>
                                </div>
                            </div>
                            
                            <div class="single-testimonial-content text-center">
                                <div class="testimonial-quote">
                                    <img class="svg" src={IconQuote} alt="quote" />
                                </div>
                                <div class="testimonial-text">
                                    <p class="text">Lorem ipsum dolor situt amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo invidunt  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor amet sadipscing elitr.</p>
                                    <h4 class="holder-name">Musharof Chowdhury</h4>
                                    <span class="sub-title">CEO, GrayGrids</span>
                                </div>
                            </div>
                            
                            <div class="single-testimonial-content text-center">
                                <div class="testimonial-quote">
                                    <img class="svg" src={IconQuote} alt="quote" />
                                </div>
                                <div class="testimonial-text">
                                    <p class="text">Lorem ipsum dolor situt amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo invidunt  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eoset accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor amet sadipscing elitr.</p>
                                    <h4 class="holder-name">Lisa Smith</h4>
                                    <span class="sub-title">Designer, LineIcons</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="testimonial-author">
                            <div class="single-testimonial-author">
                                <img src={Author1} alt="author" />
                                <img src={Author2} alt="author" />
                                <img src={Author3} alt="author" />
                                <img src={Author4} alt="author" />
                                <img src={Author5} alt="author" />
                                <img src={Author6} alt="author" />
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
