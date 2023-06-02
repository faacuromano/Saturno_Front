import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";

import { CreateService } from "../../functions/serviceMethods";
import { GetServiceByUsername } from "../../functions/serviceMethods";
import { GetByProfUsername } from "../../functions/professionalMethods";

import AcordionEdit from "./AcordionEdit/AcordionEdit";

const ServiceSettings = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [username, setUsername] = useState("");
  const [idProfesional, setIdProfesional] = useState();
  const [nombreServicio, setNombreServicio] = useState("");
  const [precioServicio, setPrecioServicio] = useState();
  const [descripcionServicio, setDescripcionServicio] = useState("");
  const [duracionServicio, setDuracionServicio] = useState("");
  const [servicios, setServicios] = useState([]);
  const [mapServicio, setMapServicio] = useState(
    <p>
      <em>Cree un servicio para empezar a usar nuestro servicio</em>
    </p>
  );

  useEffect(() => {
    const username = localStorage.getItem("user");
    GetServiceByUsername(username).then(function (response) {
      setServicios(response);
    });
    GetByProfUsername(username).then(function (response) {
      setIdProfesional(response.idUsuarios);
      setUsername(response.username);
    });
  }, []);

  useEffect(() => {
    serviceMapHandler();
  }, [servicios]);

  const nombreHandler = (e) => {
    setNombreServicio(e.target.value);
  };

  const precioHandler = (e) => {
    setPrecioServicio(e.target.value);
  };

  const descripcionHandler = (e) => {
    setDescripcionServicio(e.target.value);
  };

  const duracionHandler = (e) => {
    setDuracionServicio(e.target.value);
  };

  const limpiarCampos = () => {
    setNombreServicio("");
    setPrecioServicio("");
    setDescripcionServicio("");
    setDuracionServicio("");
  };

  const serviceMapHandler = () => {
    if (servicios) {
      setMapServicio(
        <AcordionEdit
          servicios={servicios}
          refreshAfterDelete={refreshAfterDelete}
        />
      );
    } else {
      setMapServicio(
        <p>
          <em>Cree un servicio para empezar a usar nuestro servicio</em>
        </p>
      );
    }
  };

  const refreshAfterDelete = () => {
    GetServiceByUsername(username).then(function (response) {
      setServicios(response);
    });
  };

  const createServiceHandler = () => {
    const newService = {
      nombre: nombreServicio,
      descripcion: descripcionServicio,
      precio: parseInt(precioServicio),
      duracion: duracionServicio,
      idProfesional: parseInt(idProfesional),
    };

    CreateService(newService).then((response) => {
      if (response.status === 200) {
        console.log("Servicio creado");
        GetServiceByUsername(username).then(function (response) {
          setServicios(response);
          limpiarCampos();
        });
      } else {
        console.log("Servicio no creado");
      }
    });
  };

  return (
    <Container>
      <Row className="justify-content-center text-start">
        <Col xl={7}>
          <h3>Tus servicios</h3>
          <p>A continuación verá sus servicios disponibles:</p>
        </Col>
        <Col xl={7} className="mt-2 mb-5">
          {mapServicio}
        </Col>
        <Col xl={7}>
          <h3>Crea un servicio nuevo</h3>
        </Col>
        <Col xl={7}>
          <Form>
            <Form.Group className="my-4">
              <Form.Label>Nombre del servicio:</Form.Label>
              <Form.Control
                type="text"
                value={nombreServicio}
                onChange={nombreHandler}
              />
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Precio:</Form.Label>
              <Form.Control
                type="number"
                value={precioServicio}
                onChange={precioHandler}
              />
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                type="text"
                value={descripcionServicio}
                onChange={descripcionHandler}
              />
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Duración (hh:mm:ss):</Form.Label>
              <Form.Control
                type="text"
                value={duracionServicio}
                onChange={duracionHandler}
              />
            </Form.Group>
            <Button variant="primary" onClick={createServiceHandler}>
              Crear servicio
            </Button>
          </Form>
        </Col>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Cerrar sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>¿Estas seguro que quieres cerrar sesión?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Volver
            </Button>
            <Button variant="primary">Cerrar sesión</Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default ServiceSettings;
