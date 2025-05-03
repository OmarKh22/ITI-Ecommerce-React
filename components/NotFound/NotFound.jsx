import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5 min-vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
      <Row>
        <Col className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <h2>Page Not Found</h2>
          <p className="my-4">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>
          <Button variant="primary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
