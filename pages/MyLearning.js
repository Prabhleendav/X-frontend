import React from 'react';
import Header2 from '../components/Header2';
import MyCourses from '../components/coursesSection/MyCourses';
import StatCard from '../components/myLearning/StatCard';
import LiveClasses from '../components/myLearning/LiveClasses';
import './MyLearning.css';

function MyLearning() {
  return (
    <div className="learning-main">
      <Header2 />
      <div className="learning-content">
        <div className="leftSection">
          <StatCard />
          <MyCourses />
        </div>
        <div className="rightSection">
          <LiveClasses />
        </div>
      </div>
    </div>
  );
}

export default MyLearning;
