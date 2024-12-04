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
		company: "", // honeypot hidden field for added security. if this field is filled out the form will be rejected.
	});

	const [errors, setErrors] = useState({});
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState(false);
	const [captchaValue, setCaptchaValue] = useState(null);
	const [characterLimit, setCharacterLimit] = useState(0);
	const MAX_CHARACTER_LIMIT = 200;

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

	const G_KEY = process.env.REACT_APP_GSITE_KEY;
	const SRV_ID = process.env.REACT_APP_SRV_ID;
	const TMP_ID = process.env.REACT_APP_TMP_ID;
	const E_KEY = process.env.REACT_APP_EKEY;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		if (name === "message") {
			setCharacterLimit(value.length);
		}
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
		if (formData.company.trim()) newErrors.company = "Try again...";

		return newErrors;
	};

	const sendEmail = (templateParams) => {
		emailjs
			.send(
				SRV_ID, //serviceid
				TMP_ID, //templateid
				templateParams,
				E_KEY // public key
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
				company: "",
			});
			setCharacterLimit(0);
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
					<Alert dismissible variant="success">
						Your request has been submitted successfully!
					</Alert>
				)}
				{submitError && (
					<Alert dismissible variant="danger">
						There was an error submitting your request. Please try again.
					</Alert>
				)}
				<Form onSubmit={handleSubmit} noValidate className="quote-form">
					<Form.Control
						type="text"
						name="company"
						placeholder="Company"
						className="d-none"
						value={formData.company}
						onChange={handleChange}
						style={{ display: "none" }} //invisible to the user. if this field gets filled out its a bot.
					/>
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
									placeholder="Tell us about your project..."
									maxLength={200}
									className="modern-input"
									value={formData.message}
									onChange={handleChange}
									isInvalid={!!errors.message}
								/>
								<Form.Control.Feedback type="invalid">
									{errors.message}
								</Form.Control.Feedback>
								<div className="d-flex justify-content-end">
									<small>
										<i>
											{characterLimit}/{MAX_CHARACTER_LIMIT}
										</i>
									</small>
								</div>
							</Form.Group>
						</Col>
					</Row>
					<Row className="d-flex justify-content-center mb-4">
						<Col className="d-flex justify-content-center">
							<ReCAPTCHA
								sitekey={G_KEY} // site key
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
