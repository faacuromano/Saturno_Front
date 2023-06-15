import React, { useState, useContext, useEffect } from "react";

import "./NavBar.css";

import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, Modal, Button } from "react-bootstrap";

import LoginContext from "../../Contexts/ThemeContext/LoginContext";
import MenuOffline from "./MenuOffline";
import MenuCliente from "./MenuCliente";
import MenuProfesional from "./MenuProfesional";
import MenuAdmin from "./MenuAdmin";
import { getUserByUsername } from "../../functions/clientMethods";

const NavBarLogOut = () => {
  const [menuRender, setMenuRender] = useState(<MenuOffline />);
  const { auth, handleLogin } = useContext(LoginContext);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    navigate("/");
  };
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem("user"));
    if (userLogged) {
      const accessToken = decryptToken(userLogged.token);
      getUserByUsername(userLogged.username, accessToken).then(function (
        response
      ) {
        if (response) {
          console.log("logeado");
          handleLogin(userLogged);
        } else {
          console.log("no logeado");
          localStorage.removeItem("user");
          handleShow();
        }
      });
    }
  }, []);

  function decryptToken(encryptedToken) {
    // Eliminar los asteriscos agregados
    let withoutAsterisks = encryptedToken.replaceAll("*", "");

    // Invertir el string
    let decryptedToken = withoutAsterisks.split("").reverse().join("");

    return decryptedToken;
  }

  useEffect(() => {
    if (auth.tipoCuenta === "C") {
      setMenuRender(<MenuCliente />);
    } else if (auth.tipoCuenta === "P") {
      setMenuRender(<MenuProfesional />);
    } else if (auth.tipoCuenta === "A") {
      setMenuRender(<MenuAdmin />);
    } else {
      setMenuRender(<MenuOffline />);
    }
  }, [auth]);

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
            <Link to={"/profesionales"}>¿Qué es Saturno?</Link>
          </Nav.Link>
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/sobrenosotros"}>Sobre nosotros</Link>
          </Nav.Link>
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/contacto"}>Contacto</Link>
          </Nav.Link>
          <Nav.Link className="my-3 my-lg-0">{menuRender}</Nav.Link>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>¡Ups!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tu sesión a expirado, por favor logea de vuelta</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default NavBarLogOut;
