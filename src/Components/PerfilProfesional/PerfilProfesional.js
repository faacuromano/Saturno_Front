import React from "react";
import { useState, useEffect } from "react";

import { GetByProfUsername } from "../../functions/professionalMethods";
import { GetServiceByUsername } from "../../functions/serviceMethods";

import "./PerfilProfesional.css";
import "react-day-picker/dist/style.css";

import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router";
import { DayPicker } from "react-day-picker";
import AcordionServicios from "./AcordionServicios/AcordionServicios";

import { BiMap } from "react-icons/bi";
import { FaRegClock, FaRegMap, FaRegIdBadge } from "react-icons/fa";

const PerfilProfesional = () => {
  const [profData, setProfData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const { profesional } = useParams();

  useEffect(() => {
    GetByProfUsername(profesional).then(function (response) {
      setProfData(response);
    });

    GetServiceByUsername(profesional).then(function (response) {
      setServiceData(response);
    });
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selected, setSelected] = useState(Date());

  const current = new Date();

  const estilo = {
    "background-image": "url(" + profData.fotoBanner + ")",
  };

  return (
    <>
      <Container fluid className="py-3">
        <Row className="justify-content-center">
          <Col xs={11} className="rounded shadow-sm">
            <Row>
              <Col
                xs={12}
                className="img-portada rounded-top"
                style={estilo}
              ></Col>
            </Row>
            <Row className="pb-4">
              <Col xs={12} className="fondo-gris10 border-bottom mb-3">
                <Row className="justify-content-start align-items-center py-3">
                  <Col xs={4} md={3} lg={2} xl={1} className="ms-4">
                    <Image
                      src={profData.fotoPerfil}
                      roundedCircle
                      fluid
                      className="d-block ms-auto imagen-perfil shadow-sm"
                    />
                  </Col>
                  <Col xs={8} sm={7}>
                    <h2 className="mb-0">
                      <strong>
                        {profData.nombre} {profData.apellido}
                      </strong>
                    </h2>
                    <h5 className="mb-0 text-muted fw-normal">
                      {profData.profesion}
                    </h5>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row className="justify-content-evenly">
                  <Col xs={12} sm={10} md={5} lg={4} xl={3} className="py-md-3">
                    <h5 className="mb-3 fw-bold">Detalles</h5>
                    <ul className="list-unstyled profile">
                      <li className="mb-2">
                        <BiMap /> {profData.direccion}
                      </li>
                      <li className="mb-2">
                        <FaRegMap /> {profData.ubicacion}
                      </li>
                      <li className="mb-2">
                        <FaRegClock />{" "}
                        {profData.horarioInicio
                          ? profData.horarioInicio.slice(0, 5)
                          : "sin datos"}{" "}
                        a{" "}
                        {profData.horarioFinal
                          ? profData.horarioFinal.slice(0, 5)
                          : "sin datos"}
                      </li>
                      <li className="mb-2">
                        <FaRegIdBadge /> {profData.numTelefono}
                      </li>
                    </ul>
                  </Col>
                  <Col xs={12} sm={10} md={8} className="py-md-3">
                    {profData.descripcion ? (
                      <>
                        <h5 className="mb-2 fw-bold">Descripción</h5>
                        <p className="mt-2 mb-3">{profData.descripcion}</p>
                      </>
                    ) : (
                      ""
                    )}
                    <h5 className="mb-2 fw-bold">Lista de servicios</h5>
                    <p className="text-muted">
                      <em>
                        Selecciona un servicio para solicitar un turno a este
                        profesional
                      </em>
                    </p>
                    {serviceData.length === 0 ? (
                      <Alert variant="danger">
                        En este momento este profesional no tiene ningún
                        servicio disponible
                      </Alert>
                    ) : (
                      <AcordionServicios
                        servicios={serviceData}
                        profesional={profesional}
                      />
                    )}
                  </Col>
                </Row>
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
