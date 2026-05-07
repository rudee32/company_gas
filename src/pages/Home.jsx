import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import GasCatalog from "../components/landing/GasCatalog";
import Services from "../components/landing/Services";
import Distribution from "../components/landing/Distribution";
import Safety from "../components/landing/Safety";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <GasCatalog />
      <Services />
      <Distribution />
      <Safety />
      <Contact />
      <Footer />
    </div>
  );
}