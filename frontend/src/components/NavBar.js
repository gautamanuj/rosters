import React from 'react';
import './NavBar.css'; // Import CSS for navigation bar styling
import { Link } from 'react-router-dom'; // Use React Router's Link for navigation

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li> {/* Separate Login link */}
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
