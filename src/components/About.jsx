import React from "react";
import HeroBanner from "../components/HeroBanner";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import "./css/About.css";

export default function About() {
	// Sample testimonials data
	const testimonials = [
		{
			title: "Testimonials",
			text: "They've been servicing our garden for a few years now and we have been pleased with their professionalism and quality of work. They have also made nice suggestions that made our place look great! I would recommend Enchanted gardeners.",
			author: "- Rich Mason",
		},
		{
			title: "Testimonials",
			text: "Enchanted Gardener is....what can I say...enchanting! They take wonderful ideas and make them happen! They take the time to help you understand how to care for your planters and keep them beautiful. Can't wait for their fall ideas.",
			author: "- Suzy Cox",
		},
		{
			title: "Testimonials",
			text: "Scheduling was a breeze and the service was impeccable. Professional, prompt and neat - my yard looks amazing. I will use them again.",
			author: "- Nicole H",
		},
		{
			title: "Testimonials",
			text: "Such beautiful work and friendly gardeners! Enchanted Gardener took my patio planters from blah to WOW!!!",
			author: "- Martha Munch",
		},
		{
			title: "Testimonials",
			text: "We could not be happier with the landscape job these guys & gals did!! Dave, Portia & the entire team have been wonderful to work with. During the design process Portia really delivered a better than expected, low maintenance but not generic landscape layout. I’m so in love with a yard I once despised! 💜",
			author: "- Kelly Dugan",
		},
		{
			title: "Testimonials",
			text: "Friendly service and the mulch/landscaping turned out great. Thanks!",
			author: "- Ben Massie",
		},
	];

	return (
		<>
			<HeroBanner
				title="About Us"
				subtitle="We aim to blend nature's beauty with thoughtful design, offering our clients spaces that feel both functional and serene."
				backgroundImage="/assets/eg-images/flower-chair-eg-og.jpg"
				className="about-hero-banner"
			/>
			<Container fluid className="about-container">
				<Row className="about-intro-section align-items-center px-3 py-3 rounded shadow">
					<Col md={6} className="text-center py-4">
						<Carousel
							controls={false}
							indicators={false}
							className="about-carousel"
							fade>
							<Carousel.Item>
								<img
									src="/assets/more-eg-photos/after-backyard.jpg"
									alt="After"
									className="d-block w-100 rounded about-image"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									src="/assets/more-eg-photos/before-backyard.jpg"
									alt="Before"
									className="d-block w-100 rounded about-image"
								/>
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col
						md={6}
						className="d-flex flex-column align-items-start justify-content-center">
						<h2 className="about-heading d-flex justify-content-center">
							Transforming Spaces for 14 Years
						</h2>
						<p className="about-text mt-4">
							What began as a hobby has grown into a small business dedicated to
							providing personalized landscaping services in the Greater Grand
							Rapids Area for over 14 years. We focus on each client's
							individual needs to better serve them. We offer everything from
							landscape design and installation, to regular maintenance,
							seasonal containers, and chemical application. Our staff continue
							to grow with the green industry, staying on top of the latest
							trends to ensure our clients receive the best care for their
							cherished outdoor spaces. We know how important your gardens can
							be. They serve as a tranquil getaway or the space in which
							everyone gathers. We are dedicated to helping you create and
							maintain a unique space to call your own.
						</p>
						<Button className="mt-3 modern-button" variant="primary">
							Learn More
						</Button>
					</Col>
				</Row>

				{/* Third Section - Testimonials Carousel */}
				<Row className="about-testimonials-section pt-5 pb-4">
					<Col md={8} className="mx-auto">
						<TestimonialCarousel testimonials={testimonials} />
					</Col>
				</Row>
			</Container>
		</>
	);
}
