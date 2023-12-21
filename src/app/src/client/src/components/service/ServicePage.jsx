import React from 'react';
import './Service.css';
import Service from './Service';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import NavbarAdd from '../navbar/NavbarAdd';

function ServicePage() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar></Navbar>
      {/* <NavbarAdd pageTitle={'Service'} pageName={'Service'} /> */}
      <Service />
      <Footer />
    </div>
  );
}

export default ServicePage;
