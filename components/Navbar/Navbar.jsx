import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { CiLogin, CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbarr = () => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    loadUser(); 


    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
    };
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          E-commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto align-items-center">
            {user && <span className="text-white me-2">Hi / {user}</span>}
            {user ? (
              <Button
                variant="outline-light"
                onClick={handleLogout}
                className="d-flex align-items-center border-0"
              >
                <CiLogout style={{ fontSize: "30px", marginRight: "10px" }} />
                Logout
              </Button>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                <CiLogin style={{ fontSize: "30px", marginRight: "10px" }} />
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;