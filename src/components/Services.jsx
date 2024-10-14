import React from "react";
import HeroBanner from "../components/HeroBanner";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
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
			<Container fluid className="services-container">
				<Row className="services-header-row my-5">
					<Col md={12} className="d-flex justify-content-center">
						<h2>Serving West Michigan for Over 15 Years</h2>
					</Col>
				</Row>
				<Row className="services-card-row my-5">
					<Col md={4} className="mb-5">
						<Card className="services-card">
							<Card.Img
								variant="top"
								src="/assets/eg-images/pool-garden.jpg"
								alt="Garden"
							/>
							<Card.Body>
								<Card.Title className="d-flex justify-content-center">
									Gardening
								</Card.Title>
								<Card.Text>
									Our gardening services include planting, weeding, pruning, and
									mulching. We can help you design and maintain a beautiful
									garden that will thrive in West Michigan's unique climate.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} className="mb-5">
						<Card className="services-card">
							<Card.Img
								variant="top"
								src="/assets/more-eg-photos/old-truck.jpg"
								alt="Maintenance"
							/>
							<Card.Body>
								<Card.Title className="d-flex justify-content-center">
									Maintenance
								</Card.Title>
								<Card.Text>
									We offer maintenance services to keep your garden looking its
									best. Our team can provide regular maintenance, such as
									mowing, trimming, and fertilizing, to ensure your garden stays
									healthy and vibrant.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} className="mb-5">
						<Card className="services-card">
							<Card.Img
								variant="top"
								src="/assets/eg-images/backyard-eg-og.jpg"
								alt="Landscaping"
							/>
							<Card.Body>
								<Card.Title className="d-flex justify-content-center">
									Landscapes
								</Card.Title>
								<Card.Text>
									Our landscaping services include design, installation, and
									maintenance. Whether you're looking to create a new outdoor
									living space or update your existing landscape, we can help
									you bring your vision to life.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					<Col md={4} className="mb-5">
						<Card className="services-card">
							<Card.Img
								variant="top"
								src="/assets/eg-images/hardscaping-1.jpg"
								alt="Hardscaping"
							/>
							<Card.Body>
								<Card.Title className="d-flex justify-content-center">
									Hardscapes
								</Card.Title>
								<Card.Text>
									We offer h ardscaping services to enhance your outdoor space.
									From patios and walkways to retaining walls and fire pits, we
									can help you create a beautiful and functional outdoor living
									area.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} className="mb-5">
						<Card className="services-card">
							<Card.Img
								variant="top"
								src="/assets/eg-images/seasonal-cleanup-1.jpg"
								alt="Seasonal Cleanup"
							/>
							<Card.Body>
								<Card.Title className="d-flex justify-content-center">
									Seasonal Services
								</Card.Title>
								<Card.Text>
									We provide seasonal cleanup services to prepare your garden
									for the changing seasons. Our team can help you clean up
									debris, trim plants, and prepare your garden for winter or
									spring.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} className="mb-5">
						<Card className="services-card">
							<Card.Img
								variant="top"
								src="/assets/eg-images/consultation-1.jpg"
								alt="Consultation"
							/>
							<Card.Body>
								<Card.Title className="d-flex justify-content-center">
									Chemical Applications
								</Card.Title>
								<Card.Text>
									Our certified staff can help with everything from pesky weeds
									to any unwanted organic matter that needs special care taken
									to remove. Let our pros step in and get the job done right.
									Licensed and knowledgeable, our staff can guide you in a
									step-by-step process to control the unwanted organic matter.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}
