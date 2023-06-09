import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';


const CardTurno = ({listaTurnos}) => {
  return (
    <Container>
        <Row className="justify-content-center text-start">
            <Col xs={11} className="border rounded py-4">
            {listaTurnos.map((turno, index) => (
                <Accordion defaultActiveKey="0">
                    <Accordion.Item key={index}>
                        <Accordion.Header> 
                            <b>{turno.nombreServicio.charAt(0).toUpperCase() + turno.nombreServicio.slice(1)}: </b> {turno.horaTurno.slice(0, -3)}hs. - {turno.fechaTurno}  
                        </Accordion.Header>
                        <Accordion.Body>
                            <p><b>Fecha:</b> {turno.fechaTurno}</p>
                            <p><b>Hora:</b> {turno.horaTurno.slice(0, -3)}</p>
                            <p><b>Monto:</b> ${turno.monto}</p>
                            <p><b>Profesional:</b> {turno.nombreProfesional}</p>
                            <p><b>Servicio:</b> {turno.nombreServicio.charAt(0).toUpperCase() + turno.nombreServicio.slice(1)}</p>
                            {/*Poner la direccion del profesional tambien*/}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}    
            </Col>
        </Row>
    </Container>
  )
}

export default CardTurno