import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Gallery from "../gallery/Gallery";
import Services from "../services/Services";
import Contact from "../contact/Contact";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Pages;
