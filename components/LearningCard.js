import React from 'react';
import Header from '../components/Header';
import './mylearning.css';

const MyLearning = () => {
  const courses = [
    {
      title: 'User Experience (UX) Design',
      time: '5:30hrs',
      lessons: '05',
      assignments: 'Assignments',
    },
    {
      title: 'Cyber Security',
      time: '5:30hrs',
      lessons: '05',
      assignments: 'Assignments',
    },
    {
      title: 'Data Science',
      time: '5:30hrs',
      lessons: '05',
      assignments: 'Assignments',
    },
    {
      title: 'Visual Design and Branding',
      time: '4:00hrs',
      lessons: '03',
      assignments: 'Assignments',
    },
  ];

  return (
    <div className="mylearning-page">
      <Header />
      <div className="learning-summary">
        <div className="summary-card">
          <p className="summary-title">Courses Completed</p>
          <h2>02</h2>
        </div>
        <div className="summary-card">
          <p className="summary-title">Tasks Finished</p>
          <h2>02</h2>
        </div>
        <div className="summary-card">
          <p className="summary-title">Courses In Progress</p>
          <h2>03</h2>
        </div>
      </div>

      <div className="course-list-section">
        <h3>My Courses</h3>
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-icon">
              {/* SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5b2677" viewBox="0 0 24 24">
                <path d="M4 4h16v2H4V4zm0 5h16v2H4V9zm0 5h10v2H4v-2z" />
              </svg>
            </div>
            <div className="course-details">
              <h4>{course.title}</h4>
              <p><span className="icon">⏱</span> {course.time}</p>
              <p><span className="blue-dot" /> {course.lessons} Lessons</p>
              <p><span className="icon">📎</span> {course.assignments}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLearning;
