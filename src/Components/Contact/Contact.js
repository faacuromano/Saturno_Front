import React, { useRef, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const [nameContact, setNameContact] = useState("");
  const [emailContact, setEmailContact] = useState("");
  const [subjectContact, setSubjectContact] = useState("");
  const [message, setMessage] = useState("");

  // Error validation setters
  const [errors, setErrors] = useState({});
  const [errorsValidation, setErrorsValidation] = useState("");
  const inputNameContact = useRef(null);
  const inputNameLast = useRef(null);
  const inputEmail = useRef(null);
  const inputPhoneNumber = useRef(null);
  const inputUbication = useRef(null);

  // Validations

  // Name 
  const nameValidation = () => {
    if (nameContact === "") {
      setErrors({ ...errors, nameContact: "Campo obligatorio." });
    } else if (nameContact.length > 25) {
      setErrors({
        ...errors,
        nameContact: "Debe contener no más de 25 caracteres.",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.nameContact;
      setErrors(_errors);
    }
  };

  // Mail

  const emailHandler = (e) => {
    setEmailContact(e.target.value);
  };

  const emailValidation = () => {
    const validEmail = "@";
    const correct = emailContact.match(validEmail);
    if (emailContact === "") {
      setErrors({ ...errors, emailContact: "Campo obligatorio." });
    } else if (!correct) {
      setErrors({ ...errors, emailContact: "Ingrese un email correcto." });
    } else {
      let _errors = { ...errors };
      delete _errors.emailContact;
      setErrors(_errors);
    }
  };

  // Asunto 
  const subjectValidation = () => {
    if (subjectContact.length > 70) {
      setErrors({
        ...errors,
        subjectContact: "No debe contener más de 70 caracteres.",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.subjectContact;
      setErrors(_errors);
    }
  };

  // ===========

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
                  onBlur={nameValidation}
                  value={nameContact}

                />
                {errors.nameContact && (
                  <div className="errors">{errors.nameContact}</div>
                )}
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>E-mail:</Form.Label>
                <Form.Control
                  type="email"
                  onChange={emailContactHandler}
                  onBlur={emailValidation}
                  value={emailContact}
                />
              {errors.emailContact && (
                <div className="errors">{errors.emailContact}</div>
              )}
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>Asunto:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={subjectContactHandler}
                  value={subjectContact}
                  onBlur={subjectValidation}
                />
                {errors.subjectContact && (
                  <div className="errors">{errors.subjectContact}</div>
                )}
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
