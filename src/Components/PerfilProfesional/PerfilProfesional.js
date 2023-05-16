import React from "react";
import { useState, useEffect } from "react";
//import { IDGetProfesional } from "../../functions/professionalMethods";

import "./PerfilProfesional.css";

import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { FiClock } from "react-icons/fi";
import { BiMap, BiMobileAlt } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";

//import { Link } from "react-router-dom";

const PerfilProfesional = () => {
  const [professional, setProfessional] = useState([]);

  useEffect(() => {
    const Profesional = JSON.parse(localStorage.getItem("prof"));
    setProfessional(Profesional);
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selected, setSelected] = useState(Date());

  const current = new Date();

  const estilo = {
    "background-image": "url(" + professional.fotoBanner + ")",
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={11} className="rounded border">
            <Row>
              <Col
                xs={12}
                className="img-portada rounded-top"
                style={estilo}
              ></Col>
            </Row>
            <Row className="justify-content-center pt-3 pb-5">
              <Col xs={3}>
                <Row className="justify-content-center">
                  <Col xs={8}>
                    <Image
                      src={professional.fotoPefil}
                      roundedCircle
                      fluid
                      className="my-4"
                    />
                  </Col>
                </Row>
                <ul className="list-unstyled text-start ps-5">
                  <li className="mb-2">
                    <BiMap /> <strong>{professional.direccion}</strong> -{" "}
                    {professional.ubicacion}
                  </li>
                  <li className="mb-2">
                    <FiClock /> {professional.horarioInicio} a{" "}
                    {professional.horarioFinal}
                  </li>
                  <li className="mb-2">
                    <BiMobileAlt /> {professional.numTelefono}
                  </li>
                </ul>
              </Col>
              <Col xs={8} className="text-start mt-5">
                <h1 className="pb-4 mb-3">
                  {professional.nombre} {professional.apellido}
                </h1>
                <h5 className="mb-3 text-muted">{professional.profesion}</h5>
                <h5 className="mb-3">Descripción</h5>
                <p className="my-3">{professional.descripcion}</p>
                <h5 className="my-3">Lista de servicios</h5>
                <p>Selecciona un servicio para solicitar un turno</p>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Corte - <strong>$1000</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                      <Button className="mt-4" onClick={handleShow}>
                        <BsCalendarEvent /> Pedir turno
                      </Button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Corte + tintura - <strong>$1200</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                      <Button className="mt-4" onClick={handleShow}>
                        <BsCalendarEvent /> Pedir turno
                      </Button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Corte + tintura + permanente - <strong>$1800</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                      <Button className="mt-4" onClick={handleShow}>
                        <BsCalendarEvent /> Pedir turno
                      </Button>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Col>
          {/* "Popup de turno" */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Elja su turno</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                fromMonth={current}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Guardar turno
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>
    </>
  );
};

export default PerfilProfesional;
