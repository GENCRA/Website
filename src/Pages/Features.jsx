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
    <section className="py-20" style={{ backgroundColor: "#000", fontFamily: "'Poppins', sans-serif" }}>
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{
              color: "#fff",
              fontSize: "2.5rem",
              letterSpacing: "-0.5px",
              marginBottom: "0.5rem",
              fontWeight: 700, // Bold heading
            }}
          >
            Unique Features
          </h2>
          <p
            style={{
              color: "#aaa",
              fontSize: "1.15rem",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
              fontWeight: 400, // Normal body text
            }}
          >
            Discover how our AI companion integrates advanced technology with
            empathy to provide unmatched care and support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((f, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div
                className="card h-100 border-0 rounded-4 shadow feature-card"
                style={{
                  backgroundColor: "#111",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
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
                <h5
                  className="fw-semibold"
                  style={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    fontWeight: 600, // Medium
                  }}
                >
                  {f.title}
                </h5>
                <p
                  style={{
                    color: "#d1d5db",
                    fontSize: "1rem",
                    marginTop: "0.75rem",
                    lineHeight: "1.5",
                    fontWeight: 400, // Regular
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
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </section>
  );
}

export default Features;
