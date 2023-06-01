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
    <Container>
      <Row className="justify-content-center">
        <Col  xs={12} sm={10} md={8}>
          <Card className="shadow registration-card">
            <Card.Body>
              <h1>Member Registration</h1>
              <br />
              <Form onSubmit={handleRegistration}>
                <Row>
                  <Col>
                    <Form.Group controlId="firstName">
                      <Form.Control
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder="First Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="lastName">
                      <Form.Control
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        placeholder="Last Name"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <br />
                <Row>
                <Form.Group controlId="address">
                  <Form.Control
                    as="textarea"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    placeholder="Enter Address"
                  />
                </Form.Group>
                </Row>
                <Row>
                  <Col>
                  <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                  />
                </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group controlId="contactNumber">
                  <Form.Control
                    type="tel"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                  />
                </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="dob">
                  <Form.Label>Birth Date:</Form.Label>
                  <Form.Control
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
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
                    required
                  />
                </Form.Group>

                <Form.Group controlId="condition">
                  <Form.Label>Recent Illness or Accident:</Form.Label>
                  <Form.Control
                    type="text"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="allergies">
                  <Form.Label>Food Allergies:</Form.Label>
                  <Form.Control
                    type="text"
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="caregiverName">
                  <Form.Label>Caregiver's Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={caregiverName}
                    onChange={(e) => setCaregiverName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="relationship">
                  <Form.Label>Relation:</Form.Label>
                  <Form.Control
                    type="text"
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="caregiverContact">
                  <Form.Label>Caregiver's Contact:</Form.Label>
                  <Form.Control
                    type="tel"
                    value={caregiverContact}
                    onChange={(e) => setCaregiverContact(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                  Register
                </Button>
                <br />
                <Form.Text>
                  Already have an account? <Link to="/Login">Login here</Link>.
                </Form.Text>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
