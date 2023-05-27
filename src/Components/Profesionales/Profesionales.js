import React from "react";

import "./Profesionales.css";

import { Button, Col, Container, Row } from "react-bootstrap";
import { BsPhone } from "react-icons/bs";
import { BsWindow } from "react-icons/bs";
import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";

const Profesionales = () => {
  const logoSolo = require("./logo-solo.jpg");
  return (
    <>
      <Container className="px-0">
        <Row>
          <Col xs={12}>
            <img src={logoSolo} className="logo-solo" alt="" />
          </Col>
          <Col xs={12} className="mt-2">
            <p className="display-6">
              El <strong>sistema de turnos</strong> que necesita tu negocio
            </p>
          </Col>
        </Row>
        <div>
          <Row className="fondo-jade justify-content-center justify-content-lg-around text-white pt-5 pb-4 mt-3">
            <Col xs={12} sm={10} md={7} lg={4} xl={3}>
              <BsPhone className="icon-display" />
              <h4>RESPONSIVE</h4>
              <p>Accede desde cualquier dispositivo</p>
            </Col>
            <Col xs={12} sm={10} md={7} lg={4} xl={3}>
              <BsWindow className="icon-display" />
              <h4>SIMPLE</h4>
              <p>Interfaz simple e intuitiva para un fácil manejo</p>
            </Col>
            <Col xs={12} sm={10} md={7} lg={4} xl={3}>
              <BsShopWindow className="icon-display" />
              <h4>PRESONALIZADO</h4>
              <p>Tu perfil tendrá toda tu información y servicios</p>
            </Col>
          </Row>
        </div>
        <Row className="justify-content-center mt-4">
          <Col xs={12} lg={8} className="border-bottom py-3">
            <p>
              <strong>Saturno</strong> es una aplicación web que te permite
              ordenar y agilizar el procesamiento de turnos. Te permite
              utilizarla en cualquier dispositivo, desde cualquier lugar, entre
              múltiples usuarios al mismo tiempo
            </p>
          </Col>
          <Col xs={12} className="text-center mt-4">
            <h1>Aplicaciones</h1>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Alquiler de canchas</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Barberías</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Clubes</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Estéticas</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Gimnasios</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Peluquerías</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Personal trainers</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Salones de eventos</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Services de autos</p>
          </Col>
          <Col xs={6} lg={3}>
            <p className="border py-3 rounded mb-2">Veterinarias</p>
          </Col>
        </Row>
        <div>
          <Row className="fondo-jade py-4 mt-4">
            <Col xs={12}>
              <p className="display-6 text-white mb-2">
                ¿Estás listo para trabajar con <strong>nosotros?</strong>
              </p>
            </Col>
            <Col xs={12}>
              <Link to={"/signuprofesional"} className="colorLink">
                <Button color="primary">Crear cuenta profesional</Button>
              </Link>
            </Col>
          </Row>
        </div>
        <Row className="mt-5">
          <Col xs={12} className="text-center">
            <p className="mb-0">
              <strong>¿Tenés alguna consulta sobre nuestro servicio?</strong>
            </p>
            <p className="mb-0">
              No dudes en{" "}
              <Link to={"/contacto"} className="colorLink">
                {" "}
                contactarnos!
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profesionales;
