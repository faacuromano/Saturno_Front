import React, { useContext } from "react";

import LoginContext from "../../Contexts/ThemeContext/LoginContext";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={11} md={7} className="shadow-sm rounded px-0">
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
              <li className="mb-2">
                <Link>
                  <FaRegCalendar />
                  Ver turnos
                </Link>
              </li>
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
