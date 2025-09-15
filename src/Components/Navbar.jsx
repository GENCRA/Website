// src/Components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.png"; // Ensure logo exists

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

  // Close menu on link click (for mobile)
  const closeMenu = () => {
    const navMenu = document.getElementById("navMenu");
    if (navMenu && navMenu.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navMenu, {
        toggle: true,
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: "#000",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Brand / Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
          <img
            src={Logo}
            alt="Companion Robot Logo"
            style={{
              height: "48px",
              width: "48px",
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

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }} />
        </button>

        {/* Menu Links */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            {[
              ["Home", "/#home", true],
              ["About", "/#about", true],
              ["Features", "/features", false],
              ["Models", "/#models", true],
              ["How It Works", "/how-it-works", false],
              ["Gallery", "/gallery", false],
              ["Contact", "/contact", false],
            ].map(([label, href, isHash]) => (
              <li className="nav-item mx-2" key={href}>
                {isHash ? (
                  <HashLink
                    smooth
                    to={href}
                    className="nav-link"
                    style={linkStyle}
                    onClick={closeMenu} // auto-close on click
                  >
                    {label}
                  </HashLink>
                ) : (
                  <NavLink
                    to={href}
                    className="nav-link"
                    style={({ isActive }) =>
                      isActive
                        ? { ...linkStyle, ...activeLinkStyle }
                        : linkStyle
                    }
                    onClick={closeMenu} // auto-close on click
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
