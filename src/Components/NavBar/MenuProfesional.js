import React, { useState, useContext } from "react";

import { Button, Dropdown, ButtonGroup, Modal } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import LoginContext from "../../Contexts/ThemeContext/LoginContext";

const MenuProfesional = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const { auth, handleLogin } = useContext(LoginContext);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    handleClose();
    handleLogin(false);
    navigate("/");
  };

  return (
    <>
      <Dropdown as={ButtonGroup} className="index9999">
        <Button
          variant="primary"
          as={Link}
          to={`/perfilProfesional/${auth.username}`}
        >
          <FaRegUser /> Menu profesional
        </Button>
        <Dropdown.Toggle split variant="primary" id="dropdown-user" />
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to={"/professionalconf"}>
            Configurar cuenta profesional
          </Dropdown.Item>
          <Dropdown.Item as={Link} to={"/configuracionUsuario"}>
            Configurar cuenta personal
          </Dropdown.Item>
          <Dropdown.Item as={Link} to={"/servicesettings"}>
            Configurar tus servicios
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleShow}>Cerrar sesión</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cerrar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estas seguro que quieres cerrar sesión?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="primary" onClick={logoutHandler}>
            Cerrar sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MenuProfesional;
