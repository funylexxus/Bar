import React from 'react';
import './Navbar.css';
import heroImg from '../img/hero.png';
import Cart from '../cart/Cart';

function Navbar() {
  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-beer me-3"></i>Bar
          </h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </a>

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
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Service
            </a>
            <a href="menu.html" className="nav-item nav-link">
              Menu
            </a>
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
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <a href="" className="btn btn-primary py-2 px-4">
            Book A Table
          </a>
          <a href="/sign-up" className="btn btn-primary mx-3 py-2 px-4">
            Sign Up
          </a>
          <a href="/cart" className="fa fa-shopping-cart text-primary">
            <a href="" style={{ display: 'none' }}>
              <Cart />
            </a>
            {/* <img className="text-primary" src={cartImg} alt="" /> */}
          </a>
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
              <a
                href=""
                className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                Book A Table
              </a>
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
