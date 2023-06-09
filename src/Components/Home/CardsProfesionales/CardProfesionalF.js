import React from "react";

import "./CardProfesional.css";

import Card from "react-bootstrap/Card";

import { BiMap } from "react-icons/bi";
import { FaRegClock, FaRegMap } from "react-icons/fa";

const CardProfesional = ({ data }) => {
  return (
    <Card key={data.Id} className="mb-4 shadow-sm border-0 align-self-stretch">
      <Card.Img src={data.fotoPerfil} variant="top" />
      <Card.Body className="pt-3">
        <Card.Title className="ms-2 mb-2 fw-bold">
          {data.nombre + " " + data.apellido}
        </Card.Title>
        <Card.Subtitle className="text-muted mb-2 ms-2 fw-normal border-bottom pb-3">
          {data.profesion}
        </Card.Subtitle>
        <Card.Text className="pt-2">
          <ul className="list-unstyled mb-0">
            <li className="mb-1">
              <BiMap />
              {data.direccion}
            </li>
            <li className="mb-1">
              <FaRegMap />
              {data.ubicacion}
            </li>
            <li>
              <FaRegClock />
              {data.horarioInicio
                ? data.horarioInicio.slice(0, 5)
                : "sin dato"}{" "}
              a {data.horarioFinal ? data.horarioFinal.slice(0, 5) : "sin dato"}
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardProfesional;
