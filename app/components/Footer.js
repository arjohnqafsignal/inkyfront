import React from 'react';
import Logo from '../assets/images/logo.png';
import FooterShape from '../assets/images/footer-shape.svg';

export default function Footer() {
  return (
    <div>
      
      <footer id="footer" className="footer-area">
        <div className="footer-shape shape-1"></div>
        <div className="footer-shape shape-2"></div>
        <div className="footer-shape shape-3"></div>
        <div className="footer-shape shape-4"></div>
        <div className="footer-shape shape-5"></div>
        <div className="footer-shape shape-6"></div>
        <div className="footer-shape shape-7"></div>
        <div className="footer-shape shape-8">
          <img className="svg" src={FooterShape} alt="Shape" />
        </div>

        <div className="footer-widget pt-30 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-about mt-50 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.2s">
                  <a className="logo" href="#" >
                    <img src={Logo} alt="Logo" />
                  </a>
                  <p className="text">Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                  <ul className="social">
                    <li><a href="#"><i className="lni lni-facebook"></i></a></li>
                    <li><a href="#"><i className="lni lni-twitter"></i></a></li>
                    <li><a href="#"><i className="lni lni-instagram"></i></a></li>
                    <li><a href="#"><i className="lni lni-linkedin"></i></a></li>
                  </ul>
                </div> 
              </div> 
              <div className="col-lg-5 col-md-6">
                <div className="footer-link d-flex flex-wrap">
                  <div className="footer-link-wrapper mt-45 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.4s">
                  <div>
                    <div className="footer-title">
                      <h4 className="title">Quick Links</h4>
                    </div>
                    <ul className="link">
                      <li><a className="" href="#">Home</a></li>
                      <li><a className="" href="#">Features</a></li>
                      <li><a className="" href="#">Testimonial</a></li>
                      <li><a className="" href="#">Pricing</a></li>
                      <li><a className="" href="#">Contact</a></li>
                    </ul>
                  </div>

                  <div className="footer-link-wrapper mt-45 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.6s">
                    <div className="footer-title">
                      <h4 className="title">Support</h4>
                    </div>
                    <ul className="link">
                      <li><a className="" href="#">FAQ</a></li>
                      <li><a className="" href="#">Privacy Policy</a></li>
                      <li><a className="" href="#">Terms Of Use</a></li>
                      <li><a className="" href="#">Legal</a></li>
                      <li><a className="" href="#">Site Map</a></li>
                    </ul>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-contact mt-45 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.8s">
                  <div className="footer-title">
                    <h4 className="title">Quick Link</h4>
                  </div>
                  <ul className="contact-list">
                    <li>
                      <div className="contact-info d-flex">
                        <div className="info-content media-body">
                          <p className="text"><i className="lni lni-phone"></i> +809272561823</p>
                        </div>
                      </div> 
                    </li>
                    <li>
                      <div className="contact-info d-flex">
                        <div className="info-content media-body">
                          <p className="text"><a href="#"><i className="lni lni-envelope"></i> info@appland.com</a></p>
                        </div>
                      </div> 
                    </li>
                    <li>
                      <div className="contact-info d-flex">
                        <div className="info-content media-body">
                          <p className="text"><a href="#"><i className="lni lni-world"></i> www.yourweb.com</a></p>
                        </div>
                      </div> 
                    </li>
                    <li>
                      <div className="contact-info d-flex">
                        <div className="info-content media-body">
                          <p className="text"><i className="lni lni-map"></i> 123 Stree New York City , United States Of America 750.</p>
                        </div>
                      </div> 
                    </li>
                  </ul>
                </div>
              </div>
            </div> 
          </div> 
        </div> 

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright d-sm-flex justify-content-between">
                  <div className="copyright-text text-center">
                    <p className="text">Crafted by <a rel="nofollow" href="https://singledraft.com/">SingleDraft</a></p>
                  <div className="copyright-privacy text-center">
                    <a href="#">Report Issues</a>
                  </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
        
        <a href="#" className="back-to-top"><i className="lni lni-chevron-up"></i></a>
      </footer>

    </div>
  );
}
