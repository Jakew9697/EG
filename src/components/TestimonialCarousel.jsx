import React from "react";
import { Carousel, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "./css/TestimonialCarousel.css";

export default function TestimonialCarousel({ testimonials }) {
	return (
		<Card className="testimonial-card mx-auto shadow rounded">
			<Card.Body>
				<Carousel
					className="testimonial-carousel"
					interval={7000}
					indicators={false}
					controls={false}
					slide={true}
				>
					{testimonials.map((testimonial, index) => (
						<Carousel.Item key={index} className="testimonial-slide">
							<div className="testimonial-content mx-auto">
								<h5 className="testimonial-title">{testimonial.title}</h5>
								<p className="testimonial-text">"{testimonial.text}"</p>
								<span className="testimonial-author">{testimonial.author}</span>
							</div>
						</Carousel.Item>
					))}
				</Carousel>
			</Card.Body>
		</Card>
	);
}

TestimonialCarousel.propTypes = {
	testimonials: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
		})
	).isRequired,
};
