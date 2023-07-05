import React, { useContext } from "react";

import LoginContext from "../../Contexts/ThemeContext/LoginContext";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  FaRegCalendarPlus,
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
        <Col xs={7} className=" shadow-sm rounded px-5 py-4">
          <p className="fs-5 pb-3">
            Panel de control de <strong>{auth.username}</strong>
          </p>
          <Button className="w-100">Reservar un turno</Button>
          <Button className="w-100 my-2">Administrar turnos</Button>
          <h5 className="mt-4 pb-2 mb-3 border-bottom">Turnos</h5>
          <ul className="list-unstyled pb-1">
            <li className="mb-2">
              <Link>
                <FaRegCalendar />
                Turnos de esta semana
              </Link>
            </li>
            <li className="mb-2">
              <Link>
                <FaRegCalendarAlt />
                Configurar turnos
              </Link>
            </li>
          </ul>
          <h5 className="mt-4 pb-2 mb-3 border-bottom">Servicios</h5>
          <ul className="list-unstyled pb-1">
            <li className="mb-2">
              <Link to={"/servicesettings"}>
                <FaRegAddressBook />
                Administrar servicios
              </Link>
            </li>
          </ul>
          <h5 className="mt-4 pb-2 mb-3 border-bottom">Configuración</h5>
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
        </Col>
      </Row>
    </Container>
  );
};

export default ConfiguracionProfesional;
