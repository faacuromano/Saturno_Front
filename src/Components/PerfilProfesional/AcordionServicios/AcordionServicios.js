import React from "react";

import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";

import { BsCalendarEvent } from "react-icons/bs";
import { Link } from "react-router-dom";

const AcordionServicios = ({ servicios, profesional }) => {
  return (
    <>
      <Accordion>
        {servicios.map((item, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              <p className="mb-0">
                {item.nombre} - <strong>${item.precio}</strong>
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p>{item.descripcion}</p>
              <Link to={`/perfilProfesional/${profesional}/${item.id}`}>
                <Button>
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
