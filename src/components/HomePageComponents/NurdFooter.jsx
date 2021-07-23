import React from "react";
import { Container, Navbar } from "react-bootstrap";
import NurdLogo from "../../images/icon/Nurd-icon.png";

export default function NurdFooter() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              roundedCircle
              src={NurdLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            &copy; 2021
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
