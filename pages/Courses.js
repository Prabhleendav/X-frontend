import React from "react";
import './courses.css';
import Header2 from '../components/Header2';
import CoursesSec from "../components/coursesSection/CoursesSec";
import OngoingCourses from "../components/coursesSection/OngoingCourses";

const Courses = () => {
  return (
    <div className="common-wrap">
      <Header2 />
      <div className="ongoing">
        <OngoingCourses />
      </div>
      <div className="courses-C">
        <CoursesSec/>
      </div>
    </div>
  );
};

export default Courses;