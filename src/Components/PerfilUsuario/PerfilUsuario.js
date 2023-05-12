import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import CardProfesional from "../Home/CardsProfesionales/CardProfesional";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";

const PerfilUsuario = () => {
  const fotoUsuario = require("./foto-usuario.jpg");
  const [userLogged, setUserLogged] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserLogged(user);
  }, []);

  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <>
      <Container>
        <Row className="justify-content-center text-start">
          <Col xs={11} className="border rounded py-4">
            <Row className="justify-content-center align-items-center pt-3">
              <Col xs={3}>
                <Image
                  className={theme}
                  src={fotoUsuario}
                  alt=""
                  roundedCircle
                  fluid
                />
              </Col>
              <Col xs={7}>
                <h1>{userLogged.nombre}</h1>
                <h5 className="fw-light">{userLogged.ubication}</h5>
              </Col>
              <Col xs={10} className="border-bottom mt-5">
                <h6>Tus turnos</h6>
              </Col>
              <Col xs={10}>
                <Row className="mt-4">
                  <Col xs={4}>
                    <CardProfesional />
                  </Col>
                  <Col xs={4}>
                    <CardProfesional />
                  </Col>
                </Row>
              </Col>
              <Col xs={10} className="text-center mt-5">
                <p>
                  <strong>¿Problemas con un turno?</strong> Envinos un{" "}
                  <Link to={"/contacto"} className="colorLink">
                    mensaje
                  </Link>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PerfilUsuario;
