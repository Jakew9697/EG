import React, { useState } from "react";
import PropTypes from "prop-types";
import { Offcanvas, Button, Form, Row, Col, Alert } from "react-bootstrap";
import "./css/Quote.css";

export default function Quote({ show, handleClose }) {
	// State management for form fields
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		company: "",
		email: "",
		address: "",
		zipCode: "",
		phoneNumber: "",
		message: "",
	});

	// State for form validation and submission feedback
	const [errors, setErrors] = useState({});
	const [submitSuccess, setSubmitSuccess] = useState(false);

	// Handle input change
	const handleChange = (e) => {
		const { name, value } = e.target;
		// Update form data
		setFormData({ ...formData, [name]: value });

		// Clear the error for the field that's being updated
		if (errors[name]) {
			const newErrors = { ...errors };
			delete newErrors[name];
			setErrors(newErrors);
		}
	};

	// Validate form fields
	const validate = () => {
		const newErrors = {};
		if (!formData.firstName.trim())
			newErrors.firstName = "First Name is required";
		if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Email is not valid";
		}
		if (!formData.phoneNumber.trim())
			newErrors.phoneNumber = "Phone Number is required";
		if (!formData.message.trim()) newErrors.message = "Message is required";
		return newErrors;
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const formErrors = validate();
		if (Object.keys(formErrors).length === 0) {
			// Submit the form (e.g., send data to an API)
			console.log("Form submitted:", formData);
			setSubmitSuccess(true);
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				company: "",
				address: "",
				zipCode: "",
				phoneNumber: "",
				message: "",
			});
			setErrors({});
		} else {
			setErrors(formErrors);
			setSubmitSuccess(false);
		}
	};

	return (
		<Offcanvas
			show={show}
			onHide={handleClose}
			placement="end"
			className="modern-offcanvas">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title className="offcanvas-title">
					Request a Quote
				</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				{submitSuccess && (
					<Alert variant="success">
						Your request has been submitted successfully!
					</Alert>
				)}
				<Form onSubmit={handleSubmit} noValidate>
					<Row>
						<Col>
							<Form.Group controlId="formFirstName" className="mb-3">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									name="firstName"
									placeholder="First Name"
									className="modern-input"
									value={formData.firstName}
									onChange={handleChange}
									isInvalid={!!errors.firstName}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.firstName}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group controlId="formLastName" className="mb-3">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									name="lastName"
									placeholder="Last Name"
									className="modern-input"
									value={formData.lastName}
									onChange={handleChange}
									isInvalid={!!errors.lastName}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.lastName}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="formAddress" className="mb-3">
								<Form.Label>Address</Form.Label>
								<Form.Control
									type="text"
									name="address"
									placeholder="Address"
									className="modern-input"
									value={formData.address}
									onChange={handleChange}
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group controlId="formZipCode" className="mb-3">
								<Form.Label>Zip Code</Form.Label>
								<Form.Control
									type="text"
									name="zipCode"
									placeholder="Zip Code"
									className="modern-input"
									value={formData.zipCode}
									onChange={handleChange}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="formEmail" className="mb-3">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									name="email"
									placeholder="Email"
									className="modern-input"
									value={formData.email}
									onChange={handleChange}
									isInvalid={!!errors.email}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.email}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group controlId="formCompany" className="mb-3">
								<Form.Label>Company</Form.Label>
								<Form.Control
									type="text"
									name="company"
									placeholder="Company"
									className="modern-input"
									value={formData.company}
									onChange={handleChange}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Form.Group controlId="formPhoneNumber" className="mb-3">
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							type="tel"
							name="phoneNumber"
							placeholder="Phone Number"
							className="modern-input"
							value={formData.phoneNumber}
							onChange={handleChange}
							isInvalid={!!errors.phoneNumber}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.phoneNumber}
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId="formMessage" className="mb-4">
						<Form.Label>Message</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							name="message"
							placeholder="Write your message here..."
							className="modern-input"
							value={formData.message}
							onChange={handleChange}
							isInvalid={!!errors.message}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.message}
						</Form.Control.Feedback>
					</Form.Group>
					<Button variant="primary" type="submit" className="modern-button">
						Submit
					</Button>
				</Form>
			</Offcanvas.Body>
		</Offcanvas>
	);
}

// Add PropTypes for type checking
Quote.propTypes = {
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};
