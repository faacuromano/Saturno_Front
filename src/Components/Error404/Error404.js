import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  const logoSolo = require("./logo-solo.png");
  return (
    <Container className="px-0">
      <Row>
        <Col xs={12} className="mt-5">
          <img src={logoSolo} className="logo-solo" alt="" />
        </Col>
        <Col xs={12} className="pb-5">
          <p className="display-6 my-5">
            <strong>Ups!</strong> La página que estas buscando no se encuentra
            disponible.
          </p>
          <p className="my-5">
            Hacé click{" "}
            <Link to={"/"} className="colorLink">
              {" "}
              acá!
            </Link>{" "}
            para volver a la home <br /> o podes dirigirte a cualquier otra
            página desde nuestra navbar.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;
