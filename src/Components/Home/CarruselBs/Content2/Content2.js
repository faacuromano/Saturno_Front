import React from "react";

import "./Content2.css";

import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Content1 = () => {
  const empleada1 = require("./peluquera1.jpeg");

  return (
    <div>
      <Row className="justify-content-center content inner-shadow py-4 align-items-center">
        <Col xs={6} md={5} lg={3} className="d-md-none">
          <Image src={empleada1} fluid roundedCircle className="shadow" />
        </Col>
        <Col
          xs={10}
          md={6}
          lg={5}
          xl={4}
          className="my-3 my-lg-0 text-md-end text-center"
        >
          <h1 className="text-white font-weight-bold my-3">
            Buscá los mejores negocios en tu zona y pedí tu turno
          </h1>
          <Link to={"/buscar"}>
            <Button variant="light">
              <FiSearch /> Buscar
            </Button>
          </Link>
        </Col>
        <Col xs={6} md={5} lg={3} className="d-none d-md-flex">
          <Image src={empleada1} fluid roundedCircle className="shadow" />
        </Col>
      </Row>
    </div>
  );
};

export default Content1;
