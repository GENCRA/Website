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

        {/* Google Form Embed */}
        <div className="rounded-2xl shadow-xl overflow-hidden bg-black p-3 md:p-4">
          <iframe
            src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            title="Contact Form"
            className="w-full rounded-lg min-h-[600px] md:min-h-[800px]"
            style={{
              backgroundColor: "black",
              filter: "invert(1) hue-rotate(180deg)", // dark mode hack
            }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
