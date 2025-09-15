import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// ✅ Lazy load all pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Features = lazy(() => import("./Pages/Features"));
const HowItWorks = lazy(() => import("./Pages/Howitworks"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const Contact = lazy(() => import("./Pages/Contact"));

export default function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#000", // ✅ black background
        color: "#fff",           // ✅ white text
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

        {/* ✅ Suspense wrapper for lazy routes */}
        <main style={{ padding: "2rem 0", minHeight: "75vh" }}>
          <Suspense fallback={<div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
}
