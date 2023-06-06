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
  const { profesional, servicio } = useParams();
  const [user, setUser] = useState();
  const [profData, setProfData] = useState([]);
  const [mensaje, setMensaje] = useState();
  const navigate = useNavigate();

  const [diaTurno, setDiaTurno] = useState();
  const [mesTurno, setMesTurno] = useState();
  const [anioTurno, setAnioTurno] = useState();
  const [defaultMonth, setDefaultMonth] = useState();

  useEffect(() => {
    const userLoaded = localStorage.getItem("user");
    setUser(userLoaded);
    GetByProfUsername(profesional).then(function (response) {
      setProfData(response);
    });

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth()).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    setDiaTurno(dd);
    setMesTurno(mm);
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
    <p className="mt-3">
      <strong>Por favor seleccione un día</strong>
    </p>
  );
  if (selected) {
    footer = (
      <p className="mt-3">
        <strong>Seleccionaste {format(selected, "Y-MM-dd")}</strong>
      </p>
    );
  }

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
            <h4 className="my-4">Selecciona un horario para sacar un turno:</h4>
            {lista.map((item, index) => (
              <>
                <Button
                  key={index}
                  className="ms-1 mb-1"
                  onClick={handleShow.bind(this, item)}
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
        <Modal.Body>
          <p>
            Por favor, revise atentamente la siguiente información antes de
            confirmar el turno
          </p>
          <ul>
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
    <Container>
      <Row className="justify-content-center text-start">
        <Col xs={10}>
          <h3 className="mt-3 mb-4">Sacar Turno</h3>
          <p>
            <strong>Servicio:</strong> {servicio}
          </p>
          <p>
            <strong>Profesional:</strong> {profData.username}
          </p>
          <p>
            <strong>Horario apertura:</strong> {profData.horarioInicio}
          </p>
          <p>
            <strong>Horario cierre:</strong> {profData.horarioFinal}
          </p>
          <p>
            <strong>Cliente:</strong> {user}
          </p>
          <Row className="mt-4">
            <Col xs={6}>
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
                fromYear={anioTurno}
                defaultMonth={defaultMonth}
                fromMonth={defaultMonth}
              />
            </Col>
            <Col xs={6}>{mapeoBotones}</Col>
          </Row>
        </Col>
        {mensaje}
      </Row>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sacando turno</Modal.Title>
        </Modal.Header>
        {createdMessage}
      </Modal>
    </Container>
  );
};

export default SacarTurno;
