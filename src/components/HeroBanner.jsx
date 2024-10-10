import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/HeroBanner.css";

export default function HeroBanner({ title, subtitle, backgroundImage, className }) {
  return (
    <div
      className={`hero-banner d-flex justify-content-center align-items-center ${className}`} // Combine base class with additional class
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container fluid>
        <Row className="justify-content-center text-center hero-banner-content">
          <Col xs={12} md={10} lg={8}>
            <h1 className="hero-banner-title d-flex justify-content-center">{title}</h1>
            {subtitle && <p className="hero-banner-subtitle">{subtitle}</p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
