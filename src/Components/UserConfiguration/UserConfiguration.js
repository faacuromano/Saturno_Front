import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const UserConfiguration = () => {
  //Modal de profesional
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imgPerfil = require("./foto-usuario.jpg");
  return (
    <Container className="py-3">
      <Row className="justify-content-around">
        <Col xs={3} className="text-end border-end pe-4">
          <a href="#change-info" className="fw-bold">
            <p>Modificar información</p>
          </a>
          <Link className="fw-bold" onClick={handleShow}>
            <p>Crear cuenta profesional</p>
          </Link>
          <a href="#change-password" className="fw-bold">
            <p>Cambiar contraseña</p>
          </a>
        </Col>
        <Col xs={8} className="text-start">
          <Row>
            <Col xs={12} className="border-bottom pb-4 mb-4" id="change-info">
              <h1>Modificar información</h1>
            </Col>
            <Col xs={12}>
              <Form>
                <Form.Group>
                  <Form.Label>Nombre y apellido:</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Ciudad:</Form.Label>
                  <Form.Select aria-label="select your city">
                    <option>Elija su ciudad</option>
                    <option value="Rosario">Rosario</option>
                    <option value="Arroyo Seco">Arroyo Seco</option>
                    <option value="VGG">Villa Gobernador Galvez</option>
                    <option value="Baigorria">Baigorria</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Número de celular:</Form.Label>
                  <Form.Control type="tel" />
                </Form.Group>
                <Col xs={8} className="mt-4 border rounded">
                  <Row className="justify-content-center py-4 align-items-center">
                    <Col xs={3}>
                      <Image src={imgPerfil} fluid roundedCircle />
                    </Col>
                    <Col xs={7}>
                      <h5>Cambiar foto de perfil</h5>
                      <Button variant="secondary">Cargar</Button>
                    </Col>
                  </Row>
                </Col>
                <Button variant="primary" className="mt-4">
                  Guardar cambios
                </Button>
              </Form>
            </Col>
            <Col
              xs={12}
              className="border-bottom pb-4 mb-4 mt-5"
              id="change-password"
            >
              <h1>Cambiar contraseña</h1>
            </Col>
            <Col xs={12} className="mt-2">
              <Form>
                <Form.Group>
                  <Form.Label>Contraseña vieja:</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Constraseña nueva:</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Repita la contraseña nueva:</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Button variant="primary" className="mt-4">
                  Cambiar
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear cuenta profesional</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estas seguro que quieres actualizar tu cuenta a profesional?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Actualizar cuenta
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserConfiguration;
