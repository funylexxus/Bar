import React from 'react';
import './Service.css';
import { ServiceItem } from './ServiceItem';

function Service() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          <ServiceItem
            delay={'0.1s'}
            className={'fa fa-3x fa-user-tie text-primary mb-4'}
            serviceItemTitle={'Master Chefs'}
            serviceItemDescr={
              'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
            }
          />

          <ServiceItem
            delay={'0.3s'}
            className={'fa fa-3x fa-utensils text-primary mb-4'}
            serviceItemTitle={'Quality Food'}
            serviceItemDescr={
              'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
            }
          />

          <ServiceItem
            delay={'0.5s'}
            className={'fa fa-3x fa-cart-plus text-primary mb-4'}
            serviceItemTitle={'Online Order'}
            serviceItemDescr={
              'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
            }
          />

          <ServiceItem
            delay={'0.7s'}
            className={'fa fa-3x fa-headset text-primary mb-4'}
            serviceItemTitle={'24/7 Service'}
            serviceItemDescr={
              'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
