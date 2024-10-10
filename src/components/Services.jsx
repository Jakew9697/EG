import React from "react";
import HeroBanner from "../components/HeroBanner";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./css/Services.css";

export default function Services() {
	return (
		<>
			<HeroBanner
				title="Our Services"
				subtitle="Expert gardening, maintenance, and landscaping solutions for all your needs."
				backgroundImage="/assets/eg-images/flower-shovel.jpg"
				className="services-hero-banner"
			/>
			<Container fluid>
				<Row className="services-row mt-4">
					<Col className="mb-5">
						<Card className="services-card">
							<Row className="g-0">
								{/* Column for the image on the left */}
								<Col md={8} className="pe-2">
									<Card.Img
										src="/assets/eg-images/cropped.jpg"
										className="services-card-img"
									/>
								</Col>
								{/* Column for the card content on the right */}
								<Col md={4} className="services-body-column ps-2">
									<Card.Body className="d-flex flex-column justify-content-between">
										<div>
											<Card.Title className="services-card-title">
												Expert Gardening and Landscaping Services
											</Card.Title>
											<hr />
											<Card.Text className="services-card-text">
												Enchanted Gardener offers a wide range of expert
												gardening, maintenance, hardscaping, design, and
												installation services. Whether you need weekly care like
												weeding or a complete landscape transformation, our
												dedicated team is here to bring your outdoor vision to
												life. With over 14 years of experience, we proudly serve
												the community, turning ordinary spaces into
												extraordinary landscapes.
											</Card.Text>
										</div>
										{/* Using align-items-end for button placement */}
										<Container
											fluid
											className="services-button d-flex align-items-end justify-content-start px-0">
											<Button
												className="services-button"
												variant="primary"
												size="lg">
												View Services
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
