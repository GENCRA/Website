import React from "react";

// Import all 8 images from assets
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img9 from "../assets/img9.jpg";
import img5 from "../assets/img5.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

export default function Gallery() {
  const images = [img1, img2, img3, img8, img5, img9, img7];

  return (
    <section className="py-5" style={{ backgroundColor: "#000" }}>
      <div className="container">
        <div className="row g-4">
          {images.map((src, idx) => (
            <div className="col-12 col-sm-6 col-md-4" key={idx}>
              <div
                className="card shadow-lg border-0 rounded-4 gallery-card"
                style={{ backgroundColor: "#111" }}
              >
                <div className="overflow-hidden rounded-4">
                  <img
                    src={src}
                    className="card-img-top"
                    alt={`Gallery ${idx + 1}`}
                    style={{
                      transition: "transform 0.5s ease",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-card img:hover {
          transform: scale(1.05);
        }
        .gallery-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .gallery-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        }
      `}</style>
    </section>
  );
}
