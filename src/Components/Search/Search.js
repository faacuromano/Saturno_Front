import React from "react";

import "./Search.css";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FiSearch } from "react-icons/fi";
import Card from "react-bootstrap/Card";

const Search = () => {
  const img1 = require("./canchas.jpg");
  const img2 = require("./gimnasio.jpg");
  const img3 = require("./mecanica.jpg");
  const img4 = require("./peluqueria.jpg");

  return (
    <>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="border-bottom pb-5">
            <h5 className="mb-4">Buscá a tu local favorito</h5>
            <InputGroup>
              <Form.Control
                placeholder="Buscar"
                aria-label="Buscar"
                aria-describedby="Input de busqueda"
              />
              <Button variant="outline-secondary">
                <FiSearch />
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <h5 className="mb-4">O encontrá donde sacar tu turno</h5>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
            <Card>
              <Card.Img fluid variant="top" src={img1} />
              <Card.Title className="text-center mt-2">Canchas</Card.Title>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
            <Card>
              <Card.Img fluid variant="top" src={img2} />
              <Card.Title className="text-center mt-2">Gimnasio</Card.Title>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
            <Card>
              <Card.Img fluid variant="top" src={img3} />
              <Card.Title className="text-center mt-2">Mecánicos</Card.Title>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
            <Card>
              <Card.Img fluid variant="top" src={img4} />
              <Card.Title className="text-center mt-2">Peluquería</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Search;
