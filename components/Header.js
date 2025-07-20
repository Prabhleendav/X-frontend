import React from 'react';
import './header.css';
import search from'../icons/search.png';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h2>Hello Learner 👋</h2>
        <p>Let’s learn something new today!</p>
      </div>
      <div className="header-right">
        <img src={search} alt="Search Icon" className="search-icon" />
        <input type="text" placeholder="Search from courses..." />
      </div>
    </div>
  );
}

export default Header;