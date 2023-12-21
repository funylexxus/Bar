import './About.css';
import React from 'react';
import About from './About';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Chefs from '../chefs/Chefs';
import NavbarAdd from '../navbar/NavbarAdd';

function AboutPage() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      {/* <NavbarAdd pageName={'About'} pageTitle={'About us'} /> */}
      <About />
      <Chefs />
      <Footer />
    </div>
  );
}

export default AboutPage;
