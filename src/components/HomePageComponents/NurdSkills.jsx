import React from "react";
import { Container, Image } from "react-bootstrap";
import HtmlLogo from "../../images/icon/html.png";
import CssLogo from "../../images/icon/css.png";
import SassLogo from "../../images/icon/scss.png";
import JavascriptLogo from "../../images/icon/javascript.png";
import BootstrapLogo from "../../images/icon/bootstrap.png";
import ReactLogo from "../../images/icon/react.png";
import "./NurdSkills.css";

export default function NurdSkills() {
  return (
    <div>
      <Container fluid className="text-center my-5">
        <Container className="mb-5">
          <h1 id="skills">My Skills</h1>
        </Container>
        <Container className="d-flex justify-content-evenly flex-wrap">
          <Image
            className="skills-image"
            src={HtmlLogo}
            rounded
            width="185px"
          />
          <Image className="skills-image" src={CssLogo} rounded width="185px" />
          <Image
            className="skills-image"
            src={SassLogo}
            rounded
            width="185px"
          />
          <Image
            className="skills-image"
            src={JavascriptLogo}
            rounded
            width="185px"
          />
          <Image
            className="skills-image"
            src={BootstrapLogo}
            rounded
            width="185px"
          />
          <Image
            className="skills-image"
            src={ReactLogo}
            rounded
            width="185px"
          />
        </Container>
      </Container>
    </div>
  );
}
