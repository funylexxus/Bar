import React from 'react';
import DrinksListFetcher from './DrinksListFetcher';

export function DrinksContent() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Drinks Menu
          </h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>
        <DrinksListFetcher />
      </div>
    </div>
  );
}
