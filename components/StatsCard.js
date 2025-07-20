import React from 'react';
import BarChart from './BarChart';

function StatsCard() {
  return (
    <div className="stats-card">
      <h4>Hours Spent</h4>
      <div><BarChart /></div>
    </div>
  );
}
export default StatsCard;