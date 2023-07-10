import React, { useEffect, useState } from "react";

import { Col, Container, Row, Button, Alert, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import {
  GetByProfUsername,
  obtenerTurnos,
} from "../../functions/professionalMethods";
import { crearTurno } from "../../functions/turnoMethods";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const SacarTurno = () => {
  const logoSolo = require("../logo-solo/logo-solo.png");
  const { profesional, servicio } = useParams();
  const [user, setUser] = useState();
  const [profData, setProfData] = useState([]);
  const [mensaje, setMensaje] = useState();
  const navigate = useNavigate();

  // const [diaTurno, setDiaTurno] = useState();
  // const [mesTurno, setMesTurno] = useState();
  const [anioTurno, setAnioTurno] = useState();
  const [defaultMonth, setDefaultMonth] = useState();

  useEffect(() => {
    const userLoaded = JSON.parse(localStorage.getItem("user"));
    setUser(userLoaded.username);
    GetByProfUsername(profesional).then(function (response) {
      setProfData(response);
    });

    const today = new Date();
    // const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth()).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    // setDiaTurno(dd);
    // setMesTurno(mm);
    setAnioTurno(yyyy);

    setDefaultMonth(new Date(yyyy, mm));
  }, []);

  const sacarTurno = (horarioSeleccionado) => {
    const nuevoTurno = {
      fechaTurno: format(selected, "Y-MM-dd"),
      horaTurno: `${horarioSeleccionado}:00`,
      observaciones: "string",
      usernameProfesional: profData.username,
      usernameCliente: user,
      idServicios: servicio,
    };

    crearTurno(nuevoTurno).then((response) => {
      if (response) {
        setMensaje(
          <Alert variant="success" className="mt-4">
            Tu turno con {profData.nombre} {profData.apellido} ha sido creado
          </Alert>
        );
        alert("Turno creado");
        navigate("/");
      } else {
        setMensaje(
          <Alert variant="danger" className="mt-4">
            Tu turno no ha podido ser creado.
          </Alert>
        );
      }
    });
  };

  //DayPicker
  const [selected, setSelected] = useState();

  let footer = (
    <Alert variant="warning" className="mt-2">
      Por favor seleccione un día
    </Alert>
  );
  if (selected) {
    footer = (
      <Alert variant="success" className="mt-2">
        Seleccionaste <strong>{format(selected, "Y-MM-dd")}</strong>
      </Alert>
    );
  }

  const beforeToday = (day) => {
    const today = new Date();
    return day < today;
  };

  //Map de la lista de botones
  const [mapeoBotones, setMapeoBotones] = useState();

  useEffect(() => {
    if (selected) {
      const url = `${profData.username}/${format(
        selected,
        "Y-MM-dd"
      )}?id=${servicio}`;
      obtenerTurnos(url).then((response) => {
        const lista = Object.values(response.data)[0];
        setMapeoBotones(
          <>
            <h5 className="mt-4 mb-3 ms-3 fw-bold">Selecciona un horario:</h5>
            {lista.map((item, index) => (
              <>
                <Button
                  key={index}
                  className="ms-2 mb-2"
                  onClick={handleShow.bind(this, item)}
                  variant="primary"
                  size="sm"
                >
                  {item}
                </Button>
              </>
            ))}
          </>
        );
      });
    }
  }, [selected]);

  //Modal sacar turno
  const [createdMessage, setCreatedMessage] = useState(
    <Modal.Body>Creando turno</Modal.Body>
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setCreatedMessage(
      <>
        <Modal.Body className="p-0">
          <div className="fondo-rojo75 w-100 py-3 px-5">
            <p className="mb-0 text-white">
              Por favor, revise atentamente la siguiente información antes de
              confirmar el turno
            </p>
          </div>
          <div className="w-100 pt-3 pb-2 px-5">
            <ul className="ps-3">
              <li>
                <strong>Profesional: </strong>
                {profData.nombre} {profData.apellido}
              </li>
              <li>
                <strong>Profesión: </strong>
                {profData.profesion}
              </li>
              <li>
                <strong>Día: </strong>
                {format(selected, "dd-MM-Y")}
              </li>
              <li>
                <strong>Horario: </strong> {item}
              </li>
              <li>
                <strong>Dirección: </strong>
                {profData.direccion} - {profData.ubicacion}
              </li>
            </ul>
            {mensaje}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={sacarTurno.bind(this, item)}>
            Sacar turno
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
        </Modal.Footer>
      </>
    );
  };

  return (
    <Container className="pb-3">
      <Row className="justify-content-center text-start">
        <Col xs={12} lg={9} className="shadow-sm rounded pt-4">
          <Row className="justify-content-center">
            <Col xs={12} className="pb-3">
              <h2 className="ms-4">Sacar turno</h2>
            </Col>
          </Row>
          <Row className="justify-content-center fondo-rojo75 text-white p-4">
            <Col xs={12} sm={10} lg={5}>
              <p className="my-1">
                <strong>Profesional:</strong> {profData.nombre}{" "}
                {profData.apellido}
              </p>
              <p className="my-1">
                <strong>Dirección:</strong> {profData.direccion}
              </p>
            </Col>
            <Col xs={12} sm={10} lg={5}>
              <p className="my-1">
                <strong>Horario apertura:</strong>{" "}
                {profData.horarioInicio
                  ? profData.horarioInicio.slice(0, 5)
                  : "sin dato"}
              </p>
              <p className="my-1">
                <strong>Horario cierre:</strong>{" "}
                {profData.horarioFinal
                  ? profData.horarioFinal.slice(0, 5)
                  : "sin dato"}
              </p>
            </Col>
          </Row>
          <Row className="pt-2 pb-2 justify-content-center">
            <Col
              xs={10}
              md={6}
              lg={5}
              xl={4}
              className="d-flex justify-content-center"
            >
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
                fromYear={anioTurno}
                defaultMonth={defaultMonth}
                fromMonth={defaultMonth}
                disabled={beforeToday}
              />
            </Col>
            <Col xs={11} sm={9} md={6}>
              {mapeoBotones}
            </Col>
          </Row>
        </Col>
        {mensaje}
      </Row>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="py-1">
          <Modal.Title className="fw-bold fs-2">
            <img src={logoSolo} className="logo-solo" alt="" /> Sacando turno
          </Modal.Title>
        </Modal.Header>
        {createdMessage}
      </Modal>
    </Container>
  );
};

export default SacarTurno;
