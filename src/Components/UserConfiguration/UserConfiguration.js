import React, { useState, useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";

const UserConfiguration = () => {
  //catch del user en la local host
  const [user, setUser] = useState([]);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("user"));
    setUser(usuario);

    setName(usuario.nombre);
    setLastName(usuario.apellido);
    setEmail(usuario.mail);
    setFechaNac(usuario.fechaNacimiento);
    setPhoneNumber(usuario.numTelefono);
  }, []);

  //set de la info en los inputs
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [ubication, setUbication] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const fechaNacHandler = (e) => {
    setFechaNac(e.target.value);
  };

  const ubicationHandler = (e) => {
    setUbication(e.target.value);
  };

  const imgPerfil = require("./foto-usuario.jpg");
  return (
    <Container className="py-3">
      <Row className="justify-content-around">
        <Col xs={3} className="text-end border-end pe-4">
          <a href="#change-info" className="fw-bold">
            <p>Modificar información</p>
          </a>
          <a href="#change-password" className="fw-bold">
            <p>Cambiar contraseña</p>
          </a>
        </Col>
        <Col xs={8} className="text-start">
          <Row>
            <Col xs={12} className="border-bottom pb-4 mb-4" id="change-info">
              <h1>Modificar información</h1>
            </Col>
            <Col xs={12}>
              <Form>
                <Form.Group>
                  <Form.Label>Nombre:</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={nameHandler}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Apellido:</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={lastNameHandler}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={emailHandler}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Número de celular:</Form.Label>
                  <Form.Control
                    type="tel"
                    value={phoneNumber}
                    onChange={phoneNumberHandler}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Fecha de nacimiento (yyyy-mm-dd)</Form.Label>
                  <Form.Control
                    type="text"
                    value={fechaNac}
                    onChange={fechaNacHandler}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Ciudad:</Form.Label>
                  <Form.Select
                    aria-label="select your city"
                    value={ubication}
                    onChange={ubicationHandler}
                  >
                    <option>Elija su ciudad</option>
                    <option value="Rosario">Rosario</option>
                    <option value="Arroyo Seco">Arroyo Seco</option>
                    <option value="VGG">Villa Gobernador Galvez</option>
                    <option value="Baigorria">Baigorria</option>
                  </Form.Select>
                </Form.Group>
                <Col xs={8} className="mt-4 border rounded">
                  <Row className="justify-content-center py-4 align-items-center">
                    <Col xs={3}>
                      <Image src={imgPerfil} fluid roundedCircle />
                    </Col>
                    <Col xs={7}>
                      <h5>Cambiar foto de perfil</h5>
                      <Button variant="secondary">Cargar</Button>
                    </Col>
                  </Row>
                </Col>
                <Button variant="primary" className="mt-4">
                  Guardar cambios
                </Button>
              </Form>
            </Col>
            <Col
              xs={12}
              className="border-bottom pb-4 mb-4 mt-5"
              id="change-password"
            >
              <h1>Cambiar contraseña</h1>
            </Col>
            <Col xs={12} className="mt-2">
              <Form>
                <Form.Group>
                  <Form.Label>Contraseña vieja:</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Constraseña nueva:</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Repita la contraseña nueva:</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Button variant="primary" className="mt-4">
                  Cambiar
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserConfiguration;
