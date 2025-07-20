import React, { useState } from 'react';
import './courseCardLayout.css';
import ClockIcon from '../../icons/clock.svg';
import AssignmentIcon from '../../icons/tick.svg';
import TickIcon from '../../icons/tick.svg';
import SearchIcon from '../../icons/search.png';
import FigmaIcon from '../../icons/figma.svg';
import PaletteIcon from '../../icons/paint.svg';
import PaperIcon from '../../icons/paper.svg';
const CourseCardLayout = () => {
  const [selected, setSelected] = useState(null);

  const classes = [
    {
      id: 1,
      title: "User Experience (UX) Design",
      time: "5:30hrs",
      lessons: "05 Lessons",
      assignments: "Assignments",
      icon: FigmaIcon,
    },
    {
      id: 2,
      title: "Visual Design and Branding",
      time: "4:00hrs",
      lessons: "03 Lessons",
      assignments: "Assignments",
      icon: PaletteIcon,
    },
  ];

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <div className="recent-enrolled-container">
      <div className="section-header">
        <h3>Recent enrolled classes</h3>
        <div className="all-search">
          <span>All</span>
          <div className="search-circle">
            <img src={SearchIcon} alt="search" />
          </div>
        </div>
      </div>

      <div className="recent-class-list">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className={`class-card ${selected === cls.id ? 'active' : ''}`}
            onClick={() => handleSelect(cls.id)}
          >
            <div className="tick-icon">
              {selected === cls.id && <img src={TickIcon} alt="tick" />}
            </div>
            <div className="class-content">
              <div className="class-icon-box">
                <img src={cls.icon} alt="course" />
              </div>
              <div className="class-info">
                <h4>{cls.title}</h4>
                <div className="class-meta">
                  <span><img src={ClockIcon} alt="clock" /> {cls.time}</span>
                  <span><img src={PaperIcon} alt="paper" /> {cls.lessons}</span>
                  <span><img src={AssignmentIcon} alt="assignment" /> {cls.assignments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCardLayout;
