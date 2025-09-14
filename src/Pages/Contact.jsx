// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section className="py-20 bg-black" id="contact">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Contact Us
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Tell us anything or pre-order your companion robot today.
        </p>

        <div className="mt-12">
          <div className="rounded-xl shadow-lg overflow-hidden bg-black p-4">
            <iframe
              src="https://forms.gle/kac2pow152gP7TbR7"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
              className="w-full rounded-lg"
              style={{
                backgroundColor: "black",
                filter: "invert(1) hue-rotate(180deg)", // makes Google Form look dark
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
