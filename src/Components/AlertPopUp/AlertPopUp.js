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
  const logoSolo = require("../logo-solo/logo-solo.png");
  if (!open) return null;

  return (
    <>
      <Modal show={true} centered>
        <Modal.Title className="fw-bold fs-2">
          <img src={logoSolo} className="logo-solo" alt="" /> {titulo}
        </Modal.Title>
        <Modal.Body className="pb-4">{mensaje}</Modal.Body>
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
