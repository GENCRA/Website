// src/Pages/Howitworks.jsx
import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  RiEmotionHappyLine,
  RiHeartPulseLine,
  RiChatSmile2Line,
  RiAlarmWarningLine,
  RiFileList3Line,
  RiTimeLine,
} from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * HowItWorks page
 * Matches the site's dark theme and uses Poppins font (add to index.html if not present)
 *
 * Place this file at: src/Pages/Howitworks.jsx
 */

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const cardStyle = {
    backgroundColor: "#0f1113", // slightly lighter than pure black for cards
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.04)",
    borderRadius: 12,
  };

  const iconCircle = (bg = "#111") => ({
    background: bg,
    width: 72,
    height: 72,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
  });

  return (
    <Container
      fluid
      className="py-5"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Container style={{ maxWidth: 1100 }}>
        <h1
          className="fw-bold mb-3 text-center"
          style={{ fontSize: "2.25rem", letterSpacing: "0.6px" }}
          data-aos="fade-up"
        >
          How it works
        </h1>

        <p
          className="text-center mb-5"
          style={{ color: "#bfc8d6", fontSize: "1.05rem", lineHeight: 1.6 }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Sathvix Companion Robot combines real-time emotion detection, continuous
          health monitoring and intelligent personalization to support users around
          the clock — and to escalate care automatically when required.
        </p>

        <Row className="g-4">
          {/* 1: Detect Emotions in Real Time */}
          <Col md={6} data-aos="fade-up" data-aos-delay="150">
            <Card style={cardStyle} className="h-100 p-4">
              <div style={iconCircle("#1b2430")}>
                <RiEmotionHappyLine size={34} style={{ color: "#7dd3fc" }} />
              </div>
              <h4 style={{ color: "#e6f7ff", fontWeight: 700 }}>Detect Emotions in Real Time</h4>
              <p style={{ color: "#cbd6e0", fontSize: "1rem", lineHeight: 1.6 }}>
                The robot analyzes facial micro-expressions and vocal cues continuously to
                understand the user's emotional state. Detection runs on-device for low
                latency and privacy — enabling immediate, empathetic responses.
              </p>
            </Card>
          </Col>

          {/* 2: Continuous Health Monitoring */}
          <Col md={6} data-aos="fade-up" data-aos-delay="180">
            <Card style={cardStyle} className="h-100 p-4">
              <div style={iconCircle("#1b2430")}>
                <RiHeartPulseLine size={34} style={{ color: "#ff7aa2" }} />
              </div>
              <h4 style={{ color: "#ffeef6", fontWeight: 700 }}>Continuous Health Monitoring</h4>
              <p style={{ color: "#cbd6e0", fontSize: "1rem", lineHeight: 1.6 }}>
                Tracks vitals — heart rate, blood pressure, SpO₂ and sleep patterns — to build
                a holistic biological profile. Data is aggregated over time to spot trends and
                early warning signs.
              </p>
            </Card>
          </Col>

          {/* 3: Personalized Interaction */}
          <Col md={6} data-aos="fade-up" data-aos-delay="210">
            <Card style={cardStyle} className="h-100 p-4">
              <div style={iconCircle("#1b2430")}>
                <RiChatSmile2Line size={34} style={{ color: "#a8ffb0" }} />
              </div>
              <h4 style={{ color: "#eaffef", fontWeight: 700 }}>Personalized Interaction</h4>
              <p style={{ color: "#cbd6e0", fontSize: "1rem", lineHeight: 1.6 }}>
                The robot responds to detected moods with comforting guidance, interactive tasks,
                short motivational games and music. Interactions adapt to each user's preferences
                and history to feel natural and helpful.
              </p>
            </Card>
          </Col>

          {/* 4: Emergency Alerts & Location Sharing */}
          <Col md={6} data-aos="fade-up" data-aos-delay="240">
            <Card style={cardStyle} className="h-100 p-4">
              <div style={iconCircle("#1b2430")}>
                <RiAlarmWarningLine size={34} style={{ color: "#ffb86b" }} />
              </div>
              <h4 style={{ color: "#fff6e6", fontWeight: 700 }}>Emergency Alerts & Location Sharing</h4>
              <p style={{ color: "#cbd6e0", fontSize: "1rem", lineHeight: 1.6 }}>
                If extreme emotional states or dangerous vitals are detected, the robot triggers
                alerts and can share live location and status with designated caregivers or family
                members for immediate support.
              </p>
            </Card>
          </Col>

          {/* 5: Data Sharing with Caregivers */}
          <Col md={6} data-aos="fade-up" data-aos-delay="270">
            <Card style={cardStyle} className="h-100 p-4">
              <div style={iconCircle("#1b2430")}>
                <RiFileList3Line size={34} style={{ color: "#b9e3ff" }} />
              </div>
              <h4 style={{ color: "#eaf6ff", fontWeight: 700 }}>Data Sharing with Caregivers</h4>
              <p style={{ color: "#cbd6e0", fontSize: "1rem", lineHeight: 1.6 }}>
                Emotion and biological insights are combined into clear, actionable reports that
                caregivers and doctors can use to make faster, personalized intervention decisions.
                Sharing is privacy-first and consent-based.
              </p>
            </Card>
          </Col>

          {/* 6: 24/7 Availability */}
          <Col md={6} data-aos="fade-up" data-aos-delay="300">
            <Card style={cardStyle} className="h-100 p-4">
              <div style={iconCircle("#1b2430")}>
                <RiTimeLine size={34} style={{ color: "#d9d9ff" }} />
              </div>
              <h4 style={{ color: "#f0f0ff", fontWeight: 700 }}>24/7 Availability</h4>
              <p style={{ color: "#cbd6e0", fontSize: "1rem", lineHeight: 1.6 }}>
                Always-on companionship and monitoring — scalable from large institutions to personal
                homes. The system is designed for reliability and low latency, providing support any
                time of day or night.
              </p>
            </Card>
          </Col>
        </Row>

        
      </Container>
    </Container>
  );
}
