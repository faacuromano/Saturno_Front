import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaRegUser } from "react-icons/fa";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./NavBar.css";
import ButtonTheme from "../ButtonTheme/ButtonTheme";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";

const NavBarLogOut = () => {
  //Modal de cerrar sesión
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const loginHandler = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const { theme, handleTheme } = useContext(ThemeContext);
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
          {/* <ButtonTheme /> */}
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/"} className="colorLink">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/profesionales"}>Qué es Saturno</Link>
          </Nav.Link>
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/contacto"}>Contacto</Link>
          </Nav.Link>
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/sobrenosotros"}>Sobre nosotros</Link>
          </Nav.Link>
          <Nav.Link className="my-3 my-lg-0">
            <Button variant="primary" as={Link} to={"/login"}>
              <FaRegUser /> Login
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
        <Modal className={theme} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cerrar sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>¿Estas seguro que quieres cerrar sesión?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Volver
            </Button>
            <Button variant="primary" onClick={loginHandler}>
              Cerrar sesión
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Navbar>
  );
};

export default NavBarLogOut;
