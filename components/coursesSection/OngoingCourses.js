// import React from "react";
// import './ongoingCourses.css';
// import CourseCard from "../CourseCard";
// import left from '../../icons/left-arrow.png';
// import right from '../../icons/right-arrow.png';

// function OngoingCourses(){
//     return (
//         <div>
//             <div className="heading-flex">
//                 <h3>Ongoing Courses</h3>
//                 <div>
//                     <img src={left} className="searchI"></img>
//                     <img src={right} className="searchI"></img>
//                 </div>
//             </div>
//             <div className="C-wrapper">
//                 <CourseCard/>
//                 <CourseCard/>
//                 <CourseCard/>
//                 <CourseCard/>
//             </div>
//         </div>
//     );
// }
// export default OngoingCourses;


import React, { useRef } from "react";
import './ongoingCourses.css';
import CourseCard from "../CourseCard";
import left from '../../icons/left-arrow.png';
import right from '../../icons/right-arrow.png';

function OngoingCourses() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <div className="heading-flex">
        <h3>Ongoing Courses</h3>
        <div className="arrow-buttons">
          <img src={left} className="arrow-icon" onClick={() => scroll('left')} alt="left" />
          <img src={right} className="arrow-icon" onClick={() => scroll('right')} alt="right" />
        </div>
      </div>

      <div className="C-wrapper" ref={scrollRef}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default OngoingCourses;
