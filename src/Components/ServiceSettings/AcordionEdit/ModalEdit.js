import React from "react";
import { Modal } from "react-bootstrap";

const ModalEdit = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Borrar un servicio</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estas seguro que quieres borrar el servicio: ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="primary" onClick={logoutHandler}>
            Cerrar sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEdit;
