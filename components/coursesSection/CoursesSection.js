import React from 'react';
import CourseCardLayout from './CourseCardLayout';

import FigmaIcon from '../../icons/figma.svg';
import PaletteIcon from '../../icons/paint.svg';

const CoursesSection = () => {
  const courseData = [
    {
      id: 1,
      title: 'User Experience (UX) Design',
      time: '5:30hrs',
      lessons: '05 Lessons',
      assignments: 'Assignments',
      icon: FigmaIcon,
    },
    {
      id: 2,
      title: 'Visual Design and Branding',
      time: '4:00hrs',
      lessons: '03 Lessons',
      assignments: 'Assignments',
      icon: PaletteIcon,
    },
  ];

  return <CourseCardLayout heading="Recent Enrolled Classes" data={courseData} />;
};

export default CoursesSection;
