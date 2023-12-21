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
import { Link } from 'react-router-dom';
import bar_img4 from '../img/bar_img4.jpg';
import bar_img3 from '../img/bar_img3.jpg';
import bar_img2 from '../img/bar_img2.jpg';
import bar_img1 from '../img/bar_img1.jpg';
import bar_background2 from '../img/bar_background2.jpg';
import bar_background3 from '../img/bar_background3.jpg';
import bar_background1 from '../img/bar_background.jpg';

function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <AboutImage
                width={'w-100'}
                delay={'0.1'}
                src={bar_img4}
                style={{ marginTop: '50%' }}
              />
              <AboutImage
                width={'w-75'}
                delay={'0.3'}
                src={bar_img3}
                style={{ marginTop: '57%' }}
              />

              <AboutImageEnd width={'w-75'} delay={'0.5'} src={bar_img2} />
              <AboutImageEnd
                width={'w-100'}
                delay={'0.7'}
                src={bar_background2}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
              About Us
            </h5>
            <h1 className="mb-4">
              Welcome to <i className="fa fa-beer text-primary me-2"></i>
              Bar
            </h1>
            <AboutDescr
              descr={
                'In our Bar you will get pleasant experience by spending time with your friend or alone, also from our stuff, which has rich and long experience.'
              }
            />

            <AboutDescr
              descr={
                'Every year we reach new heights, get new customers and also improving our experience with our customers.'
              }
            />

            <div className="row g-4 mb-4">
              <AboutInfo
                number={'5'}
                text={'Years of'}
                secondText={'Experience'}
              />

              <AboutInfo
                number={'20'}
                text={'Popular'}
                secondText={'Alcohol Drinks'}
              />
            </div>
            <Link
              to="/about"
              className="btn btn-primary py-3 px-5 mt-2"
              href=""
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
