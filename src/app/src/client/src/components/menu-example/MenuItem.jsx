import React from 'react';
import { Link } from 'react-router-dom';

export const MenuItem = ({ src, itemName, itemPrice, itemDescr }) => {
  return (
    <div className="col-lg-6">
      <div className="d-flex align-items-center">
        <img
          className="flex-shrink-0 img-fluid rounded"
          src={src}
          alt=""
          style={{ width: '80px' }}
        />
        <div className="w-100 d-flex flex-column text-start ps-4">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <span>{itemName}</span>
            <span className="text-primary">{itemPrice}</span>
            <Link
              to=""
              className="fa fa-shopping-cart text-primary text-end"
            ></Link>
            {/* <i className="fa fa-shopping-cart text-primary"></i> */}
          </h5>

          <small className="fst-italic">{itemDescr}</small>
        </div>
        ; ;
      </div>
    </div>
  );
};
