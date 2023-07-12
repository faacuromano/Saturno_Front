import React from "react";

import "./Profesionales.css";

import { Button, Col, Container, Row } from "react-bootstrap";
import { BsPhone } from "react-icons/bs";
import { BsWindow } from "react-icons/bs";
import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";

const Profesionales = () => {
  const logoSolo = require("../logo-solo/logo-solo.png");
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <img src={logoSolo} className="logo-solo" alt="" />
          </Col>
          <Col xs={12} lg={10}>
            <p className="display-6">
              El <strong>sistema de turnos</strong> que necesita tu negocio
            </p>
            <p className="my-4">
              <strong>Suturno</strong> es una aplicación web que te permite
              ordenar y agilizar el procesamiento de turnos. Te permite
              utilizarla en cualquier dispositivo, desde cualquier lugar, entre
              múltiples usuarios al mismo tiempo
            </p>
          </Col>
        </Row>
        <div>
          <Row className="justify-content-center pt-5 pb-4 mt-3 border-top border-bottom">
            <Col xs={12} sm={10} md={7} lg={4} xl={3}>
              <BsPhone className="icon-display texto-rojo" />
              <h4>RESPONSIVE</h4>
              <p>Accede desde cualquier dispositivo</p>
            </Col>
            <Col xs={12} sm={10} md={7} lg={4} xl={3}>
              <BsWindow className="icon-display texto-rojo" />
              <h4>SIMPLE</h4>
              <p>Interfaz simple e intuitiva para un fácil manejo</p>
            </Col>
            <Col xs={12} sm={10} md={7} lg={4} xl={3}>
              <BsShopWindow className="icon-display texto-rojo" />
              <h4>PRESONALIZADO</h4>
              <p>Tu perfil tendrá toda tu información y servicios</p>
            </Col>
          </Row>
        </div>
        <Row className="mt-4">
          <Col xs={12} className="text-center mb-4">
            <h2>Aplicaciones</h2>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Psicólogo</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Docente</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Canchas de futbol</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Peluquero</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Médico</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Estilista</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Kinesiólogo</p>
          </Col>
        </Row>
        <div>
          <Row className="fondo-gris10 py-4 mt-4">
            <Col xs={12}>
              <p className="display-6 texto-rojo mb-2">
                ¿Estás listo para trabajar con <strong>nosotros?</strong>
              </p>
            </Col>
            <Col xs={12} className="index1">
              <Link to={"/signuprofesional"} className="colorLink">
                <Button variant="primary">Crear cuenta profesional</Button>
              </Link>
            </Col>
          </Row>
        </div>
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <p className="mb-0">
              <strong>¿Tenés alguna consulta sobre nuestro servicio?</strong>
            </p>
            <p className="mb-0">
              <strong>¿Tu profesión no aparece en la lista?</strong>
            </p>
            <p className="mb-0">
              No dudes en{" "}
              <Link to={"/contacto"} className="colorLink">
                {" "}
                contactarnos
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profesionales;
