import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Quote from "./Quote";
import "./css/Navbar.css";

export default function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showQuote, setShowQuote] = useState(false); 

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const closeNavbar = () => {
    setIsExpanded(false);
  };

  const handleShowQuote = () => {
    setShowQuote(true);
    closeNavbar();
  };

  const handleCloseQuote = () => {
    setShowQuote(false);
  };

  return (
    <>
      <Navbar className="navigator" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="me-auto" onClick={closeNavbar}>
            <img
              src="/assets/logo.webp"
              alt="Enchanted Gardener Logo"
              className="logo-image d-inline-block align-top"
            />
          </Navbar.Brand>
          <div
            className={`navbar__toggle ${isExpanded ? "is-active" : ""}`}
            id="mobile-menu"
            onClick={handleToggle}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div
            className={`navbar-collapse eg-navbar-collapse ${isExpanded ? "active" : ""}`}
          >
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="nav-option" onClick={closeNavbar}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-option" onClick={closeNavbar}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery" className="nav-option" onClick={closeNavbar}>
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-option" onClick={closeNavbar}>
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Button
                variant="primary"
                size="lg"
                className="nav-quote"
                onClick={handleShowQuote} // Trigger the Offcanvas display
              >
                Request a Quote
              </Button>
            </Nav>
          </div>
        </Container>
      </Navbar>

      {/* Offcanvas component for the Quote form */}
      <Quote show={showQuote} handleClose={handleCloseQuote} />
    </>
  );
}
