import React from 'react';
import './taskList.css';

function TaskList() {
  const tasks = [
    { text: "Human Interaction Designs", date: "Tuesday, 3 April 2025", done: false },
    { text: "Design system Basics", date: "Monday, 24 April 2025", done: false },
    { text: "Introduction to UI", date: "Friday, 10 March 2025", done: true },
    { text: "Basics of Figma", date: "Friday, 05 March 2025", done: true },
  ];

  return (
    <div className="task-list-card">
      <h4 className="task-heading">Task List</h4>
      <ul className="task-ul">
        {tasks.map((task, i) => (
          <li className="task-item" key={i}>
            <div className={`checkbox ${task.done ? 'checked' : ''}`} />
            <div className="task-content">
              <span className={`task-title ${task.done ? 'done-text' : ''}`}>{task.text}</span>
              <span className="task-date">{task.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
