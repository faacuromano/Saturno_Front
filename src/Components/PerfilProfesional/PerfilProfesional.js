import React from "react";
import { useState, useEffect } from "react";
import { IDGetProfesional } from "../../functions/professionalMethods";

import "./PerfilProfesional.css";

import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
//import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { FiClock } from "react-icons/fi";
import { BiMap, BiMobileAlt } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";

const PerfilProfesional = () => {
  const [professional, setProfessional] = useState([]);
  const { theme, handleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const Profesional = JSON.parse(localStorage.getItem("prof"));
    setProfessional(Profesional)
  }, []);

  const fotoPerfil = require("./perfil.jpg");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selected, setSelected] = useState(Date());

  const current = new Date();

  const estilo = {
    "background-image": "url(" + professional.fotoPortada + ")",
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={11} className="border rounded">
            <div className={theme}>
              <Row>
                <Col
                  xs={12}
                  className="img-portada rounded-top"
                  style={estilo}
                ></Col>
              </Row>
            </div>
            <Row className="justify-content-center pt-3 pb-5">
              <Col xs={3}>
                <div className={theme}>
                  <Image
                    src={professional.fotoPefil}
                    roundedCircle
                    fluid
                    className="mb-3"
                  />
                </div>
                <p className="mb-1 ms-3 text-start">
                  <BiMap /> <strong>{professional.direccion}</strong> -{" "}
                  {professional.ubicacion}
                </p>
                <p className="mb-1 ms-3 text-start">
                  <FiClock /> {professional.horarioInicio} a {professional.horarioCierre}
                </p>
                <p className="mb-1 ms-3 text-start">
                  <BiMobileAlt /> {professional.numTelefono}
                </p>
                <Button className="mt-4" onClick={handleShow}>
                  <BsCalendarEvent /> Pedir turno
                </Button>
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
              </Col>
              <Col xs={8} className="text-start mt-5">
                <h1 className="border-bottom pb-4 mb-3">
                  {professional.nombre} {professional.apellido}
                </h1>
                <h5 className="mb-3 text-muted">{professional.profesion}</h5>
                <p>{professional.descripcion}</p>
                {/* <h5 className="mb-4">Descripción de los servicios</h5>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Corte - <strong>$1000</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Corte + tintura - <strong>$1200</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Corte + tintura + permanente - <strong>$1800</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion> */}
                <p className="mt-4">
                  <strong>¿Quieres denunciar este profesional?</strong> Entra{" "}
                  <Link className="colorLink">aquí</Link>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PerfilProfesional;
