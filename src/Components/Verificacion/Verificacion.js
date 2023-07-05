import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { verficarEmail } from "../../functions/otherMethods";
import MercadoPagoLink from "../MercadoPago/MercadoPagoLink";
import ValidatePayment from "../MercadoPago/ValidatePayment";
import { GetByProfUsername } from "../../functions/professionalMethods";

const Verificacion = () => {
  const [username, setUsername] = useState();
  const usernameHandler = (e) => setUsername(e.target.value);
  const [paymentLink, setPaymentLink] = useState(false);
  const [verificationState, setVerificationState] = useState();
  const [message, setMessage] = useState("");
  const monto = "$2000";

  // Retrieve data from localStorage
  const userData = localStorage.getItem("user");

  console.log(userData);
  const parsedData = JSON.parse(userData); // Parseamos data del localhost

  const verifyLoggedAccountSubscriptionState = () => {
    const username = parsedData["username"];

    GetByProfUsername(username).then((user) => {
      const estadoSub = user.estadoSub;
      setVerificationState(estadoSub);

      if (estadoSub === false) {
        setMessage(
          `Usted no posee su cuenta verificada, para ello deberá abonar mensualmente un monto de ${monto}. Debajo se encuentra el link de pago para poder verificarla y utilizar todos nuestros beneficios.`
        );
        setPaymentLink(true);
      } else {
        setMessage(
          <Row className="justify-content-center">
            <Col xs={11} md={9} lg={7} className="shadow-sm rounded">
              <Row className="fondo-rojo75 rounded-top">
                <Col xs={12} className="p-3">
                  <h2 className="mb-0 text-white">Cuenta verificada</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="p-4">
                  <p className="mb-2">Tu cuenta se encuentra verificada</p>
                  <p>
                    <strong>Días restantes:</strong> 31 días
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      }
      console.log("response state", estadoSub);
    });
    console.log("verif state", verificationState);
  };

  verifyLoggedAccountSubscriptionState();

  return (
    <Container>
      {message}
      <MercadoPagoLink open={paymentLink}></MercadoPagoLink>
    </Container>
  );
};

export default Verificacion;
