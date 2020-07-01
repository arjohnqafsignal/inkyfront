import React from 'react';

import AboutImg from '../../assets/images/about-app.png';

export default function About() {
  return (
    <div>
        <section id="about" class="about-area pt-70 pb-120">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-6">
                      <div class="about-image mt-50 wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                          <div class="about-shape"></div>
                          <img class="app" src={AboutImg} alt="app"></img>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="about-content mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                          <div class="section-title">
                              <h3 class="title">Comes With All You Need.</h3>
                              <p class="text">Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq Alii nusquam cuduo, vim eusde consulatu percipitur, meis dolor comprehensam at vij. Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq nusquam.</p>
                          </div>
                          <a href="#" class="main-btn">Get The App</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div> 
  );
}
