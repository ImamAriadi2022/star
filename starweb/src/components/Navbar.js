import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img src="navbar/logo.png" alt="Starpowers" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link className="text-white" as={Link} to="/">Influencer</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/">Starpowers VIP</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/">FAQ</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/">News</Nav.Link>
            <Button variant="outline-light" as={Link} to="/">Join Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
