import React from 'react';
import './recentActivity.css';

function RecentActivity() {
  const activities = [
    "Submission NLP Programming – 04 Jun, 08:20AM",
    "Outcome administration – 04 Jun, 10:20AM",
    "Teacher Panel Discussion – 10 Jun, 11:00AM",
    "Submission Data Structure – 04 Jun, 09:00AM",
    "Submission HCI Module 5 – 04 Jun, 13:00PM",
  ];

  return (
    <div className="recent-activity">
      <h4>Recent Activity</h4>
      <ul>
        {activities.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </div>
  );
}

export default RecentActivity;
