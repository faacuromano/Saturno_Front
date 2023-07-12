import React, { useContext, useEffect, useState } from "react";
import LoginContext from "../../Contexts/ThemeContext/LoginContext";
import { Alert, Container, Row, Col, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetTurnos } from "../../functions/turnoMethods";
import { GetByProfUsername } from "../../functions/professionalMethods";
import Accordion from "react-bootstrap/Accordion";

import {
  FaRegCalendar,
  FaRegAddressBook,
  FaRegCalendarAlt,
  FaRegCreditCard,
  FaRegAddressCard,
  FaRegKeyboard,
  FaRegIdBadge,
} from "react-icons/fa";

const ConfiguracionProfesional = () => {
  const { auth, handleLogin } = useContext(LoginContext);
  const [turnosProf, setTurnosProf] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user;
  const [nombreProf, setNombreProf] = useState('');
  const [apellidoProf, setApellidoProf] = useState('');
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProf = await GetByProfUsername(username);
        console.log("profesional log", responseProf);
        setNombreProf(responseProf.nombre);
        setApellidoProf(responseProf.apellido);
  
        const responseTurnos = await GetTurnos();
        console.log("lista turnos prof", responseTurnos);
  
        const nombreyap = `${responseProf.nombre} ${responseProf.apellido}`;
  
        const turnosFiltrados = responseTurnos.filter(turno => turno.nombreProfesional === nombreyap);
        setTurnosProf(turnosFiltrados);
        console.log("filtro", turnosFiltrados);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={7} className="shadow-sm rounded px-0">
          <div className="fondo-rojo75 w-100 px-4 pt-4 pb-2 rounded-top">
            <p className="fs-3 pb-0 text-white">
              ¡Bienvenido <strong>{auth.username}!</strong>
            </p>
          </div>
          {/* <Button className="w-100">Reservar un turno</Button> */}
          {/* <Button className="w-100 my-2">Administrar turnos</Button> */}
          <div className="w-100 px-4 pt-1 pb-2">
            <h5 className="mt-4 pb-2 mb-3 border-bottom fw-bold">Turnos</h5>
            <ul className="list-unstyled pb-1">
        {turnosProf.length === 0 ? (
            <Alert variant="warning" className="mt-3 mb-4">
               No tienes ningún turno vigente
            </Alert>) :
            ( <Accordion>
              {turnosProf.map((turno, index) => (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>
                    <Badge variant="primary" className="me-1">
                      {turno.fechaTurno.slice(0, -9)}
                    </Badge>
                    <Badge bg="secondary" className="me-3">
                      {turno.horaTurno.slice(0, -3)}hs
                    </Badge>
                    <b>
                      {turno.nombreServicio.charAt(0).toUpperCase() +
                        turno.nombreServicio.slice(1)}
                    </b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <b>Fecha:</b> {turno.fechaTurno.slice(0, -9)}
                      </li>
                      <li>
                        <b>Hora:</b> {turno.horaTurno.slice(0, -3)}hs
                      </li>
                      <li>
                        <b>Precio:</b> ${turno.monto}
                      </li>
                      <li>
                        <b>Cliente:</b> {turno.nombreCliente}
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>)}
            <p></p>
              <li className="mb-2">
                <Link>
                  <FaRegCalendarAlt />
                  Administrar turnos
                </Link>
              </li>
            </ul>
            <h5 className="mt-4 pb-2 mb-3 border-bottom fw-bold">Servicios</h5>
            <ul className="list-unstyled pb-1">
              <li className="mb-2">
                <Link to={"/servicesettings"}>
                  <FaRegAddressBook />
                  Administrar servicios
                </Link>
              </li>
            </ul>
            <h5 className="mt-4 pb-2 mb-3 border-bottom fw-bold">
              Configuración
            </h5>
            <ul className="list-unstyled pb-1">
              <li className="mb-2">
                <Link to={"/verificacion"}>
                  <FaRegCreditCard />
                  Estado de la suscripción
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/professionalconf"}>
                  <FaRegAddressCard />
                  Editar información profesional
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/configuracionUsuario"}>
                  <FaRegIdBadge />
                  Editar información personal
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/cambiarPassword"}>
                  <FaRegKeyboard />
                  Cambiar contraseña
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfiguracionProfesional;
