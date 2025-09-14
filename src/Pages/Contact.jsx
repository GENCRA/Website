// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section className="py-20" style={{ backgroundColor: "#000" }} id="contact">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Contact Us
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Tell us anything or pre-order your companion robot today.
        </p>

        <div className="mt-12">
          <div
            className="rounded-xl shadow-lg overflow-hidden"
            style={{ backgroundColor: "#111" }}
          >
            <iframe
              src="https://forms.gle/kac2pow152gP7TbR7"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
              className="w-full"
              style={{ backgroundColor: "#111" }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
