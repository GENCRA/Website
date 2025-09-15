// src/Components/Features.jsx
import React from "react";
import {
  Activity,
  UserCheck,
  FileText,
  BellRing,
  Users,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Dual Monitoring",
    desc: "Seamlessly combines real-time emotional intelligence with biological vitals—an integration rarely found in a single platform.",
    color: "#ef4444", // red
  },
  {
    icon: UserCheck,
    title: "Personalized & Adaptive Support",
    desc: "Continuously adapts to mood changes with interactive tasks, games, music, and motivational guidance tailored to each user.",
    color: "#3b82f6", // blue
  },
  {
    icon: FileText,
    title: "Professional Integration",
    desc: "Generates actionable health-emotion reports for caregivers and clinicians, ensuring faster, more personalized interventions.",
    color: "#22c55e", // green
  },
  {
    icon: BellRing,
    title: "Safety & Emergency Response",
    desc: "Automatically triggers alerts and shares live location during extreme emotional states for immediate support.",
    color: "#eab308", // yellow
  },
  {
    icon: Users,
    title: "Scalable",
    desc: "Flexible deployment across institutions and personal settings, with easy expansion to multiple users.",
    color: "#a855f7", // purple
  },
  {
    icon: Globe,
    title: "Accessible",
    desc: "Delivers affordable, on-demand or 24/7 support at a fraction of traditional caregiving costs.",
    color: "#06b6d4", // cyan
  },
];

function Features() {
  return (
    <section
      className="py-5 py-md-5"
      style={{
        backgroundColor: "#000",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2
            className="fw-bold"
            style={{
              color: "#fff",
              fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", // responsive
              marginBottom: "0.75rem",
            }}
          >
            Unique Features
          </h2>
          <p
            style={{
              color: "#aaa",
              fontSize: "clamp(1rem, 1.2vw, 1.15rem)", // responsive
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Discover how our AI companion integrates advanced technology with
            empathy to provide unmatched care and support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((f, idx) => (
            <div
              className="col-lg-4 col-md-6"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div
                className="card h-100 border-0 rounded-4 shadow feature-card"
                style={{
                  backgroundColor: "#111",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                {/* Icon */}
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: `${f.color}22`,
                    margin: "0 auto",
                  }}
                >
                  <f.icon size={34} style={{ color: f.color }} />
                </div>

                {/* Title */}
                <h5
                  className="fw-semibold"
                  style={{
                    color: "#fff",
                    fontSize: "1.25rem",
                  }}
                >
                  {f.title}
                </h5>

                {/* Description */}
                <p
                  style={{
                    color: "#d1d5db",
                    fontSize: "1rem",
                    marginTop: "0.75rem",
                    lineHeight: "1.5",
                  }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styling for hover effect */}
      <style jsx>{`
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </section>
  );
}

export default Features;
