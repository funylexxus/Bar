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
              'Our Master Chefs ensure you will have the best experience'
            }
          />

          <ServiceItem
            delay={'0.3s'}
            className={'fa fa-3x fa-utensils text-primary mb-4'}
            serviceItemTitle={'Quality Drinks'}
            serviceItemDescr={
              'We make sure that you will get only best and tasty drinks in our bar'
            }
          />

          <ServiceItem
            delay={'0.5s'}
            className={'fa fa-3x fa-cart-plus text-primary mb-4'}
            serviceItemTitle={'Online Order'}
            serviceItemDescr={
              'In our Bar you can online order any alcohol drink you want'
            }
          />

          <ServiceItem
            delay={'0.7s'}
            className={'fa fa-3x fa-headset text-primary mb-4'}
            serviceItemTitle={'24/7 Service'}
            serviceItemDescr={
              'You will get the best experience working with our staff'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
