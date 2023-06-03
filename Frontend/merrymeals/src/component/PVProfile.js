import { Container, Row, Col, Image, Card, Form } from "react-bootstrap";
import defaultProfile from "../image/profile.svg";

const PVProfile = (props) => {
  // Check if currentUser and image_url exist
  const imageUrl = props.currentUser && props.currentUser.image_url ? props.currentUser.image_url : defaultProfile;

  return (
    <section>
      <Container>
        <Row className="py-5 justify-content-center">
          <Col xs={12} sm={10} md={8}>
            <Card className="p-3 shadow-lg" style={{ height: '200%' }}>
              <Row>
                <Col xs={4} className="text-center">
                  <Image src={imageUrl} roundedCircle thumbnail className="profile-image"></Image>
                  <h5>{props.currentUser && props.currentUser.firstName}</h5> {/* Display the firstName as the username */}
                </Col>
                <Col xs={8}>
                  <h1 className="text-secondary">User Profile</h1>
                  <hr />
                  <Row className="py-2">
                    <Form.Label>Email:</Form.Label>
                    <h5>{props.currentUser && props.currentUser.email}</h5>
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

export default PVProfile;
