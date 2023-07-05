import React, { useEffect, useState } from "react";

import { Alert, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import { getClientProfile } from "../../functions/clientMethods";
import { GetTurnosByUsername } from "../../functions/turnoMethods";
import CardTurno from "../Turnos/CardTurno";

//getTurnosbyUsername --> mapear y mostrar la lista de turnos

const PerfilUsuario = () => {
  const [userLogged, setUserLogged] = useState({});
  const [listaTurnos, setListaTurnos] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const username = user.username;
    getClientProfile(username).then(function (response) {
      setUserLogged(response.data);
    });

    GetTurnosByUsername(username, 2).then(function (response) {
      console.log("response", response);
      if (response) {
        setListaTurnos([...response]);
        console.log("lista", listaTurnos);
      } else {
        setListaTurnos();
      }
    });
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-center text-start">
          <Col xs={8} className="shadow-sm rounded p-4">
            <Row className="justify-content-center align-items-center">
              <Col xs={2}>
                <Image src={userLogged.fotoPerfil} alt="" roundedCircle fluid />
              </Col>
              <Col xs={10}>
                <h2 className="mb-0">
                  {userLogged.nombre} {userLogged.apellido}
                </h2>
                <h5 className="mb-0 text-muted fw-normal">
                  {userLogged.ubicacion}
                </h5>
              </Col>
              <Col xs={12} className="mt-3 pb-2">
                {listaTurnos ? (
                  <CardTurno listaTurnos={listaTurnos} />
                ) : (
                  <Alert variant="warning" className="mt-3 mb-4">
                    No tienes ningún turno vigente
                  </Alert>
                )}
              </Col>
              <Col xs={12} className="mt-0">
                <p className="text-muted texto-chico">
                  <strong>¿Problemas con un turno?</strong> Envianos un{" "}
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
