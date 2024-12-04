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
				<HomeCarousel />
					<HomeBeforeAfter />
					<HomeServing />
			</Container>
		</>
	);
}
