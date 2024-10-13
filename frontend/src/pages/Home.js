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
        <p>Rosters Employee Management System is a cutting-edge, web-based platform specifically designed and developed by students to address the dynamic needs of modern organizations—whether in 
          government or private sectors. Our system offers an intuitive interface that simplifies employee management processes such as attendance tracking, employee registration, and performance
           management. Tailored to meet the demands of today’s fast-paced work environments, Rosters EMS ensures seamless communication, efficient task delegation, and real-time access to employee
            data, empowering managers and employees alike. By leveraging modern web technologies, this platform is designed with flexibility, scalability, and security in mind, ensuring it meets the diverse needs of businesses and organizations that require a reliable, all-in-one employee management solution..</p>
      </div>
    </div>
  );
};

export default Home;
