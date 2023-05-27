import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { CreateService } from "../../functions/serviceMethods";

const ServiceSettings = () => {
  const [idServicio, setIdServicio] = useState()
  const [nombreServicio, setNombreServicio] = useState("")
  const [precioServicio, setPrecioServicio] = useState()
  const [descripcionServicio, setDescripcionServicio] = useState("")
  const [duracionServicio, setDuracionServicio] = useState("")

  const idHandler = (e) =>{
    setIdServicio(e.target.value)
  }

  const nombreHandler = (e) =>{
    setNombreServicio(e.target.value)
  }

  const precioHandler = (e) =>{
    setPrecioServicio(e.target.value)
  }

  const descripcionHandler = (e) =>{
    setDescripcionServicio(e.target.value)
  }

  const duracionHandler = (e) =>{
    setDuracionServicio(e.target.value)
  }

  const createServiceHandler = () => {
    const newService = {
      nombre: nombreServicio,
      descripcion: descripcionServicio,
      precio: parseInt(precioServicio),
      duracion: duracionServicio,
      idProfesional: parseInt(idServicio)
    }
    CreateService(newService)
  }

  return (
    <Container>
      <Row className="justify-content-center text-start">
        <Col xl={7}>
          <h3>Servicios</h3>
          <p>A continuación se mostrarán tus servicios o crea uno nuevo</p>
        </Col>
        <Col xl={7}>
          <Form>
          <Form.Group className="my-4">
              <Form.Label>Id del profesional:</Form.Label>
              <Form.Control type="number" value={idServicio} onChange={idHandler}/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Nombre del servicio:</Form.Label>
              <Form.Control type="text" value={nombreServicio} onChange={nombreHandler}/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Precio:</Form.Label>
              <Form.Control type="number" value={precioServicio} onChange={precioHandler}/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Descripción:</Form.Label>
              <Form.Control type="text" value={descripcionServicio} onChange={descripcionHandler}/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Duración (hh:mm:ss):</Form.Label>
              <Form.Control type="text" value={duracionServicio} onChange={duracionHandler}/>
            </Form.Group>
            <Button variant="primary" onClick={createServiceHandler}>Crear servicio</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceSettings;
