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
      <Row className="justify-content-center content2 py-4 align-items-center">
        <Col xs={10} md={4} className="my-3 my-lg-0 text-end">
          <h1 className="text-white font-weight-bold">
            Buscá los mejores negocios en tu zona y pedí tu turno
          </h1>
          <Link to={"/buscar"}>
            <Button color="primary">
              <FiSearch /> Buscar
            </Button>
          </Link>
        </Col>
        <Col xs={8} md={3}>
          <Image src={empleada1} fluid roundedCircle />
        </Col>
      </Row>
    </div>
  );
};

export default Content1;
