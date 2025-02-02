import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMusic, FaInfoCircle } from 'react-icons/fa'; // Import icons from react-icons
import './NavBar.css'; // Import the CSS for the Navbar

function NavBar() {
  return (
    <>
      {/* Navbar for larger screens */}
      <div className="navbar-top">
        <ul className="navbar-links-top">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li>
            <Link to="/songs" className="navbar-link">Songs</Link>
          </li>
        </ul>
      </div>

      {/* Navbar for smaller screens */}
      <div className="navbar-bottom">
        <ul className="navbar-links-bottom">
          <li>
            <Link to="/" className="navbar-link">
              <FaHome size={24} /> {/* Home Icon */}
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">
              <FaInfoCircle size={24} /> {/* About Icon */}
            </Link>
          </li>
          <li>
            <Link to="/songs" className="navbar-link">
              <FaMusic size={24} /> {/* Songs Icon */}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
