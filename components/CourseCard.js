import React from 'react';
import './courseCard.css';
import course1 from '../assets/course1.png';
import profile from '../assets/profile.png';
import heartIcon from '../icons/heart.svg';

function CourseCard() {
  return (
    <div className="course-card">
      <div className="image-wrapper">
        <img src={course1} alt="Course" className="course-image" />
        <button className="heart-button">
          <img src={heartIcon} alt="Like" className="heart-icon" />
        </button>
      </div>
      <div className="card-info">
        <span className="tag">FRONTEND</span>
        <h4 className="course-title">
          Beginner’s Guide To Becoming A Professional Frontend Developer
        </h4>
        <div className="author">
          <img src={profile} alt="Author" className="author-image" />
          <div className="author-details">
            <span className="author-name">Prashant Kumar Singh</span>
            <span className="author-role">Software Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
