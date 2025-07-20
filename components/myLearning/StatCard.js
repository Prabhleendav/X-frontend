import React from 'react';
import './statCard.css';

const cards = [
  { label: 'Courses Completed', value: '02' },
  { label: 'Tasks Completed' , value: '02' },
  { label: 'Courses In Progress', value: '03' }
];

function StatCard() {
  return (
    <div className="stats-cards">
      {cards.map((card, i) => (
        <div key={i} className="stat-card">
          <p className="stat-label">{card.label}</p>
          <p className="stat-value">| <span>{card.value}</span></p>
        </div>
      ))}
    </div>
  );
}

export default StatCard;
