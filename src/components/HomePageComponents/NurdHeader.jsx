import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import NurdLogo from "../../images/icon/Nurd-icon.png";

export default function NurdHeader() {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <Image
              className="nurd-logo"
              src={NurdLogo}
              alt="nurdien-logo"
              roundedCircle
              width="50px"
              href="/"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#skills">My Skills</Nav.Link>
              <Nav.Link href="#certificate">Certificate</Nav.Link>
              <NavDropdown title="Portofolio" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Portofolio 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Portofolio 2</NavDropdown.Item>
                <NavDropdown.Item href="/TMDB">
                  The Movie Database
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Testimonial</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Contact" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  href="https://www.linkedin.com/in/nurdienadijaya/"
                  target="_blank"
                >
                  LinkedIn
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.instagram.com/nurdienadijaya/"
                  target="_blank"
                >
                  Instagram
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.youtube.com/channel/UCwsgYSgdN0KXhRo82EO4bvg"
                  target="_blank"
                >
                  Youtube
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nurdienadijaya@gmail.com"
                target="_blank"
              >
                Hire Now!
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
