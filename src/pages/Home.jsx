import React from "react";
import { Container } from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";
import HomeBeforeAfter from "../components/HomeBeforeAfter";
import HomeServing from "../components/HomeServing";
import "./css/Home.css";

export default function Home() {
	return (
		<>
			<Container fluid className="home-container">
				<Container fluid className="home-component-carousel-container">
				<HomeCarousel />
				</Container>
				<Container fluid className="home-component-before-after-container">
					<HomeBeforeAfter />
				</Container>
				<Container fluid className="home-component-serving-container">
					<HomeServing />
				</Container>
			</Container>
		</>
	);
}
