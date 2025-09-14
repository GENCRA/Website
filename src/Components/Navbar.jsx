import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.png"; // Make sure logo exists

export default function Navbar() {
  const linkStyle = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#f6f6f6",
    transition: "color 0.3s",
  };

  const activeLinkStyle = {
    color: "#ffffff",
    fontWeight: "700",
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#000" }}>
      <div className="container d-flex align-items-center justify-content-between">
        {/* Brand / Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={Logo}
            alt="Companion Robot Logo"
            style={{
              height: "50px",
              width: "50px",
              marginRight: "10px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span
            style={{
              color: "#ffffff",
              fontFamily: "Poppins, sans-serif",
              fontSize: "1.5rem",
              fontWeight: "700",
            }}
          >
            GENCRA
          </span>
        </NavLink>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              ["Home", "/#home", true],          // scroll
              ["Models", "/#models", true],      // scroll
              ["Features", "/features", false],  // ✅ page link
              ["About Us", "/#about", true],     // scroll
              ["How It Works", "/how-it-works", false], // page
              ["Gallery", "/gallery", false],    // page
              ["Contact", "/contact", false],    // page
            ].map(([label, href, isHash]) => (
              <li className="nav-item" key={href}>
                {isHash ? (
                  <HashLink smooth to={href} style={linkStyle} className="nav-link">
                    {label}
                  </HashLink>
                ) : (
                  <NavLink
                    to={href}
                    style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
                    className="nav-link"
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
