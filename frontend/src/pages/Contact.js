import React from 'react';
import Header from '../components/Header'; // Import the Header component
import NavBar from '../components/NavBar'; // Import the NavBar component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import './Contact.css'; // Create a separate CSS file for Contact-specific styles if needed

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Include the Header component to have the logo and company name */}
      <Header />

      {/* Include the NavBar component */}
      <NavBar />

      {/* Main Content for the Contact Page */}
      <div className="contact-content">
        <h2>Contact Us</h2>

        {/* Email with Icon */}
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="icon" /> Email: support@rosterems.com
        </p>

        {/* Phone with Icon */}
        <p>
          <FontAwesomeIcon icon={faPhone} className="icon" /> Phone: +1 234 567 890
        </p>

        {/* Address with Icon */}
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Address: 1234 Elm Street, City Name, Country
        </p>
      </div>
    </div>
  );
};

export default Contact;
