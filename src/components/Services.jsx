import React from "react";
import HeroBanner from "../components/HeroBanner";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./css/Services.css";

// Reusable ServiceCard component
const ServiceCard = ({ title, description, imageSrc, altText }) => (
	<Col md={4} className="mb-5">
		<Card className="services-card">
			<Card.Body>
				<Card.Title className="d-flex justify-content-center">
					<b className="card-title-txt fs-3">{title}</b>
				</Card.Title>
				<hr />
				<Card.Text className="card-pg-text">{description}</Card.Text>
			</Card.Body>
			<Card.Img src={imageSrc} alt={altText} className="services-card-img" />
			<Row className="d-flex justify-content-center py-4">
				<Button className="w-25 srv-contact-btn">Contact</Button>
			</Row>
		</Card>
	</Col>
);

export default function Services() {
	const services = [
		{
			title: "Gardening",
			description:
				"Our gardening services include planting, weeding, pruning, and mulching. We can help you design and maintain a beautiful garden that will thrive in West Michigan's unique climate.",
			imageSrc: "/assets/more-eg-photos/fresh-landscape-backyard2.jpg",
			altText: "Garden",
		},
		{
			title: "Maintenance",
			description:
				"We offer maintenance services to keep your garden looking its best. Our team can provide regular maintenance, such as mowing, trimming, and fertilizing, to ensure your garden stays healthy and vibrant.",
			imageSrc: "/assets/eg-images/maintenance1.jpg",
			altText: "Maintenance",
		},
		{
			title: "Landscapes",
			description:
				"Our landscaping services include design, installation, and maintenance. Whether you're looking to create a new outdoor living space or update your existing landscape, we can help you bring your vision to life.",
			imageSrc: "/assets/more-eg-photos/fresh-landscape-backyard.jpg",
			altText: "Landscaping",
		},
		{
			title: "Hardscapes",
			description:
				"We offer hardscaping services to enhance your outdoor space. From patios and walkways to retaining walls and fire pits, we can help you create a beautiful and functional outdoor living area.",
			imageSrc: "/assets/more-eg-photos/stone-path.jpg",
			altText: "Hardscaping",
		},
		{
			title: "Seasonal Services",
			description:
				"We provide seasonal cleanup services to prepare your garden for the changing seasons. Our team can help you clean up debris, trim plants, and prepare your garden for winter or spring.",
			imageSrc: "/assets/more-eg-photos/seasonal-placeholder.jpg",
			altText: "Seasonal Cleanup",
		},
		{
			title: "Chemical Applications",
			description:
				"Our certified staff can help with everything from pesky weeds to any unwanted organic matter that needs special care taken to remove. Let our pros step in and get the job done right.",
			imageSrc: "/assets/more-eg-photos/chem-app.jpg",
			altText: "Consultation",
		},
	];

	return (
		<>
			<HeroBanner
				title="Services"
				subtitle="Expert gardening, maintenance, and landscaping solutions for all your needs."
				backgroundImage="/assets/eg-images/flower-shovel.jpg"
				className="services-hero-banner"
			/>
			<Container fluid className="services-container">
				<Row className="services-header-row mb-5 pt-5">
					<Col md={12} className="d-flex justify-content-center">
						<h1 className="services-body-header">
							<b>Serving West Michigan for Over 15 Years</b>
						</h1>
					</Col>
				</Row>
				<Row className="services-card-row">
					{services.map((service, index) => (
						<ServiceCard
							key={index}
							title={service.title}
							description={service.description}
							imageSrc={service.imageSrc}
							altText={service.altText}
						/>
					))}
				</Row>
			</Container>
		</>
	);
}
