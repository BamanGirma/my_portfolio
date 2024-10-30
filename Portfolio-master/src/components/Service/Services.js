import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCards from "./ServiceCards";
import Particle from "../Particle";
import frontend from '../../Assets/frontend.png'
import backend from '../../Assets/backend.png'
import api from '../../Assets/api.png'
import fullstack from '../../Assets/fullstack.png'
import techsupport from '../../Assets/technical.png'
// import { LuPaintbrush2 } from "react-icons/lu";



function Services() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Services</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          
            <ServiceCards
              imgPath={frontend}
              title="Front End Development"
              description="Building dynamic, pitch-perfect, easy-to-scale web designs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServiceCards
              imgPath={backend}
              title="Back End Development"
              description="Developing server-side applications and services using established development frameworks and tools"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServiceCards
              imgPath={api}
              title="API Development"
              description="Designing and implementing RESTful APIs as well as integrating third-party features into websites"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServiceCards
              imgPath={fullstack}
              title="Full Stack Development"
              description="Developing front-end and back-end components of web applications"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServiceCards
              imgPath={techsupport}
              title="Technical Support"
              description="I provide remote and in-person assistance on Software/Hardware diagnostics, Data recovery, Network Diagnostics and others"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
