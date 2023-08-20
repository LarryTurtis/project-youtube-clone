import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './HomeNavBar.css';

function HomeNavBar() {
  const handleLogoClick = () => {
    // Do something on logo click
  };

  const handleHomeClick = () => {
    // Do something on home click
  };

  const handleAboutClick = () => {
    // Do something on about click
  };

  return (
    <header>
      <nav className='navBar'>
        <div className="nav-links">
          <div className="nav-link">
            <a href="/" onClick={handleLogoClick}>
              YouTube
            </a>
          </div>
          <div className="nav-link">
            <a href="/" onClick={handleHomeClick}>
              Home
            </a>
          </div>
          <div className="nav-link">
            <a href="/" onClick={handleAboutClick}>
              About
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HomeNavBar;
