import React, { useState } from 'react';
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../css/MembersSignup.css";
import { memberRegister } from "../service/MCRegisterService";
import locationService from "../service/LocationService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegistrationForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [representingGroup, setRepresentingGroup] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [station, setStation] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setPasswordMatchError(false);
      const registrationData = {
        firstName,
        lastName,
        email,
        contactNumber,
        dob,
        password,
        representingGroup,
        groupName
      };

      memberRegister(registrationData)
        .then((response) => {
          toast.success("Your application has been submitted! Our Staff will contact you shortly");
        })
        .catch((error) => {
          toast.error((error.message) || 'Oops! Something went wrong. Please try again!');
        });
    } else {
      setPasswordMatchError(true);
    }
  };

  const checkPassword = () => {
    if (password === confirmPassword) {
      setPasswordMatchError(false);
      setPasswordMatch(true);
    } else {
      setPasswordMatchError(true);
      setPasswordMatch(false);
    }
  };

  return (
    <Form onSubmit={handleRegistration}>
      <FormGroup>
        <Label for="firstName">First Name:</Label>
        <Input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name:</Label>
        <Input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address:</Label>
        <Input type="textarea" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone:</Label>
        <Input type="tel" id="phone" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="birthDate">Birth Date:</Label>
        <Input type="date" id="birthDate" value={dob} onChange={(e) => setDob(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password:</Label>
        <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="confirmPassword">Confirm Password:</Label>
        <Input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" id="representingGroup" checked={representingGroup} onChange={(e) => setRepresentingGroup(e.target.checked)} />{' '}
          Are you representing a group or club?
        </Label>
      </FormGroup>
      {representingGroup && (
        <FormGroup>
          <Label for="groupName">Group Name:</Label>
          <Input type="text" id="groupName" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
        </FormGroup>
      )}
      <FormGroup>
        <Label for="expertise">Areas of expertise/interest:</Label>
        <Input type="select" id="expertise" value={station} onChange={(e) => setStation(e.target.value)}>
          <option value="">Select expertise</option>
          <option value="Delivery">Driving/Delivery</option>
          <option value="Kitchen">Food Preparation/Kitchen Help</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Button type="submit" color="primary">Register</Button>
      </FormGroup>
    </Form>
  );
};

export default RegistrationForm;