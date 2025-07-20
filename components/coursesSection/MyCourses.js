import React from 'react';
import CourseCardLayout from './CourseCardLayout';
import FigmaIcon from '../../icons/figma.svg';
import PaletteIcon from '../../icons/paint.svg';

const MyCourses = () => {
  const myCourses = [
    {
      id: 3,
      title: 'Introduction to UI Design',
      time: '6:00hrs',
      lessons: '04 Lessons',
      assignments: 'Assignments',
      icon: FigmaIcon,
    },
    {
      id: 4,
      title: 'Brand Strategy Essentials',
      time: '3:45hrs',
      lessons: '02 Lessons',
      assignments: 'Assignments',
      icon: PaletteIcon,
    },
  ];

  return <CourseCardLayout heading="My Courses" data={myCourses} />;
};

export default MyCourses;
