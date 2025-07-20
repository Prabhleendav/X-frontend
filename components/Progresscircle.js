import React from 'react';
import './progressCircle.css';

function Progresscircle() {
  const radius = 80;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.6; // 60%
  const dash = circumference * progress;

  return (
    <div className="progress-card">
      <div className="progress-legend">
        <span className="progress-box"></span>
        <span className="progress-label">Curriculum</span>
      </div>


      <svg
        className="gauge"
        width="200"
        height="120"
        viewBox="0 0 200 120"
      >
        <path
          className="track"
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#E6E6E6"
          strokeWidth={stroke}
        />
        <path
          className="progress"
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#6C1D5F"
          strokeWidth={stroke}
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="round"
        />
      </svg>

      <div className="progress-label">Your Progress</div>
    </div>
  );
}

export default Progresscircle;
