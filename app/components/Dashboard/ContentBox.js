import React from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
export default function ContentBox() {
  return (
    <div>
      <section id="why" className="services-area pt-110 pb-120">
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center pb-25">
                <h3 className="title">Welcome! John James</h3>
              </div>
            </div>
          </div>
          <Row>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-services services-color-1 text-center mt-30 wow fadeInUpBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <div className="services-icon d-flex align-items-center justify-content-center">
                  <i className="lni lni-printer" />
                </div>
                <div className="services-content">
                  <h4 className="services-title">
                    <a href="#">Print Services</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-services services-color-2 text-center mt-30 wow fadeInUpBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <div className="services-icon d-flex align-items-center justify-content-center">
                  <i className="lni lni-save" />
                </div>
                <div className="services-content">
                  <h4 className="services-title">
                    <a href="#">My Drive</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-services services-color-3 text-center mt-30 wow fadeInUpBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.6s"
              >
                <div className="services-icon d-flex align-items-center justify-content-center">
                  <i className="lni lni-delivery" />
                </div>
                <div className="services-content">
                  <h4 className="services-title">
                    <a href="#">My Orders</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-services services-color-4 text-center mt-30 wow fadeInUpBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.8s"
              >
                <div className="services-icon d-flex align-items-center justify-content-center">
                  <i className="lni lni-user" />
                </div>
                <div className="services-content">
                  <h4 className="services-title">
                    <a href="#">My Profile</a>
                  </h4>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
}
