import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/WhatsApp_Image_2024-10-23_at_11.52.30_PM-removebg-preview.png";
import Login from "./Login";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [modalShow, setModalShow] = useState(false);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };


  return (
    <>
      {modalShow ? <Login setModalShow={setModalShow} /> : ""}
      <Navbar collapseOnSelect expand="md" className="navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="mh-50"  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto kar">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                id={"link"}
                onClick={() => onUpdateActiveLink("home")}
              >
                <h1>Home</h1>
              </Nav.Link>
              {/* <Nav.Link
                href="#add"
                className={
                  activeLink === "add" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("add")}
                id={"link"}
              >
                Add
              </Nav.Link> */}
              <Nav.Link
                href="#features"
                className={
                  activeLink === "features"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("features")}
                id={"link"}
              >
                <h1>Features</h1>
              </Nav.Link>
              <Nav.Link
                href="#about-us"
                className={
                  activeLink === "about-us"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about-us")}
                id={"link"}
              >
                <h1>About Us</h1>
              </Nav.Link>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
