// Hero.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
// import About from './About';
// import Services from './Services';
// import Portfolio from './Portfolio';
// import Contact from './Contact';

const Hero = () => {
  return (
    <section>
      {/* Render all components in sequence for a single-page layout */}
      <Landing />
      {/* <About />
      <Services />
      <Portfolio />
      <Contact /> */}

      {/* Define routes for each section if users want to navigate directly */}
      <Routes>
        <Route path="/landing" element={<Landing />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </section>
  );
};

export default Hero;
