import React from "react";

import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Content1 = () => {
  const empleada1 = require("./empleada1.jpg");

  return (
    <div>
      <Row className="justify-content-center content fondo-rojo50 py-4 align-items-center">
        <Col xs={6} md={5} lg={3}>
          <Image src={empleada1} fluid roundedCircle className="shadow" />
        </Col>
        <Col
          xs={10}
          md={6}
          lg={5}
          xl={4}
          className="my-3 my-lg-0 text-md-start text-center index1"
        >
          <h1 className="text-white font-weight-bold my-3">
            El gestor de turnos que tu negocio estaba necesitando
          </h1>
          <Link to={"/profesionales"}>
            <Button variant="primary">
              <FaRegUser /> Ver más
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Content1;
