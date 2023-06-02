import { useState } from "react";
import { Modal, Container, Form, Button, Row, Col } from "react-bootstrap";


const MemberForm = (props) => {
  const [memberData, setMemberData] = useState({
    memberId: props.memberData ? props.memberData.memberId : null,
    firstName: props.memberData ? props.memberData.firstName : null,
    lastName: props.memberData ? props.memberData.lastName : null,
    latitude: props.memberData ? props.memberData.latitude : null,
    longitude: props.memberData ? props.memberData.longitude : null,
    contactNumber: props.memberData ? props.memberData.contactNumber : null,
    dob: props.memberData ? props.memberData.dob : null,
    condition: props.memberData ? props.memberData.condition: null,
    allergies: props.memberData ? props.memberData.allergies : null,
    caregiverName: props.memberData ? props.memberData.caregiverName : null,
    relationship: props.memberData ? props.memberData.relationship : null,
    caregiverContact: props.memberData ? props.memberData.caregiverContact : null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMemberData({ ...memberData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
      props.onSubmit(memberData);
      props.setShow(false);
  };

  const validateForm = () => {
    let errors = {};
    if (!memberData.firstName) {
      errors.firstName = "Please provide the member's first name.";
    }
    if (!memberData.lastName) {
        errors.lastName = "Please provide the member's last name.";
    }
    if (!memberData.latitude) {
        errors.latitude = "Please provide the member's address.";
    }
    if (!memberData.longitude) {
        errors.longitude = "Please provide the member's address.";
    }
    if (!memberData.contactNumber) {
        errors.contactNumber = "Please provide the member's contact number.";
    }
    if (!memberData.dob) {
        errors.dob = "Please provide the member's date of birth.";
    }
    if (!memberData.condition) {
        errors.condition = "Please provide the member's condition.";
    }
    if (!memberData.allergies) {
        errors.allergies = "Please provide the member's allergies.";
    }
    if (!memberData.caregiverName) {
        errors.caregiverName = "Please provide the member's caregiver name.";
    }
    if (!memberData.relationship) {
        errors.relationship = "Please provide the member's relationship with his/her caregiver.";
    }
    if (!memberData.caregiverContact) {
        errors.caregiverContact = "Please provide the member's caregiver contact.";
    }
    return errors;
  };

  const handleClose = () => {
    props.setShow(false);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {memberData.memberId ? ("Update Member") : ("Add New Member")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={memberData.firstName}
                onChange={handleInputChange}
                required
                isInvalid={errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={memberData.lastName}
                onChange={handleInputChange}
                required
                isInvalid={errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Latitude:</Form.Label>
              <Form.Control
                type="number"
                name="latitude"
                value={memberData.latitude}
                onChange={handleInputChange}
                required
                isInvalid={errors.latitude}
              />
              <Form.Control.Feedback type="invalid">
                {errors.latitude}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Longitude:</Form.Label>
              <Form.Control
                type="number"
                name="longitude"
                value={memberData.longitude}
                onChange={handleInputChange}
                required
                isInvalid={errors.longitude}
              />
              <Form.Control.Feedback type="invalid">
                {errors.longitude}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact Number:</Form.Label>
              <Form.Control
                type="number"
                name="contactNumber"
                value={memberData.contactNumber}
                onChange={handleInputChange}
                required
                isInvalid={errors.contactNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.contactNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Date Of Birth:</Form.Label>
              <Form.Control
                type="text"
                name="dob"
                value={memberData.dob}
                onChange={handleInputChange}
                required
                isInvalid={errors.dob}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dob}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Condition:</Form.Label>
              <Form.Control
                type="text"
                name="condition"
                value={memberData.condition}
                onChange={handleInputChange}
                required
                isInvalid={errors.condition}
              />
              <Form.Control.Feedback type="invalid">
                {errors.condition}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Allergies:</Form.Label>
              <Form.Control
                type="text"
                name="allergies"
                value={memberData.allergies}
                onChange={handleInputChange}              
                isInvalid={errors.allergies}
              />
              <Form.Control.Feedback type="invalid">
                {errors.allergies}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Caregiver Name:</Form.Label>
              <Form.Control
                type="text"
                name="caregiverName"
                value={memberData.caregiverName}
                onChange={handleInputChange}
                isInvalid={errors.caregiverName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.caregiverName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Relationship:</Form.Label>
              <Form.Control
                type="text"
                name="relationship"
                value={memberData.relationship}
                onChange={handleInputChange}
                isInvalid={errors.relationship}
              />
              <Form.Control.Feedback type="invalid">
                {errors.relationship}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Caregiver Contact:</Form.Label>
              <Form.Control
                type="number"
                name="caregiverContact"
                value={memberData.caregiverContact}
                onChange={handleInputChange}
                isInvalid={errors.caregiverContact}
              />
              <Form.Control.Feedback type="invalid">
                {errors.caregiverContact}
              </Form.Control.Feedback>
            </Form.Group>
            
            <div className="text-center">
              <Row className="text-center">
                <Col className="mt-3">
                  <Button
                    type="submit"
                    className={`mx-2 btn ${
                      memberData.memberId ? "btn-primary" : "btn-success"
                    }`}
                  >
                    {memberData.memberId ? "Update" : "Submit"}
                  </Button>
                  <Button onClick={handleClose} className="btn btn-danger mx-2">
                    Cancel
                  </Button>
                </Col>
              </Row>
            </div>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default MemberForm;
