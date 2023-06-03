import React, { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import { Button, Form, Modal } from "react-bootstrap";
import { DeleteService, EditService } from "../../../functions/serviceMethods";

const AcordionEdit = ({ servicios, refreshAfterChange, idProfesional }) => {
  const [showDelete, setShowDelete] = useState(false);
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  const deleteServiceHandler = (item) => {
    DeleteService(item.id).then(function () {
      refreshAfterChange();
      handleDeleteClose();
    });
  };

  const [showEdit, setShowEdit] = useState(false);
  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);

  const [nombreServicio, setNombreServicio] = useState("");
  const [precioServicio, setPrecioServicio] = useState();
  const [descripcionServicio, setDescripcionServicio] = useState("");
  const [duracionServicio, setDuracionServicio] = useState("");

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

  const loadEditService = (item) => {
    setNombreServicio(item.nombre);
    setPrecioServicio(item.precio);
    setDescripcionServicio(item.descripcion);
    setDuracionServicio(item.duracion);
    handleEditShow();
  };

  const editServiceHandler = (item) => {
    const editedService = {
      id: item.id,
      nombre: nombreServicio,
      descripcion: descripcionServicio,
      precio: precioServicio,
      duracion: duracionServicio,
      idProfesional: idProfesional,
    };

    EditService(item.id, editedService).then(function (response) {
      console.log(response);
      refreshAfterChange();
      handleEditClose();
      limpiarCampos();
    });
  };

  return (
    <>
      <Accordion>
        {servicios.map((item, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              <p className="mb-0">
                <strong>{item.nombre}</strong> - ${item.precio}
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p>{item.descripcion}</p>
              <Button
                className="me-1"
                variant="secondary"
                onClick={loadEditService.bind(this, item)}
              >
                Editar
              </Button>
              <Button onClick={handleDeleteShow}>Borrar</Button>
              {/* Modal DELETE */}
              <Modal show={showDelete} onHide={handleDeleteClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>¡Atención!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  ¿Estas seguro que quieres borrar el siguiente servicio?
                  <ul className="mt-2">
                    <li key={index}>
                      <strong>{item.nombre}</strong>
                    </li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleDeleteClose}>
                    Volver
                  </Button>
                  <Button
                    variant="primary"
                    onClick={deleteServiceHandler.bind(this, item)}
                  >
                    Borrar
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* Modal EDIT */}
              <Modal show={showEdit} onHide={handleEditClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Edición de servicio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mt-2">
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
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleEditClose}>
                    Volver
                  </Button>
                  <Button
                    variant="primary"
                    onClick={editServiceHandler.bind(this, item)}
                  >
                    Editar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default AcordionEdit;
