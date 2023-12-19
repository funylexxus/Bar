import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavbarAdd(props) {
  return (
    <div className="container-xxl position-relative p-0">
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            {props.pageTitle}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Pages</Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                {props.pageName}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavbarAdd;
