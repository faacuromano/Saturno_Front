import React from "react";
import "./AboutUs.css";

import { Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";

const AboutUs = () => {
  const imgAboutUs = require("./saturnoApp.png");
  return (
    <Container className="py-5 px-0">
      <Row className="justify-content-center text-start">
        <Col xs={11} md={10} xl={7} className="border-bottom pb-4">
          <h1>Sobre nosotros</h1>
        </Col>
        <Col xs={11} md={10} xl={7} className="my-4">
          <h5 className="fw-bold mt-1 mb-3">Quienes somos</h5>
          <p>
            <strong>Grupo 4 </strong>es una empresa dispuesta a revolucionar el
            mundo de la informática. Sistemas, Redes, Capacitación y
            Asesoramiento generalizado sobre las distintas tecnologías de última
            generación.
          </p>
          <p>
            <em>
              Desarrollo de sitios y aplicaciones web, aplicaciones
              empresariales, sistemas administrativos, tanto para ambientes web
              como para Windows.
            </em>
          </p>
        </Col>
        <Col xs={12} md={10} xl={7} className="my-4">
          <Image src={imgAboutUs} fluid className="mt-3 mb-2" />
        </Col>
        <Col xs={11} md={10} xl={7}>
          <p>
            Con una trayectoria basada en una sólida formación académica y una
            amistad que se ha fortalecido a lo largo de los años, hemos creado
            un sitio web de alta calidad y nos esforzamos por brindar el mejor
            servicio a nuestros valiosos clientes.
            <br />{" "}
          </p>
          <p>
            Nuestros servicios están orientados a que su empresa logre optimizar
            al máximo los recursos, logrando aprovechar los tiempos para ser{" "}
            <strong>mas competitivos.</strong>
          </p>
          <p>
            La profesionalidad es un pilar fundamental de nuestra empresa. Nos
            esforzamos por cumplir y superar las expectativas de nuestros
            clientes, entregando soluciones innovadoras y personalizadas que se
            adaptan a sus necesidades específicas. Dedicamos tiempo y esfuerzo
            en comprender a fondo los objetivos y desafíos de cada proyecto, lo
            que nos permite ofrecer resultados de calidad y satisfacción
            garantizada.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
