import React from 'react';

import DownloadApp from '../../assets/images/download-app.png';
import DownloadShape from '../../assets/images/download-shape.svg';
import AppStore from '../../assets/images/app-store.png';
import PlayStore from '../../assets/images/play-store.png';

export default function Download() {
  return (
    <div>
       <section id="download" class="download-area pt-70 pb-40">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-6 col-md-9">
                        <div class="download-image mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                            <img class="image" src={DownloadApp} alt="download" />
                            
                            <div class="download-shape-1"></div>
                            <div class="download-shape-2">
                                <img class="svg" src={DownloadShape} alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="download-content mt-45 wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                            <h3 class="download-title">Download and Start Using!</h3>
                            <p class="text">Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq Alii nusquam cuduo, vim eusde consulatu percipitur, meis dolor comprehensam at vij. Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq nusquam.</p>
                            <ul>
                                <li><a class="app-store" href="#"><img src={AppStore} alt="store" /></a></li>
                                <li><a class="play-store" href="#"><img src={PlayStore} alt="store" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div> 
  );
}
