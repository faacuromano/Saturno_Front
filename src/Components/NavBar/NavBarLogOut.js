import React, { useState, useContext, useEffect } from "react";

import "./NavBar.css";

import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

import LoginContext from "../../Contexts/ThemeContext/LoginContext";
import MenuOffline from "./MenuOffline";
import MenuCliente from "./MenuCliente";
import MenuProfesional from "./MenuProfesional";
import MenuAdmin from "./MenuAdmin";

const NavBarLogOut = () => {
  const [menuRender, setMenuRender] = useState(<MenuOffline />);
  const { auth, handleLogin } = useContext(LoginContext);

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
    </Navbar>
  );
};

export default NavBarLogOut;
