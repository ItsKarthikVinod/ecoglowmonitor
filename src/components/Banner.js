import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import robot from '../assets/img/project_final.png'

function Banner() {
  return (
    <section className="banner md-padding-8%" id="home">
      <Container>
        <Row className="align-items-center row1">
          <Col md={6} xs={12} xl={7} className="col1">
            <h1>{`Eco-Glow Air Monitor`}</h1>
            <p>
            Eco glow air monitor for a greener tomorrow 🍀!!
            </p>
            {/* <button className="addNewBtn">
              <a href="#add" className="text-decoration-none link-add-new">Add new Medicine</a>
            </button> */}
            <button className="learnBtn">
              <a href="#features" className="text-decoration-none link-learn">Learn More</a>
            </button>
          </Col>
          <Col md={6} xs={12} xl={5} className="col1">
            <img className="img-fluid" src={robot} alt="Robot" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
