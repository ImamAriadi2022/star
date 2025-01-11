import React from "react";
import { Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Footer.css"; // Pastikan untuk mengimpor file CSS

function Footer() {
  return (
    <footer className="footer bg-white text-dark py-3">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav>
          <Nav.Link as={Link} to="/" className="text-dark">Influencer</Nav.Link>
          <Nav.Link as={Link} to="/" className="text-dark">Starpowers VIP</Nav.Link>
          <Nav.Link as={Link} to="/" className="text-dark">FAQ</Nav.Link>
          <Nav.Link as={Link} to="/" className="text-dark">News</Nav.Link>
        </Nav>
        <div>
          <p className="mb-0">&copy; {new Date().getFullYear()} Starpowers. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;