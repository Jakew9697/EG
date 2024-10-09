import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./pages/Home";
import Navigation from "./components/Navbar";
import Quote from "./components/Quote";
import Services from "./components/Services";
import "./App.css";

function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/quote" element={<Quote />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
