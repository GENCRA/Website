// Install prerequisites if not done:
// npm install react-bootstrap bootstrap react-icons @splinetool/react-spline

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { RiBuilding4Line, RiHomeSmileLine } from "react-icons/ri";
import Spline from "@splinetool/react-spline";

export default function Model() {
  return (
    <Container fluid className="py-5" style={{ background: "#000" }}>
      <Row className="align-items-center">
        {/* Text Section */}
        <Col md={6} className="mb-4">
          {/* Institutional Model */}
          <Card className="shadow-sm mb-4 border-0" style={{ background: "#000", color: "#fff" }}>
            <Card.Body>
              {/* Icon */}
              <div
                style={{
                  backgroundColor: "#222",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                  color: "#4dabf7",
                  fontSize: 30,
                }}
              >
                <RiBuilding4Line />
              </div>

              {/* Title (same as Problem/Solution title font) */}
              <Card.Title
                style={{
                  color: "#4dabf7",
                  fontWeight: "700", // bold like Problem/Solution
                  fontSize: "1.8rem", // match section heading
                  marginBottom: "1rem",
                }}
              >
                Institutional Model (Phase 1)
              </Card.Title>

              {/* Description (same as Problem/Solution body text) */}
              <Card.Text
                style={{
                  fontSize: "1.25rem", // match body text size
                  fontWeight: "300", // regular weight
                  color: "#ddd",
                  lineHeight: "1.6",
                }}
              >
                <ul>
                  <li>
                    Deployed in <strong>schools, colleges, hospitals, and offices</strong>.
                  </li>
                  <li>
                    Provides <strong>on-demand emotional support sessions</strong> (30–45 minutes).
                  </li>
                  <li>Detects emotions in real time.</li>
                  <li>
                    Guides users with <strong>personalized comfort, motivation, and reflection</strong>.
                  </li>
                  <li>Continuously tracks vitals during sessions.</li>
                  <li>
                    Creates a safe, private space to uplift mood and regain focus.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Personal Model */}
          <Card className="shadow-sm border-0" style={{ background: "#000", color: "#fff" }}>
            <Card.Body>
              {/* Icon */}
              <div
                style={{
                  backgroundColor: "#222",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                  color: "#66bb6a",
                  fontSize: 30,
                }}
              >
                <RiHomeSmileLine />
              </div>

              {/* Title */}
              <Card.Title
                style={{
                  color: "#66bb6a",
                  fontWeight: "700", // bold like Problem/Solution
                  fontSize: "1.8rem",
                  marginBottom: "1rem",
                }}
              >
                Personal Model (Phase 2)
              </Card.Title>

              {/* Description */}
              <Card.Text
                style={{
                  fontSize: "1.25rem", // match body text
                  fontWeight: "300",
                  color: "#ddd",
                  lineHeight: "1.6",
                }}
              >
                <ul>
                  <li>
                    Designed for <strong>24/7 companionship and monitoring at home</strong>.
                  </li>
                  <li>Offers continuous emotional support and health monitoring.</li>
                  <li>Provides comprehensive emotional and biological insights.</li>
                  <li>
                    Detects extreme emotional conditions and <strong>triggers timely warnings</strong>.
                  </li>
                  <li>
                    Sends <strong>live location alerts</strong> to caregivers or family.
                  </li>
                  <li>
                    Integrates with doctors and caregivers for <strong>personalized interventions</strong>.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Spline 3D Model Section */}
        <Col md={6} className="text-center">
          <div
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <Spline scene="https://prod.spline.design/aX0xPLOafrv8Xx3s/scene.splinecode" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
