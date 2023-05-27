import React from "react";

import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";

import { BsCalendarEvent } from "react-icons/bs";

const AcordionServicios = ({ servicios }) => {
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
              <Button className="mt-4">
                <BsCalendarEvent /> Pedir turno
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default AcordionServicios;
