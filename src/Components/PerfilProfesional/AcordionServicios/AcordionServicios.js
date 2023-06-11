import React from "react";

import Accordion from "react-bootstrap/Accordion";
import { Badge, Button } from "react-bootstrap";

import { BsCalendarEvent } from "react-icons/bs";
import { Link } from "react-router-dom";

const AcordionServicios = ({ servicios, profesional }) => {
  return (
    <>
      <Accordion>
        {servicios.map((item, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              <p className="mb-0 align-middle">
                <strong>{item.nombre}</strong>{" "}
                <Badge variant="secondary" className="d-block mt-1">
                  ${item.precio}
                </Badge>
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <h5 className="mb-1">Descripción</h5>
              <p>{item.descripcion}</p>
              <Link to={`/perfilProfesional/${profesional}/${item.id}`}>
                <Button size="sm" className="mt-1">
                  <BsCalendarEvent /> Sacar turno
                </Button>
              </Link>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default AcordionServicios;
