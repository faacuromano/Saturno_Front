import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AlertPopUp from "../AlertPopUp/AlertPopUp";
import { validacionesInputs, validacionesInputsEmail, campoObligatorio} from "../../Validations/Validations";

const Contact = () => {
  const form = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (nameContact === "" || emailContact === "" || message == "") {
      setTimeout(() => {
        setOpenPopUp(true);
      }, 0);
    } else if (nameContactError || emailContactError || messageError) {
      setTimeout(() => {
        setOpenPopUp(true);
      }, 0);
    } else {
      emailjs
        .sendForm(
          "service_bi7vwtq",
          "template_xwpoj3g",
          form.current,
          "RERaAk2SC1-ojAP5A"
        )
        .then(
          (result) => {
            console.log(result.text);

            setMensajeEnviado(true);
            limpiarCampos();

            setTimeout(() => {
              setMensajeEnviado(false);
            }, 3000);
          },
          (error) => {
            alert("El mensaje no pudo enviarse. Vuelva a intentarlo.");
            console.log(error.text);
          }
        );
    }
  };

  //estados
  const [nameContact, setNameContact] = useState("");
  const [emailContact, setEmailContact] = useState("");
  const [message, setMessage] = useState("");
  const [openPopUp, setOpenPopUp] = useState(false); // Allows alerts to show up
  // referencias
  const inputNameContact = useRef(null);
  const inputMessage= useRef(null);
  const inputEmail = useRef(null);
  //errores
  const [nameContactError, setNameContactError] = useState("");
  const [emailContactError, setEmailContactError] = useState("");
  const [messageError, setMessageError] = useState("");

  const limpiarCampos = () => {
    setNameContact("");
    setEmailContact("");
    setMessage("");
  };

  return (
    <>
      <Container className="py-3">
        <AlertPopUp
          open={openPopUp}
          onClose={() => setOpenPopUp(false)}
          titulo="Error"
          mensaje="Por favor ingrese los datos correctamente."
        />
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
                  placeholder="Cosme Fulanito"
                  type="text"
                  name="user_name"
                  value={nameContact}
                  ref={inputNameContact}
                  onChange={(e)=> setNameContact(e.target.value)}
                  onBlur={()=> setNameContactError(validacionesInputs(inputNameContact.current))}
                />
                {nameContactError && (
                  <div className="errors"> 
                    {nameContactError}
                  </div>)}
              </Form.Group>
              <Form.Group>
                <Form.Label className="mt-3">Email:</Form.Label>
                <Form.Control
                  placeholder="ejemplo@gmail.com"
                  type="email"
                  name="user_email"
                  onChange={(e)=> setEmailContact(e.target.value)}
                  value={emailContact}
                  ref={inputEmail}
                  onBlur={()=> setEmailContactError(validacionesInputsEmail(inputEmail.current))}
                />
                {emailContactError && (
                  <div className="errors"> 
                    {emailContactError}
                  </div>)}
              </Form.Group>
              <Form.Group>
                <Form.Label className="mt-3">Mensaje:</Form.Label>
                <Form.Control
                  placeholder="Escriba aquí su mensaje..."
                  name="message"
                  as="textarea"
                  rows={4}
                  value={message}
                  ref={inputMessage}
                  onChange={(e)=> setMessage(e.target.value)}
                  onBlur={()=> setMessageError(campoObligatorio(inputMessage.current))}
                />
                {messageError && (
                  <div className="errors"> 
                    {messageError}
                  </div>)}
              </Form.Group>
              {mensajeEnviado && (
                <p
                  style={{
                    color: "green",
                    padding: "10px",
                    margin: "10px",
                    textAlign: "center",
                    fontFamily: "Roboto",
                  }}
                >
                  Mensaje enviado
                </p>
              )}
              <Button
                type="submit"
                value="Send"
                onClick={sendEmail}
                variant="primary"
                className="mt-4"
              >
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
