import './sidebar.css';
import dashboardIcon from '../icons/dashboard.svg';
import coursesIcon from '../icons/courses.svg';
import learningIcon from '../icons/learning.svg';
import assignmentsIcon from '../icons/assignment.svg';
import settingsIcon from '../icons/settings.svg';
import logoutIcon from '../icons/logout.svg';
import logo from "../assets/logo.png"
import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-section">
        <img src={logo} className="logo" alt="Logo" />
        <ul className="menu">
          <li className="head">OVERVIEW</li>

          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              <img src={dashboardIcon} alt="Dashboard" className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/courses" className={({ isActive }) => isActive ? 'active' : ''}>
              <img src={coursesIcon} alt="Courses" className="icon" />
              <span>Courses</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/learning" className={({ isActive }) => isActive ? 'active' : ''}>
              <img src={learningIcon} alt="My Learning" className="icon" />
              <span>My Learning</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/assignments" className={({ isActive }) => isActive ? 'active' : ''}>
              <img src={assignmentsIcon} alt="Assignments" className="icon" />
              <span>Assignments</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <ul className="menu settings-section">
        <li className="head">SETTINGS</li>

        <li>
          <NavLink to="/settings" className="settings">
            <img src={settingsIcon} alt="Settings" className="icon" />
            <span>Settings</span>
          </NavLink>
        </li>

        <li className="logout">
          <img src={logoutIcon} alt="Logout" className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;