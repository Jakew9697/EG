import React from "react";
import HeroBanner from "../components/HeroBanner";
import {Container, Row, Col, Card, Button} from "react-bootstrap";

export default function Gallery() {
  return (
    <>
      <HeroBanner
        title="Our Gallery"
        subtitle="Explore our beautiful landscaping projects and transformations."
        backgroundImage="path/to/gallery-background.jpg"
      />
      <Container fluid>
        <Row className="gallery-row mt-4">
          <Col className="mb-5">
            <Card className="gallery-card">
              <Row className="g-0">
                {/* Column for the image on the left */}
                <Col md={8} className="pe-2">
                  <Card.Img
                    src="https://via.placeholder.com/150"
                    className="gallery-card-img"
                  />
                </Col>
                {/* Column for the card content on the right */}
                <Col md={4} className="gallery-body-column ps-2">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title className="gallery-card-title">
                        Beautiful Garden Transformation
                      </Card.Title>
                      <hr />
                      <Card.Text className="gallery-card-text">
                        Our team transformed this overgrown backyard into a
                        beautiful garden oasis. We installed new plants, a
                        custom-designed patio, and a water feature to create a
                        peaceful retreat for the homeowners. Explore the gallery
                        to see more of our stunning transformations.
                      </Card.Text>
                    </div>
                    {/* Using align-items-end for button placement */}
                    <Container
                      fluid
                      className="gallery-button d-flex align-items-end justify-content-start px-0">
                      <Button className="gallery-button" variant="primary" size="lg">
                        View Gallery
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
