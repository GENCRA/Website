// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black py-12 mt-16" style={{ color: "#fff", fontFamily: "Roboto, sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Contact Section */}
        <section className="py-5">
          

          <div className="row justify-content-center g-4">
            {/* Instagram */}
            <div className="col-md-3">
              <a
                href="https://www.instagram.com/gencra_official?utm_source=qr&igsh=MXZnc3lpa2s0Nm9pbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-light d-block"
              >
                <FaInstagram size={30} className="mb-2 text-danger" />
              </a>
            </div>

            {/* Facebook */}
            <div className="col-md-3">
              <a
                href="https://www.facebook.com/share/1CkguJMJij/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-light d-block"
              >
                <FaFacebookF size={30} className="mb-2 text-primary" />
              </a>
            </div>

            {/* Email */}
            <div className="col-md-3">
              <a
                href="mailto:gencraprivatelimited@gmail.com"
                className="text-decoration-none text-light d-block"
              >
                <FaEnvelope size={30} className="mb-2 text-warning" />
                
              </a>
            </div>

            {/* Phone */}
           
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-6" />

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Gencra private limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
