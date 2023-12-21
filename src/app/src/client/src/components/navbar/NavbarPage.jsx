import React from 'react';
import './Navbar.css';
import heroImg from '../img/hero.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import jack_daniels from '../img/jack_daniels.jpg';

function NavbarPage() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                Enjoy Our
                <br />
                Delicious Drink
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Indulge in our extensive selection of handcrafted cocktails,
                expertly mixed by our talented mixologists who are passionate
                about their craft. From classic favorites to innovative
                creations, our bar offers a drink for every palate. Sip on a
                perfectly balanced Old Fashioned or savor the refreshing notes
                of a signature botanical-infused gin cocktail.
              </p>
              <Link
                to="/cart"
                className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                Order A Drink
              </Link>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarPage;
