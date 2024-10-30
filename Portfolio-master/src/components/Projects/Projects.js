import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import amazon from '../../Assets/amazon.jpg'
import netflix from '../../Assets/netflix.jpg'
import forum from '../../Assets/forum.jpg'
import apple from '../../Assets/apple.jpg'
import menu from '../../Assets/evangadiMenu.jpg'
import suicide from "../../Assets/Projects/suicide.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Full-Stack Amazon Clone"
              description="A Full-Stack Amazon clone built with React and Node.js features a dynamic product catalog,user authentication and secure database integration via Firebase. Userscan browse, add items to a cart, and proceed through a streamlined checkout process. Firebase handles authentication, ensuring secure logins and real-time data management"
              ghLink="https://github.com/BamanGirma/Amazon-clone"
              demoLink="https://amazon-clone63.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="A Netflix clone built with React integrates The Movie Database API to display trending shows and movies. Users can browse genres, view detailed information, and play trailers, simulating a Netflix-like experience. The responsive design and seamless API integration create an immersive movie-browsing platform."
              ghLink="https://github.com/BamanGirma/netflix"
              demoLink="https://netflix-six-beta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forum}
              isBlog={false}
              title="Evagadi Forum"
              description="The Evangadi Forum, developed with React, Node.js, and MySQL, serves as a Q&A platform similar to Stack Overflow. Users can post questions, provide answers, and engage in discussions on tech topics. With robust database management, user authentication, and a clean, responsive UI, it fosters a supportive learning community."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple}
              isBlog={false}
              title="Apple Full-Stack"
              description="A Full-Stack Apple clone built with React, Node.js, and Bootstrap replicates Apple’s sleek design, showcasing products with a responsive layout. Users can explore product pages and experience a refined UI, reflecting Apple’s minimalist style and functionality."
              ghLink="https://github.com/BamanGirma/AppleFullStack"
              demoLink="https://apple-full-stack-from-json-file.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={menu}
              isBlog={false}
              title="Evangadi Menu"
              description="The Evangadi Food Menu, developed with React and Bootstrap, offers a user-friendly interface to explore a diverse range of dishes. Customers can view detailed descriptions, images, and prices, all presented in a responsive design that enhances the dining experience."
              ghLink="https://github.com/BamanGirma/EvangadiMenu"
              demoLink="https://evangadi-menu-one.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://apple-full-stack-from-json-file.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
