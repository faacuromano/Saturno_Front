import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { verficarEmail } from "../../functions/otherMethods";

const Verificacion = () => {
  const [username, setUsername] = useState();
  const usernameHandler = (e) => setUsername(e.target.value);

  const [message, setMessage] = useState("Ingrese un username");

  const validarCuenta = () => {
    if (username) {
      verficarEmail(username).then(function (response) {
        if (response) {
          setMessage(response.data);
        } else {
          setMessage("Usuario no encontrado");
        }
      });
    } else {
      setMessage("Asegurese de ingresar un username");
    }
  };

  return (
    <Container className="vh-100">
      <Row className="justify-content-center">
        <Col xs={8}>
          <Form className="text-start">
            <FormGroup>
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={usernameHandler}
              />
            </FormGroup>
            <Button onClick={validarCuenta} className="mt-3">
              Verificar
            </Button>
          </Form>
          <p>{message}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Verificacion;
