import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';


export default function Home() {
  return(
    <Row >
      <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
        <div>
          <h1>Chat Anytime, Anywhere</h1>
          <p>Chat Hub lets you connect with the world</p>
          <LinkContainer to="/chat">
            <Button variant="primary">
              Get Started <i className = "fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg"></Col>
    </Row>
  );
}
