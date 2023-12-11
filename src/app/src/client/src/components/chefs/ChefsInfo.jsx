import React from 'react';

export const ChefsInfo = (props) => {
  return (
    <div
      className="col-lg-3 col-md-6 wow fadeInUp"
      data-wow-delay={props.delay}
    >
      <div className="team-item text-center rounded overflow-hidden">
        <div className="rounded-circle overflow-hidden m-4">
          <img className="img-fluid" src={props.src} alt="" />
        </div>
        <h5 className="mb-0">{props.chefName}</h5>
        <small>{props.chefDesignation}</small>
        <div className="d-flex justify-content-center mt-3">
          <a className="btn btn-square btn-primary mx-1" href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-square btn-primary mx-1" href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-square btn-primary mx-1" href="">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
