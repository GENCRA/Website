// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-black" id="contact">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Contact Us
        </h2>

        {/* Contact Card / Google Form Link */}
        <div className="rounded-2xl shadow-xl overflow-hidden bg-gray-900 p-6 md:p-10">
          <p className="text-white text-lg mb-6">
            We’d love to hear from you! Please click the button below to fill out our contact form.
          </p>
          <a
            href="https://forms.gle/kac2pow152gP7TbR7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Open Contact Form
          </a>
        </div>
      </div>
    </section>
  );
}
