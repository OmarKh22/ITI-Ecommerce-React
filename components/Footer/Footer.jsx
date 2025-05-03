import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container className="py-4 ">
        <Row className="g-4">
          <Col md={4}>
            <h5>Ecommerce</h5>
            <p>
              Your one-stop online store for electronics, clothing, jewelry, and
              more. Shop with confidence and enjoy fast shipping!
            </p>
          </Col>
          <Col md={4} className="ms-auto">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link as={NavLink} to="/" className="text-white p-0 mb-2">
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                className="text-white p-0 mb-2"
              >
                About
              </Nav.Link>
              
            </Nav>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Ecommerce ITI. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
