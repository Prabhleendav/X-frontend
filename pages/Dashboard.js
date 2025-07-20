import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CourseCard from '../components/CourseCard';
import StatsCard from '../components/StatsCard';
import TaskList from '../components/TaskList';
import RecentActivity from '../components/RecentActivity';
import RightSidebar from '../components/Rightsidebar';
import Progress from '../components/Progress';
import Rightsidebar from '../components/Rightsidebar';
import ContinueLearningSection from '../components/ContinueLearningSection';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <Banner />
      <div>
        <ContinueLearningSection />
      </div>
      <div className="courses-container">
        
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div className="lower-section">
        <StatsCard />
        <Progress/>
        <TaskList />
      </div>
      <div className='right-sidebar'>
        <Rightsidebar/>
      </div>
      
    </div>
  );
}

export default Dashboard;



