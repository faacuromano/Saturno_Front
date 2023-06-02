import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalDelete = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteServiceHandler = () => {
    console.log("Borrando el servicio", item.id, item.nombre);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>¡Atención!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estas seguro que quieres borrar el servicio: {item.nombre}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="primary" onClick={deleteServiceHandler}>
            Borrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;
