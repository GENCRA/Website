// src/Components/ProblemSolution.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  RiEmotionSadLine,
  RiRobot2Line,
  RiHeartPulseLine,
  RiLightbulbLine,
} from "react-icons/ri";

export default function ProblemSolution() {
  return (
    <Container
      fluid
      className="py-5"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Row className="justify-content-center">
        {/* Problem Card */}
        <Col md={6} className="mb-4">
          <Card
            className="h-100 shadow-sm"
            style={{
              backgroundColor: "#111",
              color: "#fff",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <Card.Body>
              {/* Icon */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "#222",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 25,
                  color: "#d9534f",
                }}
              >
                <RiEmotionSadLine size={34} />
              </div>

              {/* Title */}
              <h3
                className="mb-3"
                style={{
                  color: "#d9534f",
                  fontWeight: 500,
                  fontSize: "1.75rem", // increased
                }}
              >
                The Problem
              </h3>

              {/* Content */}
              <ul
                className="list-unstyled"
                style={{
                  fontSize: "1.25rem", // increased
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                <li>
                  <strong>Loneliness</strong> is a global health crisis—affects{" "}
                  <b>1 in 6 people worldwide</b>, contributing to{" "}
                  <b>871,000 deaths annually</b>.
                </li>
                <li>
                  In India: <b>20% of elderly</b> and <b>8–12% of youth</b>{" "}
                  frequently feel lonely.
                </li>
                <li>
                  High risk of depression (2x), dementia (31%), and heart
                  disease due to loneliness.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Solution Card */}
        <Col md={6} className="mb-4">
          <Card
            className="h-100 shadow-sm"
            style={{
              backgroundColor: "#111",
              color: "#fff",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <Card.Body>
              {/* Icon */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "#222",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 25,
                  color: "#0275d8",
                }}
              >
                <RiRobot2Line size={34} />
              </div>

              {/* Title */}
              <h3
                className="mb-3"
                style={{
                  color: "#0275d8",
                  fontWeight: 500,
                  fontSize: "1.5rem", // increased
                }}
              >
                Our Solution
              </h3>

              {/* Content */}
              <ul
                className="list-unstyled"
                style={{
                  fontSize: "1.25rem", // increased
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                <li>
                  <strong>Sathvix Companion Robot:</strong> Combines{" "}
                  <RiLightbulbLine
                    style={{ color: "#0275d8", verticalAlign: "middle" }}
                  />{" "}
                  <strong>emotion recognition</strong> and{" "}
                  <RiHeartPulseLine
                    style={{ color: "#0275d8", verticalAlign: "middle" }}
                  />{" "}
                  <strong>health monitoring</strong> for personalized mental
                  wellness support.
                </li>
                <li>
                  Detects emotions in real time, adapts to individual needs, and
                  provides personalized comfort.
                </li>
                <li>
                  Continuously tracks vitals like heart rate, blood pressure,
                  SpO₂, and sleep.
                </li>
                <li>
                  Always available 24/7, affordable, and scalable with
                  doctor/caregiver integration.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
