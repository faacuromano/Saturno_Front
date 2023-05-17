import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import CardsProfesionales from "../Home/CardsProfesionales/CardsProfesionalesF";

const PerfilUsuario = () => {
  const [userLogged, setUserLogged] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserLogged(user);
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-center text-start">
          <Col xs={11} className="border rounded py-4">
            <Row className="justify-content-center align-items-center pt-3">
              <Col xs={2}>
                <Image src={userLogged.fotoPerfil} alt="" roundedCircle fluid />
              </Col>
              <Col xs={8}>
                <h1>{userLogged.nombre}</h1>
                <h5 className="fw-light">{userLogged.ubication}</h5>
              </Col>
              <Col xs={10} className="border-bottom mt-5">
                <h6>Tus turnos</h6>
              </Col>
              <Col xs={12} className="mt-4">
                <CardsProfesionales />
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
