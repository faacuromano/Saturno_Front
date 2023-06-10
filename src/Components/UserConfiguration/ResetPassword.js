import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { cambiarPassword } from "../../functions/otherMethods";
import AlertPopUp from "../AlertPopUp/AlertPopUp";

const ResetPassword = ({ username }) => {
  const [passViejo, setPassViejo] = useState();
  const [passNuevo, setPassNuevo] = useState();
  const [repetirPass, setRepetirPass] = useState();
  const passViejoHandler = (e) => setPassViejo(e.target.value);
  const passNuevoHandler = (e) => setPassNuevo(e.target.value);
  const repetirPassHandler = (e) => setRepetirPass(e.target.value);
  const [tituloPopUp, setTituloPopUp] = useState();
  const [mensajePopUp, setMensajePopUp] = useState();
  const [openPopUp, setOpenPopUp] = useState(false); // Allows alerts to show up

  const cambiarPasswordHandler = () => {
    const data = {
      oldPass: passViejo,
      newPass: passNuevo,
      sameNew: repetirPass,
    };
    console.log("front", data);
    cambiarPassword(username, data).then(function (response) {
      if (response) {
        setTituloPopUp("Contraseña cambiada");
        setMensajePopUp("La contraseña ha sido cambiada con éxito");
        setTimeout(() => {
          setOpenPopUp(true);
        }, 0);
      } else {
        setTituloPopUp("Se ha producido un error");
        setMensajePopUp(
          "No se ha podido cambiar la contraseña, por favor intente más tarde"
        );
        setTimeout(() => {
          setOpenPopUp(true);
        }, 0);
      }
    });
  };
  return (
    <Row>
      <Col
        xs={12}
        className="border-bottom pb-4 mb-4 mt-5"
        id="change-password"
      >
        <h1>Cambiar contraseña</h1>
      </Col>
      <Col xs={12} className="mt-2">
        <Form>
          <Form.Group>
            <Form.Label>Contraseña vieja:</Form.Label>
            <Form.Control
              type="password"
              value={passViejo}
              onChange={passViejoHandler}
            />
          </Form.Group>
          <Form.Group className="mt-4">
            <Form.Label>Constraseña nueva:</Form.Label>
            <Form.Control
              type="password"
              value={passNuevo}
              onChange={passNuevoHandler}
            />
          </Form.Group>
          <Form.Group className="mt-4">
            <Form.Label>Repita la contraseña nueva:</Form.Label>
            <Form.Control
              type="password"
              value={repetirPass}
              onChange={repetirPassHandler}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="mt-4"
            onClick={cambiarPasswordHandler}
          >
            Cambiar
          </Button>
        </Form>
      </Col>
      <AlertPopUp
        open={openPopUp}
        onClose={() => setOpenPopUp(false)}
        titulo={tituloPopUp}
        mensaje={mensajePopUp}
      />
    </Row>
  );
};

export default ResetPassword;
