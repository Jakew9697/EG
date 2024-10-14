import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import "./css/Gallery.css";

export default function Gallery() {
	// State to handle modal visibility and current image
	const [showModal, setShowModal] = useState(false);
	const [currentImage, setCurrentImage] = useState("");

	// Function to handle opening the modal with the clicked image
	const handleImageClick = (imgSrc) => {
		setCurrentImage(imgSrc);
		setShowModal(true);
	};

	// Function to close the modal
	const handleCloseModal = () => setShowModal(false);

	return (
		<>
			<HeroBanner
				title="Our Gallery"
				subtitle="Explore our beautiful landscaping projects and transformations."
				backgroundImage="/assets/eg-images/yard-bench-eg-og.jpg"
				className="gallery-hero-banner"
			/>
			<Container fluid className="gallery-container px-5">
				{/* First Row of Images */}
				<Row className="gallery-row">
					<Col md={5} className="my-3">
						<Image
							src="/assets/more-eg-photos/fresh-landscape-backyard.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/fresh-landscape-backyard.jpg")}
						/>
					</Col>
					<Col md={3} className="my-3">
						<Image
							src="/assets/more-eg-photos/stone-path.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/stone-path.jpg")}
						/>
					</Col>
					<Col md={4} className="my-3">
						<Image
							src="/assets/eg-images/Final ex1.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/eg-images/Final ex1.jpg")}
						/>
					</Col>
				</Row>
				{/* Second Row of Images */}
				<Row>
					<Col md={3} className="my-3">
						<Image
							src="/assets/more-eg-photos/front-door2.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/front-door2.jpg")}
						/>
					</Col>
					<Col md={7} className="my-3">
						<Image
							src="/assets/more-eg-photos/after-backyard.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/after-backyard.jpg")}
						/>
					</Col>
					<Col md={2} className="my-3">
						<Image
							src="/assets/more-eg-photos/pot-on-stone.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/pot-on-stone.jpg")}
						/>
					</Col>
				</Row>
				{/* Third Row of Images */}
				<Row className="gallery-row">
					<Col md={4} className="my-3">
						<Image
							src="/assets/more-eg-photos/curved-wall-plants.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/curved-wall-plants.jpg")}
						/>
					</Col>
					<Col md={4} className="my-3">
						<Image
							src="/assets/more-eg-photos/fresh-landscape-backyard2.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/fresh-landscape-backyard2.jpg")}
						/>
					</Col>
					<Col md={4} className="my-3">
						<Image
							src="/assets/more-eg-photos/stone-wall-plants.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/stone-wall-plants.jpg")}
						/>
					</Col>
				</Row>
				{/* Fourth Row */}
				<Row className="gallery-row">
					<Col md={5} className="my-3">
						<Image
							src="/assets/more-eg-photos/indoor-planter.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/indoor-planter.jpg")}
						/>
					</Col>
					<Col md={3} className="my-3">
						<Image
							src="/assets/more-eg-photos/patio.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/patio.jpg")}
						/>
					</Col>
					<Col md={4} className="my-3">
						<Image
							src="/assets/more-eg-photos/float-pot.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/float-pot.jpg")}
						/>
					</Col>
				</Row>
				{/* Fifth Row */}
				<Row className="gallery-row">
					<Col md={3} className="my-3">
						<Image
							src="/assets/more-eg-photos/skinny-tall-plant.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/skinny-tall-plant.jpg")}
						/>
					</Col>
					<Col md={4} className="my-3">
						<Image
							src="/assets/more-eg-photos/brick-path.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/brick-path.jpg")}
						/>
					</Col>
					<Col md={5} className="my-3">
						<Image
							src="/assets/more-eg-photos/front-door3.jpg"
							alt="Gallery Image"
							className="gallery-image"
							onClick={() => handleImageClick("/assets/more-eg-photos/front-door3.jpg")}
						/>
					</Col>
				</Row>

				{/* Modal for displaying full-size image */}
				<Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
					<Modal.Body className="gallery-modal-body d-flex justify-content-center p-5">
						<Image src={currentImage} alt="Full Size" className="gallery-modal-image" fluid rounded/>
					</Modal.Body>
				</Modal>
			</Container>
		</>
	);
}
