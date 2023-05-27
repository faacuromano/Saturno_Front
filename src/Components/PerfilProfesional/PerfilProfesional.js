import React from "react";
import { useState, useEffect } from "react";

import { GetByProfUsername } from "../../functions/professionalMethods";
import { GetServiceByUsername } from "../../functions/serviceMethods";

import "./PerfilProfesional.css";
import "react-day-picker/dist/style.css";

import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router";
import { DayPicker } from "react-day-picker";
import AcordionServicios from "./AcordionServicios/AcordionServicios";

import { FiClock } from "react-icons/fi";
import { BiMap, BiMobileAlt } from "react-icons/bi";

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
                      src={profData.fotoPerfil}
                      roundedCircle
                      fluid
                      className="my-4"
                    />
                  </Col>
                </Row>
                <ul className="list-unstyled text-start ps-5">
                  <li className="mb-2">
                    <BiMap /> <strong>{profData.direccion}</strong> -{" "}
                    {profData.ubicacion}
                  </li>
                  <li className="mb-2">
                    <FiClock /> {profData.horarioInicio} a{" "}
                    {profData.horarioFinal}
                  </li>
                  <li className="mb-2">
                    <BiMobileAlt /> {profData.numTelefono}
                  </li>
                </ul>
              </Col>
              <Col xs={8} className="text-start mt-5">
                <h1 className="pb-4 mb-3">
                  {profData.nombre} {profData.apellido}
                </h1>
                <h5 className="mb-3 text-muted">{profData.profesion}</h5>
                <h5 className="mb-3">Descripción</h5>
                <p className="my-3">{profData.descripcion}</p>
                <h5 className="my-3">Lista de servicios</h5>
                <p>Selecciona un servicio para solicitar un turno</p>

                {serviceData.length === 0 ? (
                  <p>
                    <em>
                      Para mostrar su perfil al público debe crear un servicio
                    </em>
                  </p>
                ) : (
                  <AcordionServicios servicios={serviceData} />
                )}
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
