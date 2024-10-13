import React from 'react';
import { Link } from 'react-router-dom'; // For navigation to home
import logo from '../images/logo.jpg'; // Adjust the path based on your folder structure
import './Header.css'; // CSS for the header

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Company Logo" className="logo" />
      <Link to="/" className="company-name">
        ROSTERS EMS
      </Link>
    </header>
  );
};

export default Header;
