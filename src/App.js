
import './App.css';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Image,
    Card,
    Col,
    Row,
    Carousel
 } from "react-bootstrap";
import NurdLogo from "./images/icon/Nurd-icon.jpeg"
import NurdCoverLarge from "./images/nurd-cover-large.png"
import HtmlLogo from "./images/icon/html.png"
import CssLogo from "./images/icon/css.png"
import SassLogo from "./images/icon/scss.png"
import JavascriptLogo from "./images/icon/javascript.png"
import BootstrapLogo from "./images/icon/bootstrap.png"
import ReactLogo from "./images/icon/react.png"
import "./App.css"
import HtmlCssCertificate from "./images/Certificate-png/nurd-html-css.png"
import JsCertificate from "./images/Certificate-png/nurd-js.png"
import SassCertificate from "./images/Certificate-png/nurd-sass.png"
import GitCertificate from "./images/Certificate-png/nurd-git.png"
import CmdCertificate from "./images/Certificate-png/nurd-cmd.png"

function App() {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/"><Image
              className="nurd-logo"
              src={NurdLogo}
              alt="nurdien-logo" roundedCircle
              width="50px"
              href="/"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">    
            </Nav>
            <Nav >
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#skills">My Skills</Nav.Link>
              <Nav.Link href="#certificate">Certificate</Nav.Link>
              <NavDropdown title="Portofolio" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Portofolio 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Portofolio 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Testimonial</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Contact" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://www.linkedin.com/in/nurdienadijaya/" target="_blank">LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="https://www.instagram.com/nurdienadijaya/" target="_blank">Instagram</NavDropdown.Item>
                <NavDropdown.Item href="https://www.youtube.com/channel/UCwsgYSgdN0KXhRo82EO4bvg" target="_blank">Youtube</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nurdienadijaya@gmail.com" target="_blank">Hire Now!</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
              <br/>
              based in the Indonesia, focus on crafting quality.                
            </Card.Text>
            <Card.Text >
            </Card.Text>
          </Col>
          <Col xs={5}></Col>
        </Row>              
        </Card.ImgOverlay>
      </Card>
      <Container fluid className="text-center my-5">
        <Container className="mb-5">
          <h1 id="skills">My Skills</h1>
        </Container>
        <Container className="d-flex justify-content-evenly flex-wrap">
        <Image className="skills-image" src={HtmlLogo} rounded width="185px"/>
        <Image className="skills-image" src={CssLogo} rounded width="185px"/>
        <Image className="skills-image" src={SassLogo} rounded width="185px"/>
        <Image className="skills-image" src={JavascriptLogo} rounded width="185px"/>
        <Image className="skills-image" src={BootstrapLogo} rounded width="185px"/>
        <Image className="skills-image" src={ReactLogo} rounded width="185px"/>
        </Container>
      </Container>
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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="" roundedCircle
              src={NurdLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          &copy; 2021
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  )
}
export default App;
