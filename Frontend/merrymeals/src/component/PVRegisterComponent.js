import React, { useState } from 'react';
import '../css/PVRegisterComponent.css';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
<<<<<<< HEAD
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
=======
  const [contactNumber, setContactNumber] = useState('');
  const [dob, setDob] = useState('');
>>>>>>> oauth2
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [representingGroup, setRepresentingGroup] = useState(false);
  const [groupName, setGroupName] = useState('');
<<<<<<< HEAD
  const [expertise, setExpertise] = useState('');
=======
  const [station, setStation] = useState('');
>>>>>>> oauth2

  const handleRegistration = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleRegistration}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text-area" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
<<<<<<< HEAD
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="birthDate">Birth Date:</label>
        <input type="date" id="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
=======
        <input type="tel" id="phone" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="birthDate">Birth Date:</label>
        <input type="date" id="birthDate" value={dob} onChange={(e) => setDob(e.target.value)} required />
>>>>>>> oauth2
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
        <label htmlFor="representingGroup">Are you representing a group or club?</label>
        <input type="checkbox" id="representingGroup" checked={representingGroup} onChange={(e) => setRepresentingGroup(e.target.checked)} />
      </div>
      {representingGroup && (
        <div>
          <label htmlFor="groupName">Group Name:</label>
          <input type="text" id="groupName" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
        </div>
      )}
      <div>
        <label htmlFor="expertise">Areas of expertise/interest:</label>
<<<<<<< HEAD
        <select id="expertise" value={expertise} onChange={(e) => setExpertise(e.target.value)}>
          <option value="">Select expertise</option>
          <option value="driving">Driving/Delivery</option>
          <option value="cooking">Cooking/Kitchen Help</option>
=======
        <select id="expertise" value={station} onChange={(e) => setStation(e.target.value)}>
          <option value="">Select expertise</option>
          <option value="Delivery">Driving/Delivery</option>
          <option value="Kitchen">Food Preparation/Kitchen Help</option>
>>>>>>> oauth2
        </select>
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
