import React from 'react';
import './assignment.css';
import AssignmentTable from '../components/AssignmnetTable';
import Header2 from '../components/Header2';
import ALowerSection from '../components/ALowerSection';

function Assignment() {
  return (
    <div className="common-page">
      <Header2 />
      <AssignmentTable />
      <ALowerSection />
    </div>
  );
}

export default Assignment;
