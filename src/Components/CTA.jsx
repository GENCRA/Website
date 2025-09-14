// src/components/CTA.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20 bg-black text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Bring Home Your Companion Today
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Experience warmth, empathy, and support with your own AI-powered
          friend. Don’t let loneliness win — your companion is waiting.
        </p>

        {/* Buttons styled same as Hero Section */}
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link
            to="/contact"
            className="btn btn-primary btn-lg shadow hero-btn"
          >
            Get Started
          </Link>
          
        </div>
      </div>
    </section>
  );
}
