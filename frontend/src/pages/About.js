import React from 'react';
import Header from '../components/Header'; // Reuse the Header component for logo and company name
import NavBar from '../components/NavBar'; // Import the NavBar component for consistent navigation
import './About.css'; // Import custom CSS for About page styling

const About = () => {
  return (
    <div className="about-container">
      {/* Include the Header component to display logo and company name */}
      <Header />

      {/* Include the NavBar component for navigation */}
      <NavBar />

      {/* Main Content for About Us */}
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>ROSTERS EMS</strong>, your go-to employee management system. At ROSTERS EMS, we provide
          comprehensive tools to help managers efficiently manage their teams, track performance, and streamline
          organizational processes.
        </p>

        <p>
          Our mission is to empower businesses to focus on what truly matters — their people. By simplifying workforce
          management, ROSTERS EMS helps managers improve productivity, employee satisfaction, and overall team
          collaboration.
        </p>

        <p>
          We are committed to continuous innovation and growth. Our ambition is to create the most user-friendly
          platform that not only helps managers but also engages employees by providing them with self-service options
          and transparency over their schedules, tasks, and performance.
        </p>

        <h3>Our Vision</h3>
        <p>
          Our vision is to become a leader in employee management systems by empowering organizations to achieve their
          full potential. We aim to revolutionize the way companies handle their workforce, by embracing modern
          technologies and delivering an all-in-one platform that is scalable, reliable, and easy to use.
        </p>
      </div>
    </div>
  );
};

export default About;
