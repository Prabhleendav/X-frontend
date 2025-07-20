import React from 'react';
import './banner.css';
import bgImage from '../assets/bg.jpg'; 
import triangle from '../icons/triangle.png'
function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="banner-text">
        <span className="banner-tag">ONLINE COURSE</span>
        <h3>Sharpen&nbsp; Your Skills With<br />Professional Online Courses</h3>
        <button className="join-btn">
          Join Now
          <span className="play-circle">
            <img src={triangle} alt="Play" />
            </span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
