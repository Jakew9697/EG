import React, { useRef, useState } from "react";
import { Row, Col, Stack } from "react-bootstrap";
import "./css/HomeBeforeAfter.css";

const HomeBeforeAfter = () => {
	const containerRef = useRef(null);
	const [dividerPosition, setDividerPosition] = useState(50);
	const [isDragging, setIsDragging] = useState(false);

	const handleMouseDown = (e) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleMouseMove = (e) => {
		if (!isDragging || !containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const offsetX = e.clientX - rect.left;

		const dividerWidth = 20;
		const newDividerPosition = Math.min(
			Math.max(((offsetX - dividerWidth / 2) / rect.width) * 100, 0),
			100
		);

		setDividerPosition(newDividerPosition);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleTouchStart = (e) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleTouchMove = (e) => {
		if (!isDragging || !containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const offsetX = e.touches[0].clientX - rect.left;

		const dividerWidth = 20; // The width of the divider in pixels
		const newDividerPosition = Math.min(
			Math.max(((offsetX - dividerWidth / 2) / rect.width) * 100, 0),
			100
		);

		setDividerPosition(newDividerPosition);
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
	};

	return (
		<>
			{/* Row for the Stack (Header and Paragraph) */}
			<Row className="mt-5 mx-1 justify-content-start home-before-after-stack">
				<Col xs={12} className="before-after-paragraph-column d-flex justify-content-center mb-5">
					<Stack gap={3} className="home-before-after-stack justify-content-center text-center pt-5">
						<div className="before-after-header-div">
							<h1 className="before-after-header">
								<b>Breathtaking outdoor spaces designed specifically for your home.</b>
							</h1>
						</div>
						<div className="before-after-paragraph">
							<p>
								Enchanted Gardener is a professional gardening, maintenance, and landscaping company
								dedicated to bringing your outdoor spaces to life. Whether you don't have the time,
								prefer not to handle the weeding, or simply want to entrust your landscapes and garden
								to the experts, we are here to help!
							</p>
						</div>
					</Stack>
				</Col>
			</Row>

			{/* Row for the Before/After Images */}
			<Row className="mx-1 justify-content-center home-before-after-images">
				{/* Desktop view - overlapping images with a divider */}
				<Row className="before-after-labels">
					<Col md={6} className="before-label d-flex justify-content-center">
					<p>Before</p>
					</Col>
					<Col md={6} className="after-label d-flex justify-content-center">
					<p>After</p>
					</Col>
				</Row>
				<Col xs={12} md={8} lg={8} className="mb-5 w-100 before-after-container-desktop">
					<div
						ref={containerRef}
						className="before-after-container"
						onMouseMove={handleMouseMove}
						onMouseUp={handleMouseUp}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
						onMouseLeave={handleMouseUp}>
						<div className="before-image-wrapper">
							<img
								src="../../../assets/eg-images/Before H1 back corner.Final.jpg"
								alt="Before"
								className="before-image"
							/>
						</div>
						<div
							className="after-image-wrapper"
							style={{ clipPath: `inset(0 0 0 ${dividerPosition}%)` }}>
							<img
								src="../../../assets/eg-images/After H1 back corner.Final.jpg"
								alt="After"
								className="after-image"
							/>
						</div>
						<div
							className="divider"
							style={{ left: `calc(${dividerPosition}% - ${20 / 4}px)` }}
							onMouseDown={handleMouseDown}
							onTouchStart={handleTouchStart}></div>
					</div>
				</Col>

				{/* Tablet and mobile views - stacked images without the divider */}
				<Col xs={12} className="before-after-container-mobile">
					<div className="before-image-wrapper-mobile">
						<img
							src="../../../assets/beforeafterimage2.jpg"
							alt="Before"
							className="before-image"
						/>
					</div>
					<div className="after-image-wrapper-mobile">
						<img
							src="../../../assets/bloom-flowers-landscape.jpg"
							alt="After"
							className="after-image"
						/>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default HomeBeforeAfter;
