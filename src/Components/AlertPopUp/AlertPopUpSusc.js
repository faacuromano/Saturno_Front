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

const AlertPopUp = ({ open, onClose, onContinue }) => {
  if (!open) return null;
  const logoSolo = require("../logo-solo/logo-solo.png");

  return (
    <>
      <Modal show={true} centered>
        <Modal.Header className="py-2 px-4 border-bottom-0">
          <Modal.Title className="fw-normal fs-2">
            <img src={logoSolo} className="logo-solo" alt="" /> Suscribite a{" "}
            <strong>Saturno</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="fondo-rojo75 w-100 py-3 px-5">
            <h6 className="mb-0 text-white">
              Por solo <strong>$2000 al mes</strong> podes disfrutar de todos
              los beneficios de una agenda online
            </h6>
          </div>
          <div className="w-100 pt-3 pb-2 px-5">
            <ul className="ps-3">
              <li>Programa tus turnos de manera rápida y segura</li>
              <li>Ofrece tu negocio en internet</li>
              <li>Crea servicios con diferentes duraciones</li>
              <li>Permite sacar turnos 24/7</li>
              <li>Busca facilmente la información de tu cliente</li>
            </ul>
          </div>
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
