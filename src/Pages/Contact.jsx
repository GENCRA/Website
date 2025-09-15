// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-black" id="contact">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Contact Us
        </h2>
        <p className="mt-3 text-base md:text-lg text-gray-400">
          Tell us anything or pre-order your companion robot today.
        </p>

        {/* Google Form */}
        <div className="mt-10">
          <div className="rounded-2xl shadow-xl overflow-hidden bg-black p-3 md:p-4">
            <iframe
              src="https://forms.gle/kac2pow152gP7TbR7"
              width="100%"
              height="750"
              frameBorder="0"
              title="Contact Form"
              className="w-full rounded-lg"
              style={{
                backgroundColor: "black",
                filter: "invert(1) hue-rotate(180deg)", // dark mode hack for Google Form
              }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
