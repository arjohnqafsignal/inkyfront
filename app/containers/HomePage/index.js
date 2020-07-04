import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { loginGoogle } from '../App/actions'

import WOW from 'wowjs';
import Main from '../../components/Home/Main';
import Why from '../../components/Home/Why';
import About from '../../components/Home/About';
import Features from '../../components/Home/Features';
import Testimonials from '../../components/Home/Testimonials';
import Screenshots from '../../components/Home/Screenshots';
import Download from '../../components/Home/Download';

export function HomePage({googleLogin}) {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  });
  return (
    <div>
      <Helmet title="Inky - Home" />
      <Main googleLogin={googleLogin} />
      <Why />
      <About />
      <Features />
      <Testimonials />
      <Screenshots />
      <Download />
    </div>
  );
}


HomePage.propTypes = {
  googleLogin: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
     googleLogin: (response) => dispatch(loginGoogle(response)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect
)(HomePage);

