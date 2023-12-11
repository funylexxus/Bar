import React from 'react';

export const ServiceItem = ({
  delay,
  className,
  serviceItemTitle,
  serviceItemDescr,
}) => {
  return (
    <div className={'col-lg-3 col-sm-6 wow fadeInUp'} data-wow-delay={delay}>
      <div className="service-item rounded pt-3">
        <div className="p-4">
          <i className={className}></i>
          <h5>{serviceItemTitle}</h5>
          <p>{serviceItemDescr}</p>
        </div>
      </div>
    </div>
  );
};
