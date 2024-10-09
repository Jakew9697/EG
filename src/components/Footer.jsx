import React from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhoneAlt,
	faEnvelope,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
	faInstagram,
	faFacebook,
	faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import "./css/Footer.css";

export default function Footer() {
	return (
		<footer className="footer">
			<Container fluid className="text-light">
				<Row className="align-items-center">
					{/* Left Column */}
					<Col md={5} className="d-flex justify-content-end">
						<Navbar variant="dark" className="p-0">
							<Nav className="flex-column text-center">
								<Navbar.Text href="#home" className="text-light fs-1">
									Connect
								</Navbar.Text>
								<Navbar.Text href="#services" className="text-light">
									<FontAwesomeIcon icon={faFacebook} size="2x" />
								</Navbar.Text>
								<Navbar.Text href="#gallery" className="text-light">
									<FontAwesomeIcon icon={faInstagram} size="2x" />
								</Navbar.Text>
								<Navbar.Text href="#about" className="text-light">
									<FontAwesomeIcon icon={faPinterest} size="2x" />
								</Navbar.Text>
							</Nav>
						</Navbar>
					</Col>

					{/* Vertical Line */}
					<Col
						md={2}
						className="d-flex justify-content-center align-items-center">
						<div className="vertical-line mt-4"></div>
					</Col>

					{/* Right Column */}
					<Col md={5} className="d-flex justify-content-start">
						<Nav className="flex-column text-center">
							<Navbar.Text className="text-light text-md-right fs-1">
								Contact
							</Navbar.Text>
							<Navbar.Text>
								<FontAwesomeIcon icon={faPhoneAlt} size="2x" /> 123-456-7890
							</Navbar.Text>
							<Navbar.Text>
								<FontAwesomeIcon icon={faEnvelope} size="2x" />{" "}
								Enchantedgardener@gmail.com
							</Navbar.Text>
							<Navbar.Text>
								<FontAwesomeIcon icon={faLocationDot} size="2x" />{" "}
								<span>9430 Vergennes St SE, Ada, MI 49301 </span>
							</Navbar.Text>
						</Nav>
					</Col>
				</Row>

				{/* Centered Copyright Text Row */}
				<Row>
					<Col
						md={12}
						className="d-flex justify-content-center align-items-center">
						<Navbar.Text className="text-light text-md-right fs-6">
							© 2024 Enchanted Gardener. All rights reserved.
						</Navbar.Text>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
