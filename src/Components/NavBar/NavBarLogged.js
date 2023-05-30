import React, { useState, useContext } from "react";

import "./NavBar.css";
import { FaRegUser } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

import LoginContext from "../../Contexts/ThemeContext/LoginContext";

const NavBarLogged = () => {
  //Modal de cerrar sesión
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
    <Navbar bg="white" expand="lg" className="navBar index1">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              className="logoApp"
              alt="logoApp"
              src={require("./logo.png")}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end text-center"
        >
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/"}>Inicio</Link>
          </Nav.Link>
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/profesionales"}>Qué es Saturno?</Link>
          </Nav.Link>
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/contacto"}>Contacto</Link>
          </Nav.Link>
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/sobrenosotros"}>Sobre nosotros</Link>
          </Nav.Link>
          <Nav.Link className="my-3 my-lg-0">
            <Dropdown as={ButtonGroup} className="index9999">
              <Button variant="primary" as={Link} to={"/perfilUsuario"}>
                <FaRegUser /> Mi cuenta
              </Button>
              <Dropdown.Toggle split variant="primary" id="dropdown-user" />
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={"/admin"}>
                  Admin
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/configuracionUsuario"}>
                  Configuraciones
                </Dropdown.Item>
                <Dropdown.Item onClick={handleShow}>
                  Cerrar sesión
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
        </Navbar.Collapse>
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
      </Container>
    </Navbar>
  );
};

export default NavBarLogged;
