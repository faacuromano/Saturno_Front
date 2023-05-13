import React from "react";
import "./AboutUs.css";

import { Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";

const AboutUs = () => {
  const imgAboutUs = require("./saturnoApp.png");
  return (
    <Container className="py-3 px-0">
      <Row className="justify-content-center text-start">
        <Col xs={12} lg={10} xl={7} className="border-bottom pb-4">
          <h1>Sobre nosotros</h1>
        </Col>
        <Col xs={12} lg={10} xl={7} className="my-4">
          <h5>Quienes somos</h5>
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
        <Col xs={12} className="px-0">
          <Image src={imgAboutUs} fluid />
        </Col>
        <Col xs={12} lg={10} xl={7} className="mt-5">
          <p>
            Nuestra Experiencia nos demuestra que ninguna empresa se maneja del
            mismo modo que otra de rubro similar, por lo tanto nuestro software
            es adaptable a las necesidades del Cliente. <br />{" "}
          </p>
          <p>
            Nuestros servicios están orientados a que su empresa logre optimizar
            al máximo los recursos, logrando aprovechar los tiempos para ser{" "}
            <strong>mas competitivos.</strong>
          </p>
          <p>
            Utilizando herramientas como, por ejemplo: copias en internet,
            permitiéndole utilizar los beneficios que esta tecnología de punta
            permite alcanzar. Aguante facu capo boca.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
