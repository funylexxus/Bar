import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';

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
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/service" className="nav-item nav-link">
              Service
            </Link>
            <Link to="/menu" className="nav-item nav-link">
              Menu
            </Link>
            <Link to="/drinks" className="nav-item nav-link">
              Drinks
            </Link>
            <Link to="/team" className="nav-item nav-link">
              Our Team
            </Link>
            {/* <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link> */}
          </div>
          {/* <Link to="" className="btn btn-primary py-2 px-4">
            Book A Table
          </Link> */}
          <Link to="/sign-up" className="btn btn-primary mx-3 py-2 px-4">
            Sign Up
          </Link>
          <Cart />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
