import React from 'react';
import './continueLearningSection.css';
import ContinueLearning from './ContinueLearning';
import LeftArrow from '../icons/left-arrow.png';
import RightArrow from '../icons/right-arrow.png';

const ContinueLearningSection = () => {
  return (
    <div className="continue-learning-wrapper">
      <div className="header-row">
        <h3 className="section-title">Continue Learning</h3>
        <div className="arrow-controls">
          <button className="arrow-button">
            <img src={LeftArrow} alt="left" />
          </button>
          <button className="arrow-button">
            <img src={RightArrow} alt="right" />
          </button>
        </div>
      </div>
      <div className="card-scroll">
        <ContinueLearning />
        <ContinueLearning />
        <ContinueLearning />
      </div>
    </div>
  );
};

export default ContinueLearningSection;
