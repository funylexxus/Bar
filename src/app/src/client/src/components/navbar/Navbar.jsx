import React from 'react';
import './Navbar.css';
import heroImg from '../img/hero.png';
import Cart from '../cart/Cart';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link to="" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-beer me-3"></i>Bar
          </h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link to="index.html" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="about.html" className="nav-item nav-link">
              About
            </Link>
            <Link to="service.html" className="nav-item nav-link">
              Service
            </Link>
            <Link to="menu.html" className="nav-item nav-link">
              Menu
            </Link>
            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="booking.html" className="dropdown-item">
                  Booking
                </a>
                <a href="team.html" className="dropdown-item">
                  Our Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
              </div>
            </div> */}
            <Link to="contact.html" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <Link to="" className="btn btn-primary py-2 px-4">
            Book A Table
          </Link>
          <a
            passHref
            href="/sign-up"
            className="btn btn-primary mx-3 py-2 px-4"
          >
            Sign Up
          </a>
          <Link to="/cart" className="fa fa-shopping-cart text-primary">
            <Link to="/cart" style={{ display: 'none' }}>
              <Cart />
            </Link>
          </Link>
        </div>
      </nav>

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                Enjoy Our
                <br />
                Delicious Meal
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Link
                to=""
                className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                Book A Table
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

export default Navbar;
