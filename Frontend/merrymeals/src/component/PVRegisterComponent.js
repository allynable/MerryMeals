import React, { useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import "../css/MembersSignup.css";
import pvRegisterService from "../service/PVRegisterService";
import locationService from "../service/LocationService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegistrationForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [representingGroup, setRepresentingGroup] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [station, setStation] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setPasswordMatchError(false);
      const registrationData = {
        firstName,
        lastName,
        email,
        latitude,
        longitude,
        contactNumber,
        dob,
        password,
        representingGroup,
        groupName,
        station
      };

      pvRegisterService(registrationData)
        .then((response) => {
          toast.success(
            "Your application has been submitted! Our Staff will contact you shortly"
          );
        })
        .catch((error) => {
          toast.error(
            error.message || "Oops! Something went wrong. Please try again!"
          );
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
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8}>
          <Card className="shadow registration-card">
            <h1>Volunteer Application</h1>
            <br />
            <Form onSubmit={handleRegistration}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="contactNumber">
                <Form.Label>Contact Number:</Form.Label>
                <Form.Control
                  type="text"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="dob">
                <Form.Label>Date of Birth:</Form.Label>
                <br />
                <DatePicker
                  selected={dob}
                  onChange={(date) => setDob(date)}
                  dateFormat="yyyy/MM/dd"
                  required
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={checkPassword}
                  required
                />
                {passwordMatchError && (
                  <div className="password-match-error">
                    Passwords do not match
                  </div>
                )}
              </Form.Group>
              <Form.Group controlId="representingGroup">
                <Form.Check
                  type="checkbox"
                  checked={representingGroup}
                  onChange={(e) => setRepresentingGroup(e.target.checked)}
                  label="Representing a Group"
                />
              </Form.Group>
              {representingGroup && (
                <Form.Group controlId="groupName">
                  <Form.Label>Group Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    required
                  />
                </Form.Group>
              )}
              <Button variant="primary" type="submit" disabled={!passwordMatch}>
                Register
              </Button>
            </Form>
            <br />
            <div className="text-center">
              Already have an account? <Link to="/login">Login here</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
