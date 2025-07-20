import React from 'react';
import './header2.css';
import search from '../icons/search.png';
import bell from '../icons/bell.svg';
import settings from '../icons/settings.svg';
import profile from '../assets/profile.png';

const Header2 = () => {
  return (
    <div className="headerNew-container">
      <div className="headerNew-left">
        <h2>Hello Learner 👋</h2>
        <p>Let’s learn something new today!</p>
      </div>

      <div className="headerNew-center">
        <div className="headerNew-searchbox">
          <input type="text" placeholder="Search from courses..." />
          <img src={search} alt="search" className="headerNew-search-icon" />
        </div>
      </div>

      <div className="headerNew-right">
        <img src={bell} alt="bell" className="headerNew-icon" />
        <img src={settings} alt="settings" className="headerNew-icon" />
        <img src={profile} alt="profile" className="headerNew-profile" />
      </div>
    </div>
  );
};

export default Header2;
