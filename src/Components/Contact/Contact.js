import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const [nameContact, setNameContact] = useState("");
  const [emailContact, setEmailContact] = useState("");
  const [subjectContact, setSubjectContact] = useState("");
  const [message, setMessage] = useState("");

  const nameContactHandler = (e) => {
    setNameContact(e.target.value);
  };

  const emailContactHandler = (e) => {
    setEmailContact(e.target.value);
  };

  const subjectContactHandler = (e) => {
    setSubjectContact(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const limpiarCampos = () => {
    setNameContact("");
    setEmailContact("");
    setSubjectContact("");
    setMessage("");
  };

  return (
    <>
      <Container className="py-3">
        <Row className="justify-content-center text-start">
          <Col xs={12} lg={10} xl={7} className="border-bottom pb-4 mb-4">
            <h1>Contacto</h1>
          </Col>
          <Col xs={12} lg={10} xl={7}>
            <p>
              <b>¿Tienes una consulta?</b> No dudes en escribirnos.
            </p>
          </Col>
          <Col xs={12} lg={10} xl={7} className="mt-2">
            <Form>
              <Form.Group>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={nameContactHandler}
                  value={nameContact}
                />
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>E-mail:</Form.Label>
                <Form.Control
                  type="email"
                  onChange={emailContactHandler}
                  value={emailContact}
                />
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>Asunto:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={subjectContactHandler}
                  value={subjectContact}
                />
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>Mensaje:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={messageHandler}
                  value={message}
                />
              </Form.Group>
              <Button variant="primary" className="mt-4">
                Enviar
              </Button>
              <Button
                variant="secondary"
                className="mt-4 mx-2"
                onClick={limpiarCampos}
              >
                Resetear
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
