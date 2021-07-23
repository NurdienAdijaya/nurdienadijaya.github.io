import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import NurdCoverLarge from "../../images/nurd-cover-large.png";

export default function NurdHomeContent() {
  return (
    <div>
      <Card id="about" className="bg-dark text-white">
        <Card.Img src={NurdCoverLarge} alt="Card image" />
        <Card.ImgOverlay>
          <Row className="h-100">
            <Col xs={7} className="m-auto">
              <Card.Title className="h1 nurd-title">
                Code, Videograph, and Music
              </Card.Title>
              <Card.Text className="h-5 nurd-text">
                Hi, I'm Nurdien Adijaya. A passionate Front End Developer,
                Videography and Musician
                <br />
                based in the Indonesia, focus on crafting quality.
              </Card.Text>
              <Card.Text></Card.Text>
            </Col>
            <Col xs={5}></Col>
          </Row>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
