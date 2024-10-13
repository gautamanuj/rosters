import React from 'react';
import Header from '../components/Header'; // Import the Header component
import NavBar from '../components/NavBar'; // Import the NavBar component
import './Home.css'; // Linked to the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* The Header Component (Logo at the top left) */}
      <Header />

      {/* Include the NavBar component */}
      <NavBar />

      {/* Main Content Area */}
      <div className="main-content">
        <h2>Welcome to ROSTERS EMS</h2>
        <p>This is the employee management system homepage. Use the navigation bar to explore the website.</p>
      </div>
    </div>
  );
};

export default Home;
