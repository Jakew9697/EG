import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import PropTypes from "prop-types";
import { Offcanvas, Button, Form, Row, Col, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./css/Quote.css";

export default function Quote({ show, handleClose }) {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		address: "",
		zipCode: "",
		phoneNumber: "",
		message: "",
		services: [],
	});

	const [errors, setErrors] = useState({});
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState(false);
	const [captchaValue, setCaptchaValue] = useState(null);

	const serviceOptions = [
		{ value: "gardening", label: "Gardening" },
		{ value: "landscaping", label: "Landscaping" },
		{ value: "hardscaping", label: "Hardscaping" },
		{ value: "maintenance", label: "Maintenance" },
		{ value: "chemicalapplication", label: "Chemical Application" },
		{ value: "seasonalservice", label: "Seasonal Service" },
		{ value: "notlisted", label: "Not Listed" },
	];

	const animatedComponents = makeAnimated();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		if (errors[name]) {
			const newErrors = { ...errors };
			delete newErrors[name];
			setErrors(newErrors);
		}
	};

	const handleSelectChange = (selected) => {
		setFormData({ ...formData, services: selected });
		if (errors.services) {
			const newErrors = { ...errors };
			delete newErrors.services;
			setErrors(newErrors);
		}
	};

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
		if (formData.services.length === 0)
			newErrors.services = "Selecting one or more options is required";
		if (!captchaValue) newErrors.captcha = "Please verify that you are human";

		return newErrors;
	};

	const sendEmail = (templateParams) => {
		emailjs
			.send(
				"service_t6ks8jg",
				"template_6efhwhu",
				templateParams,
				"cg3KqKZdpd-E3Ohpj"
			)
			.then((response) => {
				console.log("Email successfully sent!", response.status, response.text);
				setSubmitSuccess(true);
				setSubmitError(false);
			})
			.catch((error) => {
				console.error("Failed to send email:", error);
				setSubmitError(true);
				setSubmitSuccess(false);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formErrors = validate();
		if (Object.keys(formErrors).length === 0) {
			const templateParams = {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				phoneNumber: formData.phoneNumber,
				address: formData.address,
				zipCode: formData.zipCode,
				message: formData.message,
				services: formData.services.map((service) => service.label).join(", "),
			};

			sendEmail(templateParams);

			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				address: "",
				zipCode: "",
				phoneNumber: "",
				message: "",
				services: [],
			});
			setErrors({});
		} else {
			setErrors(formErrors);
			setSubmitSuccess(false);
		}
	};

	const onCaptchaChange = (value) => {
		setCaptchaValue(value);
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
				{submitError && (
					<Alert variant="danger">
						There was an error submitting your request. Please try again.
					</Alert>
				)}
				<Form onSubmit={handleSubmit} noValidate className="quote-form">
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
							<Form.Group controlId="formServiceSelection" className="mb-3">
								<Form.Label>Service Request Selection</Form.Label>
								<Select
									options={serviceOptions}
									isMulti
									components={animatedComponents}
									value={formData.services}
									onChange={handleSelectChange}
									placeholder="Select one or more services..."
                  isInvalid={!!errors.services}
									className={`react-select-container ${
										errors.services ? "is-invalid" : ""
									}`}
									classNamePrefix="react-select"
								/>
								{errors.services && (
									<div className="text-danger">{errors.services}</div>
								)}
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
                  isInvalid={!!errors.address}
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
                  isInvalid={!!errors.zipCode}
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
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="formMessage" className="mb-4">
								<Form.Label>Additional Notes</Form.Label>
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
						</Col>
					</Row>
          <Row className="d-flex justify-content-center mb-4">
						<Col className="d-flex justify-content-center">
							<ReCAPTCHA
								sitekey="6Lc2P2gqAAAAAAFGKWmehuwSWWIZSvSXFHxunb5I"
								onChange={onCaptchaChange}
							/>
							{errors.captcha && (
								<div className="text-danger">{errors.captcha}</div>
							)}
						</Col>
					</Row>
					<Row className="d-flex justify-content-center">
						<Col className="d-flex justify-content-center">
							<Button variant="primary" type="submit" className="modern-button">
								Submit
							</Button>
						</Col>
					</Row>
				</Form>
			</Offcanvas.Body>
		</Offcanvas>
	);
}

Quote.propTypes = {
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};
