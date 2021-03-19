import React from 'react';
import Footer from './Footer';
import AboutUs from './home/AboutUs';
import Contact from './Contact';
import Features from './home/Features';
import Hero from './home/Hero';
import Support from './home/Support';

function About() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Features />
      <Support />
      <Footer />
    </div>
  );
}

export default About;
