import React from 'react'

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const TipoCuenta = () => {
    const fotoCliente = require("./clientes.jpg");
    const fotoProfesional = require("./profesional.jpg");
  return (
    <Container className="px-4">
      <Row className="justify-content-center text-center">
            <Col xs={12} lg={10} xl={7} className="pb-4">
                <h1 className='mb-3'>Elige una opción</h1>
                <p>¿Qué tipo de cuenta deseas crearte?</p>
            </Col>
            <Col xs={12} lg={10} xl={7}>
                <Row>
                    <Col className='d-flex'>
                        <Card className='align-self-stretch'>
                            <Card.Img variant="top" src={fotoCliente} />
                            <Card.Body>
                                <Card.Title as={"h4"} className='text-start'>Cliente</Card.Title>
                                <Card.Text>
                                <ul className='my-4 text-start'>
                                    <li>Saca turnos con tu profesional</li>
                                    <li>Organiza tus turnos</li>
                                    <li>Busca profesionales por tu zona</li>
                                </ul>
                                </Card.Text>
                                <Link to={"/signup"} className='colorLink'><strong>Crear cuenta Cliente</strong></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='pb-4'>
                            <Card.Img variant="top" src={fotoProfesional} />
                            <Card.Body>
                                <Card.Title as={"h4"} className='text-start'>Profesional</Card.Title>
                                <Card.Text>
                                    <ul className='my-4 text-start'>
                                        <li>Ofrece tus servicios más facilmente</li>
                                        <li>Gestiona tus turnos en nuestro panel de control</li>
                                        <li>Envía notificaciones a tus cliente</li>
                                        <li>Ofrece diferentes servicios</li>
                                    </ul>
                                </Card.Text>
                                <Link onClick={(e)=>alert("Coming soon: Registro de profesional")} className='colorLink text-center'><strong>Crear cuenta Profesional</strong></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default TipoCuenta