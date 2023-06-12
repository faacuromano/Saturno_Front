import React from "react";

import "./TipoCuenta.css";

import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const TipoCuenta = () => {
  const fotoCliente = require("./clientes.jpg");
  const fotoProfesional = require("./profesional.jpg");
  return (
    <Container>
      <Row className="justify-content-center text-center pb-4">
        <Col xs={12} lg={10} xl={7} className="pb-3">
          <h1 className="mb-1">Elige una opción</h1>
          <p>¿Qué tipo de cuenta deseas crearte?</p>
        </Col>
        <Col xs={12} lg={10} xl={8}>
          <Row>
            <Col xs={12} md={6} className="d-flex">
              <Card className="align-self-stretch">
                <Card.Img variant="top" src={fotoCliente} />
                <Card.Body>
                  <Card.Title as={"h4"} className="border-bottom pb-3">
                    Cliente
                  </Card.Title>
                  <Card.Text className="position-relative">
                    <ul className="mt-4 mb-5 text-start carta">
                      <li>Saca turnos con tu profesional</li>
                      <li>Organiza tus turnos</li>
                      <li>Busca profesionales por tu zona</li>
                    </ul>
                  </Card.Text>
                  <Button
                    variant="primary"
                    as={Link}
                    to={"/signup"}
                    className="position-absolute top-100 start-50 translate-middle lh-sm"
                  >
                    Cuenta Cliente
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className="mt-5 mt-md-0">
              <Card className="position-relative">
                <Card.Img variant="top" src={fotoProfesional} />
                <Card.Body>
                  <Card.Title as={"h4"} className="border-bottom pb-3">
                    Profesional
                  </Card.Title>
                  <Card.Text>
                    <ul className="mt-4 mb-5 text-start carta">
                      <li>Ofrece tus servicios más facilmente</li>
                      <li>Gestiona tus turnos en el panel de control</li>
                      <li>Envía notificaciones a tus cliente</li>
                      <li>Ofrece diferentes servicios</li>
                    </ul>
                  </Card.Text>
                  <Button
                    variant="primary"
                    as={Link}
                    to={"/signuprofesional"}
                    className="position-absolute top-100 start-50 translate-middle lh-sm"
                  >
                    {" "}
                    Cuenta Profesional
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TipoCuenta;
