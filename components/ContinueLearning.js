import React from 'react';
import './continueLearning.css';
import BellIcon from '../icons/bell.svg';
import DotsIcon from '../icons/ellipsis.svg';

const ContinueLearning = () => {
  return (
    <div className="learning-card">
      <div className="icon-section">
        <div className="icon-bg">
          <img src={BellIcon} alt="Notification" />
        </div>
      </div>
      <div className="text-section">
        <p className="watched-text">2/8 Watched</p>
        <p className="course-title">Product Design</p>
      </div>
      <div className="dots-wrapper">
        <img src={DotsIcon} alt="Options" className="dots-icon" />
      </div>
    </div>
  );
};

export default ContinueLearning;
