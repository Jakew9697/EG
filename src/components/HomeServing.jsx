import React from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import "./css/HomeServing.css";

export default function HomeServing() {
	return (
		<Container fluid>
			<Row className="serving-row mt-4">
				<Col className="mb-5">
					<Card className="serving-card">
						<Row className="g-0">
							{/* Column for the image on the left */}
							<Col md={8} className="pe-2">
								<Card.Img
									src="../../../assets/eg-images/cropped.jpg"
									className="home-serving-card-img"
								/>
							</Col>
							{/* Column for the card content on the right */}
							<Col md={4} className="home-serving-body-column ps-2">
								<Card.Body className="d-flex flex-column justify-content-between">
									<div>
										<Card.Title className="home-serving-card-title">
											Serving West Michigan for 14 years.
										</Card.Title>
										<hr />
										<Card.Text className="home-serving-card-text">
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
										className="home-serving-about-button d-flex align-items-end justify-content-start px-0">
										<Button className="serving-about-button" variant="primary" size="lg">
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
	);
}