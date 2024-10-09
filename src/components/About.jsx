import React from "react";
import HeroBanner from "../components/HeroBanner";
import {Container, Row, Col, Card, Button} from "react-bootstrap";

export default function About() {
  return (
    <>
      <HeroBanner
        title="About Us"
        subtitle="Learn more about our passion for creating beautiful outdoor spaces."
        backgroundImage="path/to/about-background.jpg"
      />
      <Container fluid>
        <Row className="about-row mt-4">
          <Col className="mb-5">
            <Card className="about-card">
              <Row className="g-0">
                {/* Column for the image on the left */}
                <Col md={8} className="pe-2">
                  <Card.Img
                    src="https://via.placeholder.com/150"
                    className="about-card-img"
                  />
                </Col>
                {/* Column for the card content on the right */}
                <Col md={4} className="about-body-column ps-2">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title className="about-card-title">
                        Serving West Michigan for 14 years.
                      </Card.Title>
                      <hr />
                      <Card.Text className="about-card-text">
                        Enchanted Gardener began as a passionate hobby and has
                        since blossomed into a full-service landscaping company,
                        offering expert gardening, maintenance, hardscaping,
                        design, and installation services. Whether you need weekly
                        care like weeding or a complete landscape transformation,
                        our dedicated team is here to bring your outdoor vision to
                        life. With over 14 years of experience, we proudly serve
                        the community, turning ordinary spaces into extraordinary
                        landscapes.
                      </Card.Text>
                    </div>
                    {/* Using align-items-end for button placement */}
                    <Container
                      fluid
                      className="about-button d-flex align-items-end justify-content-start px-0">
                      <Button className="about-button" variant="primary" size="lg">
                        About Us
                      </Button>
                    </Container>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
