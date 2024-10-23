import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function AboutUs() {
  return (
    <Container id='about-us'>
      <h1 className="my-5 text-center aboutHead">About Us</h1>
      <Row className="d-flex align-items-center row1 my-5 justify-content-around gx-5">
        <Col md={6} xs={12} xl={7} className="col1 me-3">
          <p className="lead">Hey There!</p>
          <p>
          We are three dedicated students from Wise Indian Academy, Ajman, united by our passion for technology and environmental sustainability. Together, we are working on an innovative Air Quality Detection System, aiming to raise awareness about air pollution and its impact on health and the environment.
          Together, we strive to create a functional and user-friendly air quality detection system that will not only enhance our understanding of local air quality but also promote healthier living environments. We are excited to contribute positively to our community and raise awareness about the importance of clean air.
          </p>
        </Col>
        <Col className='text-center'>
          

            <h2 className='m-4'>Nivedhya</h2>
            <h2 className='m-4'>Minha</h2>
            <h2 className='m-4'>Niranjana</h2>
          
        </Col>
      </Row>
      
    </Container>
  );
}

export default AboutUs