import React, { useState } from "react";
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

const AlertPopUp = ({ open, onClose, onContinue }) => {
  if (!open) return null;

  return (
    <>
      <Modal show={true} centered>
        <Modal.Header>
          <Modal.Title>Suscribite!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>
            Obtén acceso exclusivo a las características premium por $1500/mes.
          </h6>
          <p style={{ fontFamily: "Roboto" }}>
            <li>Programar turnos de manera rápida y segura.</li>
            <li>Acceso 24/7.</li>
            <li>Recordatorios.</li>
            <li>Mayor comodidad.</li>
            <li>Organización y eficiencia.</li>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Volver
          </Button>
          <Button variant="primary" onClick={onContinue}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AlertPopUp;
