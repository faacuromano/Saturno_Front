import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
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

    GetTurnosByUsername(username).then(function (response) {
      console.log("response", response);
      if(response){
        setListaTurnos([...response]);
      console.log("lista", listaTurnos);
      }
    });
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-center text-start">
          <Col xs={8} className="shadow-sm rounded py-4">
            <Row className="justify-content-center align-items-center pt-3">
              <Col xs={2}>
                <Image src={userLogged.fotoPerfil} alt="" roundedCircle fluid />
              </Col>
              <Col xs={8}>
                <h2 className="mb-0">
                  {userLogged.nombre} {userLogged.apellido}
                </h2>
                <h5 className="mb-0 text-muted fw-normal">{userLogged.ubicacion}</h5>
              </Col>
              <Col xs={10} className="border-bottom mt-5 pb-3">
                <h6>Tus turnos</h6>
                <CardTurno listaTurnos={listaTurnos} />
              </Col>
              <Col xs={10} className="text-center mt-5">
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
