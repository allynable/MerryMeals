import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import "../css/MembersSignup.css";
const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [condition, setCondition] = useState("");
  const [allergies, setAllergies] = useState("");
  const [caregiverName, setCaregiverName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [caregiverContact, setCaregiverContact] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

    return (
      <div id="form" className='container'>  
        <form onSubmit={handleRegistration}>
          <h1>Member Registration</h1>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text-area" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="contact">Phone:</label>
            <input type="tel" id="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="dob">Birth Date:</label>
            <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="condition">Recent Illness or Accident</label>
            <input type="text" id="condition" value={condition} onChange={(e) => setCondition(e.target.checked)} required/>
          </div>
          <div>
            <label htmlFor="allergies">Food Allergies</label>
            <input type="text" id="allergies" value={allergies} onChange={(e) => setAllergies(e.target.checked)} />
          </div>
          <div>
            <label htmlFor="caregiverName">Caregiver's Name</label>
            <input type="text" id="caregiverName" value={caregiverName} onChange={(e) => setCaregiverName(e.target.checked)} />
          </div>
          <div>
            <label htmlFor="relationship">Relation</label>
            <input type="text" id="relationship" value={relationship} onChange={(e) => setRelationship(e.target.checked)} />
          </div>
          <div>
            <label htmlFor="caregiverContact">Relation</label>
            <input type="tel" id="caregiverContact" value={caregiverContact} onChange={(e) => setCaregiverContact(e.target.checked)} />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
          <span>Already have an account? <Link to="/Login">Login here</Link>.</span>
        </form>
      </div>  
      );
    };
    
    export default RegistrationForm;
    