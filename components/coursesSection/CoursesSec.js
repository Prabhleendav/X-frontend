import React from 'react';
import CoursesSection from './CoursesSection';
import MyCourses from './MyCourses';
import './coursesSec.css';

const CoursesSec = () => {
  return (
    <div className="courses-page">
      <CoursesSection />
      <MyCourses />
    </div>
  );
};

export default CoursesSec;
