import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/HeroBanner.css";

export default function HeroBanner({ title, subtitle, backgroundImage }) {
  return (
    <div
      className="hero-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container>
        <Row className="align-items-center justify-content-center text-center hero-banner-content">
          <Col xs={12} md={10} lg={8}>
            <h1 className="hero-banner-title">{title}</h1>
            {subtitle && <p className="hero-banner-subtitle">{subtitle}</p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
