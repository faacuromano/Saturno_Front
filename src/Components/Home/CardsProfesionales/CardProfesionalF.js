import React from "react";

import "./CardProfesional.css";

import Card from "react-bootstrap/Card";
import { FiClock } from "react-icons/fi";
import { BiMap } from "react-icons/bi";

const CardProfesional = ({ data }) => {
  return (
    <>
      <Card key={data.Id} className="mb-4">
        <Card.Img src={data.fotoPerfil} variant="top" />
        <Card.Body>
          <Card.Title>{data.nombre + " " + data.apellido} </Card.Title>
          <Card.Subtitle className="text-muted mb-2">
            {data.profesion}
          </Card.Subtitle>
          <Card.Text>
            <ul className="list-unstyled mb-0">
              <li>
                <BiMap />
                {data.direccion} - {data.ubicacion}
              </li>
              <li>
                <FiClock />
                <span className="ml-4">
                  {data.horarioInicio + " - " + data.horarioFinal}
                </span>
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProfesional;
