import React, { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import { Button, Modal } from "react-bootstrap";
import { DeleteService } from "../../../functions/serviceMethods";

const AcordionEdit = ({ servicios, refreshAfterDelete }) => {
  const [showDelete, setShowDelete] = useState(false);
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  const deleteServiceHandler = (item) => {
    DeleteService(item.id).then(function () {
      refreshAfterDelete();
      handleDeleteClose();
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
              <Button className="me-1" variant="secondary">
                Editar
              </Button>
              <Button onClick={handleDeleteShow}>Borrar</Button>
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
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default AcordionEdit;
