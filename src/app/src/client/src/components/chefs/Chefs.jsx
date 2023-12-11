import React from 'react';
import './Chefs.css';
import team_1 from '../img/team-1.jpg';
import team_2 from '../img/team-2.jpg';
import team_3 from '../img/team-3.jpg';
import team_4 from '../img/team-4.jpg';
import kosen from '../img/kosen.jpg';
import vu_sleeping from '../img/vu_sleeping.jpg';
import tsevan from '../img/tsevan.jpg';
import siemens from '../img/siemens.jpg';
import { ChefsInfo } from './ChefsInfo';

function Chefs() {
  return (
    <div className="container-xxl pt-5 pb-3">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Team Members
          </h5>
          <h1 className="mb-5">Our Master Chefs</h1>
        </div>

        <div className="row g-4">
          <ChefsInfo
            delay={'0.1s'}
            src={vu_sleeping}
            chefName={'Head Chef'}
            chefDesignation={'sofa'}
          />

          <ChefsInfo
            delay={'0.3s'}
            src={kosen}
            chefName={'Sous Chef'}
            chefDesignation={'Kitchen'}
          />

          <ChefsInfo
            delay={'0.5s'}
            src={tsevan}
            chefName={'Head Director'}
            chefDesignation={'basement'}
          />

          <ChefsInfo
            delay={'0.7s'}
            src={siemens}
            chefName={'Head Manager'}
            chefDesignation={'basement'}
          />
        </div>
      </div>
    </div>
  );
}

export default Chefs;
