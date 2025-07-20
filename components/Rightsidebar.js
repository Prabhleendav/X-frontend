import React from 'react';
import './rightsidebar.css';
import user from '../assets/profile.png';
import bell from '../icons/bell.svg';
import envelope from '../icons/envelope.svg';

function Rightsidebar() {
  return (
    <div className="right-sidebar">
      <div className="profile-section">
        <img src={user} alt="user" className="avatar" />
        <h4>Good Morning Prashant</h4>
        <p>Continue Your Journey And Achieve Your Target</p>
      </div>

      <div className="icons">
        <img src={bell} className="icon" alt="bell" />
        <img src={envelope} className="icon" alt="envelope" />
      </div>

      <div className="calendar">
        <div className="calendar-box">
          <p>
            June 2025
          </p>
          <div className="calendar-grid">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            <span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h4>Recent Activity</h4>
        <ul>
          <li>
            <span className="activity-icon">
              {/* Submission icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M3 4v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-6-6H5c-1.1 0-2 .9-2 2zm13 12H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>

            </span>
            Submission NLP Programming – 04 Jun, 08:20AM
          </li>
          <li>
            <span className="activity-icon">
              {/* Event icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M3 4v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-6-6H5c-1.1 0-2 .9-2 2zm13 12H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>

            </span>
            Outcome administration – 04 Jun, 10:20AM
          </li>
          <li>
            <span className="activity-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M3 4v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-6-6H5c-1.1 0-2 .9-2 2zm13 12H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>

            </span>
            Teacher Panel Discussion – 10 Jun, 11:00AM
          </li>
          <li>
            <span className="activity-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M3 4v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-6-6H5c-1.1 0-2 .9-2 2zm13 12H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>

            </span>
            Submission Data Structure – 04 Jun, 09:00AM
          </li>
          <li>
            <span className="activity-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M3 4v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-6-6H5c-1.1 0-2 .9-2 2zm13 12H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>

            </span>
            Submission HCI Module 5 – 04 Jun, 13:00PM
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightsidebar;

