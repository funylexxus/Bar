import React from 'react';
import './Chefs.css';
import Chefs from './Chefs';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import NavbarAdd from '../navbar/NavbarAdd';

function Team() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      {/* <NavbarAdd pageName={'Team'} pageTitle={'Team'} /> */}
      <Chefs />
      <Footer />
    </div>
  );
}

export default Team;
