import React, { useState } from 'react';
import './Register.css'; // Import CSS for styling the form

const Register = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [salary, setSalary] = useState('');
  const [designation, setDesignation] = useState('employee');

  const handleRegister = async (e) => {
    e.preventDefault();

    // Handle registration logic (API call)
    const employeeData = {
      employeeId,
      firstName,
      lastName,
      phone,
      address,
      email,
      dob,
      joiningDate,
      salary,
      designation,
    };
    
    console.log(employeeData);
    // Add API call or registration logic here
  };

  return (
    <div className="register-container">
      <h2>Register New Employee</h2>
      <form onSubmit={handleRegister} className="register-form">
        <div className="form-group">
          <label>Employee ID:</label>
          <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Joining Date:</label>
          <input type="date" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Designation:</label>
          <select value={designation} onChange={(e) => setDesignation(e.target.value)} required>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
