import React from "react";
import { Button, Modal } from "react-bootstrap";

/*
    Para utilizarlo simplemente añadir el AlertPopUp 
    pasando por props título y mensaje, un useState:
    const [openPopUp, setOpenPopUp] = useState(false);
    dentro del componente que se desee agregar un alert
    y luego en el condicional:
            setTimeout(() => {
          setOpenPopUp(true)
        }, 0);
    
*/

const AlertPopUp = ({ open, onClose, mensaje, titulo }) => {
  if (!open) return null;

  return (
    <>
      <Modal show={true} centered>
        <Modal.Header>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{mensaje}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AlertPopUp;
