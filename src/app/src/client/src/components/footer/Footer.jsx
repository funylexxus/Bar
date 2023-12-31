import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Company
            </h4>
            <Link to="/about" className="btn btn-link">
              About Us
            </Link>
            <Link to="" className="btn btn-link">
              Contact Us
            </Link>
            <Link to="/cart" className="btn btn-link" href="">
              Reservation
            </Link>
            <Link to="" className="btn btn-link" href="">
              Privacy Policy
            </Link>
            <Link to="" className="btn btn-link" href="">
              Terms & Condition
            </Link>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Contact
            </h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>28 Gikalo Street,
              Minsk, Belarus
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+375 33 555 67 89
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>dekanatfitu@bsuir.by
            </p>
            {/* <div className="d-flex pt-2">
              <Link
                passHref
                className="btn btn-outline-light btn-social"
                href=""
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                passHref
                className="btn btn-outline-light btn-social"
                href=""
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                passHref
                className="btn btn-outline-light btn-social"
                href=""
              >
                <i className="fab fa-youtube"></i>
              </Link>
              <Link
                passHref
                className="btn btn-outline-light btn-social"
                href=""
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div> */}
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Opening
            </h4>
            <h5 className="text-light fw-normal">Monday - Saturday</h5>
            <p>16.00 - 04.00</p>
            <h5 className="text-light fw-normal">Sunday</h5>
            <p>17.00 - 06.00</p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Newsletter
            </h4>
            <p>Did u know that this website is created using React?</p>
            {/* <div
              className="position-relative mx-auto"
              style={{ maxWidth: '400px' }}
            >
              <input
                className="form-control border-primary w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{' '}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved. Designed By{' '}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
