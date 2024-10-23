import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Add() {
  const [compartment, setCompartment] = useState("Compartment1");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const Submit = () => {
    const info = {
      name: name,
      compartment: compartment,
      time: time,
    };
    console.log(info);
    
  };
  return (
    <div className="add" id="add">
      <h1 className="h1 text-center mt-5 h1Text pt-5">{`Add a new Medicine`}</h1>
      <Form className="rounded p-4 p-sm-3 formI">
        <Form.Group
          as={Row}
          className="formGrp"
          controlId="formHorizontalName my-5"
        >
          <Form.Label column sm={2}>
            Compartment Name
          </Form.Label>
          <Col sm={10}>
            <Form.Select aria-label="Default select example">
              <option onClick={() => setCompartment("Compartment1")}>
                Compartment 1
              </option>
              <option onClick={() => setCompartment("Compartment2")}>
                Compartment 2
              </option>
              <option onClick={() => setCompartment("Compartment3")}>
                Compartment 3
              </option>
              <option onClick={() => setCompartment("Compartment4")}>
                Compartment 4
              </option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className=" my-5" controlId="formHorizontalText">
          <Form.Label column sm={2}>
            Name of the Medicine
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Name of the Medicine"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="my-5" controlId="formHorizontalText">
          <Form.Label column sm={2}>
            Time ⏲
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              aria-label="Text input with dropdown button"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Button
          variant="primary"
          
          type="submit"
          onClick={() => Submit()}
        >
          {" "}
          Submit ➕{" "}
        </Button>
      </Form>
    </div>
  );
}

export default Add;
