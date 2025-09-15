// src/Pages/Home.jsx
import React, { useEffect, lazy, Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import CTA from "../Components/CTA";
import Features from "./Features";
import About from "./About";
import HowItWorks from "./Howitworks";
import Model from "../Components/Model";

import { FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// ✅ Lazy load Spline (heavy component)
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Home() {
  const splineRef = useRef(null); // store reference to Spline scene

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Optional: handle frame animation safely
  const handleFrame = (spline) => {
    if (!spline) return;
    const cube = spline.findObjectByName("Cube"); // replace "Cube" with your node name
    if (!cube) return; // skip if undefined
    cube.position.x += 0.01; // example animation
  };

  const handleLoad = (spline) => {
    splineRef.current = spline;
    console.log("Spline scene loaded", spline);
    // Access objects safely here if needed
  };

  return (
    <div className="home-page" style={{ backgroundColor: "#000" }}>
      {/* Hero Section */}
      <section id="home" className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-md-6 hero-text mb-4 mb-md-0" data-aos="fade-right">
              <h1 className="display-5 fw-bold mb-3 text-white">
                Your Friend. Your Listener.{" "}
                <span style={{ color: "#319dcf" }}>Your Companion.</span>
              </h1>
              <p className="lead mb-4" style={{ color: "#d1d1d1" }}>
                An AI-powered companion robot designed to comfort, support, and
                engage with you in meaningful conversations.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <Link
                  to="/how-it-works"
                  className="btn btn-primary btn-lg shadow hero-btn"
                >
                  Meet Your Companion
                </Link>

                <Link
                  to="/features"
                  className="btn btn-outline-primary btn-lg shadow-sm hero-btn"
                >
                  Explore Features
                </Link>
              </div>
            </div>

            {/* Spline 3D Model */}
            <div
              className="col-md-6 hero-3d"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div
                className="spline-wrapper rounded-4 shadow-lg overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay="500"
                style={{ minHeight: "300px" }}
              >
                <Suspense
                  fallback={
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "300px", color: "#fff" }}
                    >
                      Loading 3D Model...
                    </div>
                  }
                >
                  <Spline
                    scene="https://prod.spline.design/NVMQW7I2bhkQEwg4/scene.splinecode"
                    onLoad={handleLoad}
                    onFrame={handleFrame} // safe frame animation
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-2">
        <div className="container" data-aos="fade-up" data-aos-delay="500">
          <Model />
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="600">
          <HowItWorks />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div
          className="container text-center"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h2 className="fw-bold mb-4 text-white">About Us</h2>
          <About />
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-5">
        <div
          className="container text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h2 className="fw-bold mb-4 text-white">Take the First Step</h2>
          <CTA />
        </div>
      </section>
    </div>
  );
}
