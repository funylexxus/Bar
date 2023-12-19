import './Menu.css';
import React from 'react';
import Menu from './Menu';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import NavbarAdd from '../navbar/NavbarAdd';

function MenuPage() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <NavbarAdd pageTitle={'Menu'} pageName={'Menu'} />
      <Menu />
      <Footer />
    </div>
  );
}

export default MenuPage;
