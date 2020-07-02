import React, { useState, memo, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'containers/HomePage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { makeSelectLoading } from './selectors';


import '../../assets/css/bootstrap.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/slick.css';
import '../../assets/css/swiper.min.css';
import '../../assets/css/lineicons.css';
import '../../assets/css/default.css';
import '../../assets/css/style.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader.js';

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const googleLogin = useCallback(() => {
    console.log('logging in...');
  });
  return (
    <div>
      <Loader isLoading={isLoading} />
      <Header googleLogin={googleLogin} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
});

export function mapDispatchToProps(dispatch) {
  return {
    // onLoginGoogle: evt => dispatch(loginGoogle()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
