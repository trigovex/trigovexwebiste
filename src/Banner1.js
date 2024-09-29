import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for layout
import './Banner1.css'; // Import the separate CSS for Banner1
import S1 from './images/s1.png';

const Banner1 = () => {
  return (
    <div className="container-fluid app-banner">
      <div className="row align-items-center">
        <div className="col-md-6 text-section text-md-start text-center">
          <div className="new-tag">
            <span>New</span> Beta now available &rarr;
          </div>
          <h1 className="banner-title">
            We Help You To <span className="highlighted-text">Boost</span> Your Business.
          </h1>
          <p className="banner-description">
            We create experiences that transform brands, grow businesses, and make people's lives better. Let's create something special together.
          </p>
          <button className="btn btn-success download-btn">
            <i className="fab fa-apple"></i> Get Started Now
          </button>
        </div>

        <div className="col-md-6 text-center">
          <img src={S1} alt="Phone mockup" className="phone-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
