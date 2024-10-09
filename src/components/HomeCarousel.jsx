import React from "react";
import { Carousel, Button, Row } from "react-bootstrap";
import './css/HomeCarousel.css';

const HomeCarousel = () => {
  return (
    <Row>
    <Carousel indicators={false} className="home-carousel">
      <Carousel.Item className="home-carousel-item" >
        <img
          className="home-carousel-image d-block w-100"
          src="/assets/eg-images/bloom-flowers-landscape.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="home-carousel-caption carousel-caption-centered">
          <h1><b>Premium Landscape Design & Transformation</b></h1>
          <p><i><b>Bringing your home's exterior to life.</b></i></p>
          <div className="home-button-wrapper d-flex justify-content-center">
            <Button variant="primary" size="lg" className="home-carousel-buttons">Learn More</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Row>
  );
};

export default HomeCarousel;
