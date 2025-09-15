// src/Components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu state

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Menu items with type: "hash" = in-page section, "route" = different page
  const menuItems = [
    { label: "Home", href: "/#home", type: "hash" },
    { label: "About", href: "/#about", type: "hash" },
    { label: "Features", href: "/features", type: "route" },
    { label: "Models", href: "/#models", type: "hash" },
    { label: "How It Works", href: "/#how-it-works", type: "hash" },
    { label: "Gallery", href: "/gallery", type: "route" },
    { label: "Contact", href: "/#contact", type: "hash" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: "#000",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo / Brand */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
          <img
            src={Logo}
            alt="GENCRA Logo"
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

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          />
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            {menuItems.map(({ label, href, type }) => (
              <li className="nav-item mx-2" key={href}>
                {type === "hash" ? (
                  <HashLink
                    smooth
                    to={href}
                    className="nav-link"
                    style={linkStyle}
                    scroll={el => el.scrollIntoView({ behavior: "smooth", block: "start" })}
                    onClick={closeMenu}
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
                    onClick={closeMenu}
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
