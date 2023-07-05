import React from "react";
import { Col, Badge } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const CardTurno = ({ listaTurnos }) => {
  return (
    <Col xs={12} className="pt-2 pb-4">
      <h5 className="mb-3">Tus turnos</h5>
      <Accordion>
        {listaTurnos.map((turno, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              <Badge variant="primary" className="me-1">
                {turno.fechaTurno.slice(0, -9)}
              </Badge>
              <Badge bg="secondary" className="me-3">
                {turno.horaTurno.slice(0, -3)}hs
              </Badge>
              <b>
                {turno.nombreServicio.charAt(0).toUpperCase() +
                  turno.nombreServicio.slice(1)}
              </b>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <b>Fecha:</b> {turno.fechaTurno.slice(0, -9)}
                </li>
                <li>
                  <b>Hora:</b> {turno.horaTurno.slice(0, -3)}hs
                </li>
                <li>
                  <b>Precio:</b> ${turno.monto}
                </li>
                <li>
                  <b>Profesional:</b> {turno.nombreProfesional}
                </li>
                <li>
                  <b>Servicio:</b>{" "}
                  {turno.nombreServicio.charAt(0).toUpperCase() +
                    turno.nombreServicio.slice(1)}
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Col>
  );
};

export default CardTurno;
