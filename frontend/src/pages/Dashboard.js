import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; // Import the Header component
import NavBar from '../components/NavBar'; // Import the NavBar component
import './Dashboard.css'; // Create a separate CSS file for Dashboard-specific styles if needed

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Example: Fetch user data and update state
    const fetchData = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUserData(data);  // Update the state with the fetched user data
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Include the Header component to have the logo and company name */}
      <Header />

      {/* Include the NavBar component for navigation */}
      <NavBar />

      {/* Main Content for the Dashboard Page */}
      <div className="dashboard-content">
        <h2>Dashboard</h2>
        {userData ? (
          <div>
            <p>Welcome, {userData.name}</p>
            {/* Render other user data */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
