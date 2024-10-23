import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import alarm from '../assets/img/realtime.jpeg'
import web from '../assets/img/affordable.jpeg'
import automatic from '../assets/img/alerts.jpeg'
import water from '../assets/img/users.jpeg'

function Features() {
  return (
    <section id="features">
      <h1 className="my-5 text-center text-4xl h1">Features of the System</h1>
      <div className="alarm">
        <Container>
          <Row className="my-5 w-100">
            <Col xs={{ order: "last" }} lg={{ order: "first" }}>
              <div className="imgContainer ">
                <img src={alarm} alt="Alarm System" className='rounded-circle img-thumbnail' />
              </div>
            </Col>
            <Col>
              <h2 className="text-center">Real-Time Air Quality Detection ⏱️</h2>
              <p>
              The system continuously monitors harmful pollutants such as PM2.5 (fine particles), PM10 (coarse particles), and CO2. These pollutants are detected with high accuracy, allowing immediate insights into the surrounding air quality in industrial or public spaces.
              </p>
            </Col>
          </Row>
          <Row className="my-5">
            <Col>
              <h2 className="text-center">LED Indicator System 
              🚨 </h2>
              <p>
              Green Light: Signals that air quality is safe and healthy, with low levels of pollution, ensuring it’s safe to work or stay in the environment.
Yellow Light: Indicates moderate air quality, suggesting some pollutants are present but still within acceptable limits. Users are cautioned to monitor their exposure, especially those sensitive to pollutants.
Red Light: Alerts that air quality has deteriorated to unhealthy levels, recommending immediate precautions to minimize exposure to hazardous air.
              </p>
              
              
            </Col>
            <Col sm={{ order: "last" }}>
              <div className="imgContainer">
                <img src={web} alt="Web Connectivity" className='rounded-circle img-thumbnail' />
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs={{ order: "last" }} lg={{ order: "first" }}>
              <div className="imgContainer">
                <img
                  src={automatic}
                  alt="Automatic Opening and Closing Compartments"
                  className='rounded-circle img-thumbnail'
                />
              </div>
            </Col>
            <Col>
              <h2 className="text-center">
              Affordable Design 💲
              </h2>
              <p>
              Built using low-cost sensors and simple electronics, the Eco-Glow Air Monitor is designed to be budget-friendly without compromising on performance. This makes it an accessible solution for a wide range of users, from industries to small businesses.
              </p>
            </Col>
          </Row>
          <Row className="my-5">
            <Col>
              <h2 className="text-center">User-Friendly Alerts with LEDs 👨 </h2>
              <p>
              The LED color system allows for quick visual recognition of air quality changes without the need for technical expertise. This makes it highly efficient for immediate assessment, enabling users to react swiftly to poor air conditions.
              </p>
            </Col>
            <Col>
              <div className="imgContainer grad" >
                <img src={water} alt="Inbuilt Water Dispenser" className='rounded-circle '/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Features