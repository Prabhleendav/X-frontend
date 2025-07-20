import React from 'react';
import './liveClasses.css';

const past = [
  { title: 'Circuit Theory', time: '8:00 AM', status: 'Absent', type: 'Lecture 1' },
  { title: 'Discrete Math', time: '10:30 AM', status: 'Attended', type: 'MATH 124' },
  { title: 'Discrete Math', time: '10:30 AM', status: 'Attended', type: 'MATH 124' }
];

const upcoming = [
  { title: 'Introduction to Web Development', time: '01:00 PM', type: 'Lecture 45' },
  { title: 'Computer Architecture', time: '03:00 PM', type: 'Lecture 5' }
];

function LiveClasses() {
  return (
    <div className="lives-classes">
      <h4>Live’s Classes</h4>

      <div className="class-section">
        <p className="section-label">Past</p>
        {past.map((cls, idx) => (
          <div key={idx} className="class-card past">
            <div>
              <p className="class-type">{cls.type}</p>
              <p className="class-title">{cls.title}</p>
            </div>
            <p className="class-time">{cls.time}</p>
          </div>
        ))}
      </div>

      <div className="class-section">
        <p className="section-label">Upcoming</p>
        {upcoming.map((cls, idx) => (
          <div key={idx} className="class-card upcoming">
            <div>
              <p className="class-type">{cls.type}</p>
              <p className="class-title">{cls.title}</p>
            </div>
            <p className="class-time">{cls.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveClasses;
