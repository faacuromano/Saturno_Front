import React from "react";

import "./CardProfesional.css";

import Card from "react-bootstrap/Card";
import { FiClock } from "react-icons/fi";
import { BiMap } from "react-icons/bi";

const CardProfesional = ({ data }) => {
  return (
    <Card key={data.Id} className="mb-4 shadow-sm border-0 align-self-stretch">
      <Card.Img src={data.fotoPerfil} variant="top" />
      <Card.Body>
        <Card.Title>{data.nombre + " " + data.apellido} </Card.Title>
        <Card.Subtitle className="text-muted mb-3">
          {data.profesion}
        </Card.Subtitle>
        <Card.Text>
          <ul className="list-unstyled mb-0">
            <li className="mb-1">
              <BiMap />
              {data.direccion} - {data.ubicacion}
            </li>
            <li>
              <FiClock />
              <span className="ml-4">
                {data.horarioInicio
                  ? data.horarioInicio.slice(0, 5)
                  : "sin dato"}{" "}
                -{" "}
                {data.horarioFinal ? data.horarioFinal.slice(0, 5) : "sin dato"}
              </span>
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardProfesional;
