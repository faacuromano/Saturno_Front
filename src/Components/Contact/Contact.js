import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {

  const form = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bi7vwtq', 'template_xwpoj3g', form.current, 'RERaAk2SC1-ojAP5A')
      .then((result) => {
          console.log(result.text);
          setMensajeEnviado(true);
          limpiarCampos();

          setTimeout(() => {
          setMensajeEnviado(false);
        }, 3000);

      }, (error) => {
          alert("Ha ocurrido un error. Vuelve a intentar.")
          console.log(error.text);
      });
  };

  const [nameContact, setNameContact] = useState("");
  const [emailContact, setEmailContact] = useState("");
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

  // ===========

  const nameContactHandler = (e) => {
    setNameContact(e.target.value);
  };

  const emailContactHandler = (e) => {
    setEmailContact(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const limpiarCampos = () => {
    setNameContact("");
    setEmailContact("");
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
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control 
                type="text"  
                name="user_name"
                onChange={nameContactHandler}
                value={nameContact} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control 
                type="email" 
                name="user_email"
                onChange={emailContactHandler}
                value={emailContact} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mensaje:</Form.Label>
              <Form.Control 
                name="message"
                as="textarea"
                rows={4}
                onChange={messageHandler}
                value={message} />
            </Form.Group>
            {mensajeEnviado && <p style={{ color: 'green', padding: '10px', margin: '10px', textAlign: 'center', fontFamily: 'Roboto'}}>Mensaje enviado</p>}
            <Button
                type="submit" 
                value="Send" 
                onClick={sendEmail}
                variant="primary" 
                className="mt-4">
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
