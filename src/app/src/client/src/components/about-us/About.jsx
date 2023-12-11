import './About.css';
import React from 'react';
import about_1 from '../img/about-1.jpg';
import about_2 from '../img/about-2.jpg';
import about_3 from '../img/about-3.jpg';
import about_4 from '../img/about-4.jpg';
import { AboutImage } from './AboutImage';
import { AboutImageEnd } from './AboutImageEnd';
import { AboutInfo } from './AboutInfo';
import { AboutDescr } from './AboutDescr';

function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <AboutImage width={'w-100'} delay={'0.1'} src={about_1} />
              <AboutImage
                width={'w-75'}
                delay={'0.3'}
                src={about_2}
                style={{ marginTop: '25%' }}
              />

              <AboutImageEnd width={'w-75'} delay={'0.5'} src={about_3} />
              <AboutImageEnd width={'w-100'} delay={'0.7'} src={about_4} />
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
              About Us
            </h5>
            <h1 className="mb-4">
              Welcome to <i className="fa fa-utensils text-primary me-2"></i>
              Restoran
            </h1>
            <AboutDescr
              descr={
                'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.'
              }
            />

            <AboutDescr
              descr={
                'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.'
              }
            />

            <div className="row g-4 mb-4">
              <AboutInfo
                number={'15'}
                text={'Years of'}
                secondText={'Experience'}
              />

              <AboutInfo
                number={'50'}
                text={'Popular'}
                secondText={'Master Chefs'}
              />
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
