import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ChangePassword = () => {
  return (
    <Container className="pt-3 pb-5">
      <Row className="justify-content-center text-start pb-5">
        <Col xs={12} lg={10} xl={7} className="border-bottom pb-4">
          <h1>Recuperar contraseña</h1>
        </Col>
        <Col xs={12} lg={10} xl={7} className="mt-4">
          <p>
            Ingrese su e-mail y le enviaremos a su casilla de correo los paso a
            seguir para <strong>recuperar su contraseña.</strong>
          </p>
          <Form>
            <Form.Group>
              <Form.Label>E-mail:</Form.Label>
              <Form.Control type="email" placeholder="ejemplo@gmail.com" />
            </Form.Group>
            <Button variant="primary" className="mt-3">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
