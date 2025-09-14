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
      style={{ backgroundColor: "#000", color: "#fff", fontFamily: "Roboto, sans-serif" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Side */}
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <h2
              className="fw-bold mb-3"
              style={{ color: "#7dd3fc" }}
            >
              Why We Built This
            </h2>
            <p className="lead mb-4" style={{ color: "#ccc" }}>
              Loneliness can feel overwhelming. Our mission is to design a robot
              that’s more than just a machine—it’s a true companion. With
              empathy-driven AI, our robot listens, talks, and cares, ensuring
              no one feels alone.
            </p>

            <h2
              className="fw-bold mb-3"
              style={{ color: "#7dd3fc" }}
            >
              Our Vision
            </h2>
            <p className="lead mb-4" style={{ color: "#ccc" }}>
              We believe technology should bridge hearts, not just connect
              devices. That’s why our robot is crafted to bring comfort,
              companionship, and meaningful interaction into everyday life. By
              blending advanced AI with human-centered design, we aim to create
              a future where no one feels disconnected, and where care and
              understanding are always within reach.
            </p>
          </div>

          {/* Video Side */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <video
              src={robotvid}
              autoPlay
              loop
              muted
              playsInline
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
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-12 text-center mb-4">
            <h2 className="fw-bold" style={{ color: "#7dd3fc" }}>
              Our Team
            </h2>
          </div>

          {/* Team Member 1 */}
          <div className="col-md-4 text-center mb-4">
            <img
              src={teamMember1}
              alt="Team Member 1"
              className="rounded-circle shadow"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h5 className="mt-3" style={{ color: "#fff" }}>Shivani Guru Naik</h5>
            <p style={{ color: "#ccc" }}>Director</p>
            
          </div>

          {/* Team Member 2 */}
          <div className="col-md-4 text-center mb-4">
            <img
              src={teamMember2}
              alt="Team Member 2"
              className="rounded-circle shadow"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h5 className="mt-3" style={{ color: "#fff" }}>Kuragayala Sree Harsha</h5>
            <p style={{ color: "#ccc" }}>Director</p>
          </div>

          {/* Team Member 3 */}
          <div className="col-md-4 text-center mb-4">
            <img
              src={teamMember3}
              alt="Team Member 3"
              className="rounded-circle shadow"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h5 className="mt-3" style={{ color: "#fff" }}>Wrushya Shrungha G S</h5>
            <p style={{ color: "#ccc" }}>Director</p>
          </div>
        </div>
      </div>
    </section>
  );
}
