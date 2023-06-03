import { Container, Row, Col, Image, Card, Form } from "react-bootstrap";
import defaultProfile from "../image/profile.svg";
import { getCurrentUser } from "../service/MCRegisterService";
import { useState, useEffect } from "react";
export const MemberProfile = () => {
  return (
    <section>
      <Container>
        <Row className="py-5 justify-content-center">
          <Col xs={12} sm={10} md={8}>
            <Card className="p-3 shadow-lg" style={{ height: "200%%" }}>
              <Row>
                <Col xs={4} className="text-center">
                  <Image
                    src={
                      defaultProfile
                    }
                    roundedCircle
                    thumbnail
                    className="profile-image"
                  ></Image>
                  <h5>{}</h5>
                </Col>
                <Col xs={8}>
                  <h1 className="text-secondary">User Profile</h1>
                  <hr />
                  <Row className="py-2">
                    <Form.Label>Email:</Form.Label>
                    <h5>{}</h5>
                    <Col sm={6}>
                      <Form.Label>First Name: </Form.Label>
                      <h5>{}</h5>
                    </Col>
                    <Col sm={6}>
                      <Form.Label>Last Name: </Form.Label>
                      <h5>{}</h5>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MemberProfile;
