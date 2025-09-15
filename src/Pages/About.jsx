// src/Pages/About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import robotvid from "../assets/robot.mp4";

// Replace these with actual team member images
import teamMember1 from "../assets/team1.jpg";
import teamMember2 from "../assets/team2.jpg";
import teamMember3 from "../assets/team3.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="about"
      className="about-section py-5"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Side */}
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <h2
              className="fw-bold mb-3"
              style={{ color: "#7dd3fc", fontSize: "clamp(1.5rem, 2vw, 2rem)" }}
            >
              Why We Built This
            </h2>
            <p className="lead mb-4" style={{ color: "#ccc", lineHeight: "1.7" }}>
              Loneliness can feel overwhelming. Our mission is to design a robot
              that’s more than just a machine—it’s a true companion. With
              empathy-driven AI, our robot listens, talks, and cares, ensuring
              no one feels alone.
            </p>

            <h2
              className="fw-bold mb-3"
              style={{ color: "#7dd3fc", fontSize: "clamp(1.5rem, 2vw, 2rem)" }}
            >
              Our Vision
            </h2>
            <p className="lead mb-4" style={{ color: "#ccc", lineHeight: "1.7" }}>
              We believe technology should bridge hearts, not just connect
              devices. That’s why our robot is crafted to bring comfort,
              companionship, and meaningful interaction into everyday life. By
              blending advanced AI with human-centered design, we aim to create
              a future where no one feels disconnected, and where care and
              understanding are always within reach.
            </p>
          </div>

          {/* Video Side */}
          <div className="col-md-6 text-center" data-aos="fade-left" data-aos-delay="200">
            <video
              src={robotvid}
              autoPlay
              loop
              muted
              playsInline
              preload="none" // ✅ improves mobile speed
              className="rounded-4 shadow-lg"
              style={{
                maxHeight: "400px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Our Team Section */}
        <div className="row mt-5" data-aos="fade-up" data-aos-delay="400">
          <div className="col-12 text-center mb-4">
            <h2
              className="fw-bold"
              style={{ color: "#7dd3fc", fontSize: "clamp(1.5rem, 2vw, 2rem)" }}
            >
              Our Team
            </h2>
          </div>

          {[ 
            { img: teamMember1, name: "Shivani Guru Naik", role: "Director" },
            { img: teamMember2, name: "Kuragayala Sree Harsha", role: "Director" },
            { img: teamMember3, name: "Wrushya Shrungha G S", role: "Director" },
          ].map((member, idx) => (
            <div className="col-md-4 text-center mb-4" key={idx} data-aos="zoom-in" data-aos-delay={600 + idx * 100}>
              <img
                src={member.img}
                alt={member.name}
                className="rounded-circle shadow team-img"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              />
              <h5 className="mt-3" style={{ color: "#fff" }}>{member.name}</h5>
              <p style={{ color: "#ccc" }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Extra styling for hover effect */}
      <style jsx>{`
        .team-img:hover {
          transform: scale(1.08);
          box-shadow: 0 12px 28px rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </section>
  );
}
