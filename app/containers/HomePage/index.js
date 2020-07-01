import React from 'react';
import { Helmet } from 'react-helmet';

import Main from '../../components/Home/Main'
import Why from '../../components/Home/Why'
import About from '../../components/Home/About'
import Features from '../../components/Home/Features'
import Testimonials from '../../components/Home/Testimonials'
import Screenshots from '../../components/Home/Screenshots'
import Download from '../../components/Home/Download'







export default function HomePage() {
  return (
    <div>
        <Helmet title="Inky - Home" />
        <Main />
        <Why />
        <About />
        <Features />
        <Testimonials />
        <Screenshots />
        <Download />
    </div> 
  );
}
