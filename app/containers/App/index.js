import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import HomePage from 'containers/HomePage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';



import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';

import {makeAppLoading, makeCurrentUser , makeIsLogged} from './selectors';
import { loginGoogle, logoutGoogle } from './actions'

import saga from './saga';
import reducer from './reducer';


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

export function App({ propLoading, googleLogin, googleLogout, propUser, propIsLogged }) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });
  return (
    <div>
      <Loader isLoading={propLoading} />
      <Header googleLogin={googleLogin} googleLogout={googleLogout} propUser={propUser} propIsLogged={propIsLogged} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

App.propTypes = {
  googleLogin: PropTypes.func,
  googleLogout: PropTypes.func,
  propLoading: PropTypes.bool,
  propUser: PropTypes.object,
  propIsLogged: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  propLoading: makeAppLoading(),
  propUser: makeCurrentUser(),
  propIsLogged: makeIsLogged(),
});

const mapDispatchToProps = dispatch => {
  return {
    googleLogin: (response) => dispatch(loginGoogle(response)),
    googleLogout: () => dispatch(logoutGoogle()),
  }
}


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect
)(App);
