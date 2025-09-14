// src/Pages/Home.jsx
import React, { useEffect } from "react";
import CTA from "../Components/CTA";
import Features from "../Pages/Features";
import About from "../Pages/About";
import ProblemSolution from "../Components/ProblemSolution";
import Model from "../Components/Model";  // Models component
import Spline from "@splinetool/react-spline";
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="home-page" style={{ backgroundColor: "#000" }}>
      {/* Hero Section */}
      <section id="home" className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-md-6 hero-text" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-3" style={{ color: "#f8f9fa" }}>
                Your Friend. Your Listener.{" "}
                <span style={{ color: "#319dcfff" }}>Your Companion.</span>
              </h1>
              <p className="lead mb-4" style={{ color: "#d1d1d1" }}>
                An AI-powered companion robot designed to comfort, support, and
                engage with you in meaningful conversations.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <a href="/how-it-works" className="btn btn-primary btn-lg shadow hero-btn" style={{ marginRight: "0.5rem" }}>
                  Meet Your Companion
                </a>
                <a href="/features" className="btn btn-outline-primary btn-lg shadow-sm hero-btn">
                  Explore Features
                </a>
              </div>
            </div>

            {/* Spline 3D Model */}
            <div className="col-md-6 hero-3d" data-aos="fade-left" data-aos-delay="300">
              <div className="spline-wrapper rounded-4 shadow-lg overflow-hidden" data-aos="zoom-in" data-aos-delay="500">
                <Spline scene="https://prod.spline.design/NVMQW7I2bhkQEwg4/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section id="problem-solution" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="400">
          <h2 className="fw-bold mb-4 text-center" style={{ color: "#eaeaea" }}>
            Problem & Solution
          </h2>
          <ProblemSolution />
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="500">
          <h2 className="fw-bold mb-4 text-center" style={{ color: "#eaeaea" }}>
            Our Models
          </h2>
          <Model />
        </div>
      </section>

      {/* Features Section - after Models */}
  
          
          <Features />
  

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container text-center" data-aos="fade-up" data-aos-delay="700">
          <h2 className="fw-bold mb-4" style={{ color: "#eaeaea" }}>
            About Us
          </h2>
          <About />
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-5">
        <div className="container text-center" data-aos="fade-up" data-aos-delay="800">
          <h2 className="fw-bold mb-4" style={{ color: "#eaeaea" }}>
            Take the First Step
          </h2>
          <CTA />
        </div>
      </section>

      {/* Contact Info Section */}
      
    </div>
  );
}
