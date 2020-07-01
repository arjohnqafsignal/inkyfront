/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import '../../assets/css/bootstrap.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/slick.css';
import '../../assets/css/swiper.min.css';
import '../../assets/css/lineicons.css';
import '../../assets/css/default.css';
import '../../assets/css/style.css';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      <Footer />
    </div>
  );
}
