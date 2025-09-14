import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import HowItWorks from "./Pages/Howitworks";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#000", // ✅ pure black background
        color: "#fff", // ✅ ensures default text is white
        fontFamily: "Roboto, sans-serif", // ✅ global font
      }}
    >
      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <Navbar />

        <main style={{ padding: "2rem 0", minHeight: "75vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}
