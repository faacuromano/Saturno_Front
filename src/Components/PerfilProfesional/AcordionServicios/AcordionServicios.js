import React, { useContext, useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import { Badge, Button, Modal } from "react-bootstrap";

import { BsCalendarEvent } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import LoginContext from "../../../Contexts/ThemeContext/LoginContext";

const AcordionServicios = ({ servicios, profesional }) => {
  const logoSolo = require("../../logo-solo/logo-solo.png");
  const { auth, handleLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const chequeoUsuario = (id) => {
    if (auth.tipoCuenta === "C") {
      navigate(`/perfilProfesional/${profesional}/${id}`);
    } else if (auth.tipoCuenta === "P") {
      navigate("/");
    } else {
      handleShow();
    }
  };
  /*/perfilProfesional/${profesional}/${id} */
  return (
    <>
      <Accordion>
        {servicios.map((item, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              <Badge variant="primary" className="me-1">
                ${item.precio}
              </Badge>
              <Badge bg="secondary" className="me-3">
                {item.duracion ? item.duracion.slice(0, 5) : "00"}
              </Badge>
              <p className="mb-0 align-middle">
                <strong>{item.nombre}</strong>{" "}
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p>{item.descripcion}</p>
              <Button
                size="sm"
                className="mt-1"
                onClick={chequeoUsuario.bind(this, item.id)}
              >
                <BsCalendarEvent /> Sacar turno
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold fs-2">
              <img src={logoSolo} className="logo-solo" alt="" /> ¡Alto ahí!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-4 text-center">
            <p>Tenes que tener una cuenta para poder sacar un turno</p>
          </Modal.Body>
          <Modal.Footer className="text-center fw-bold">
            <div className="w-100">
              <Link to={"/login"}>Logeate para continuar</Link>
            </div>
            <div className="w-100">
              <Link to={"/signup"}>O crea una cuenta</Link>
            </div>
          </Modal.Footer>
        </Modal>
      </Accordion>
    </>
  );
};

export default AcordionServicios;
