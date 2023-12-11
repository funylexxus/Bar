import React from 'react';

export const AboutInfo = (props) => {
  return (
    <div className="col-sm-6">
      <div className="d-flex align-items-center border-start border-5 border-primary px-3">
        <h1
          className="flex-shrink-0 display-5 text-primary mb-0"
          data-toggle="counter-up"
        >
          {props.number}
        </h1>

        <div className="ps-4">
          <p className="mb-0">{props.text}</p>
          <h6 className="text-uppercase mb-0">{props.secondText}</h6>
        </div>
      </div>
    </div>
  );
};
