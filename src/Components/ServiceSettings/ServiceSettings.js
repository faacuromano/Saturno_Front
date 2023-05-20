import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ServiceSettings = () => {
  return (
    <Container>
      <Row className="justify-content-center text-start">
        <Col xl={7}>
          <h3>Servicios</h3>
          <p>A continuación se mostrarán tus servicios o crea uno nuevo</p>
        </Col>
        <Col xl={7}>
          <Form>
            <Form.Group className="my-4">
              <Form.Label>Nombre del servicio:</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Precio:</Form.Label>
              <Form.Control type="numb"/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Descripción:</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Duración:</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceSettings;
