import React from "react";
import { Carousel, Container } from "react-bootstrap";
import HtmlCssCertificate from "../../images/Certificate-png/nurd-html-css.png";
import JsCertificate from "../../images/Certificate-png/nurd-js.png";
import SassCertificate from "../../images/Certificate-png/nurd-sass.png";
import GitCertificate from "../../images/Certificate-png/nurd-git.png";
import CmdCertificate from "../../images/Certificate-png/nurd-cmd.png";

export default function NurdCertificates() {
  return (
    <div className="body">
      <Container className="text-center my-5">
        <Container className="mb-5">
          <h1 id="certificate">Certificate</h1>
        </Container>
        <Container>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={HtmlCssCertificate}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={JsCertificate}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SassCertificate}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={GitCertificate}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={CmdCertificate}
                alt="Fifth slide"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </div>
  );
}
