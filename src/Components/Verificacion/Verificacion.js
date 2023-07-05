import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { verficarEmail } from "../../functions/otherMethods";
import MercadoPagoLink from "../MercadoPago/MercadoPagoLink";
// import ValidatePayment from "../MercadoPago/ValidatePayment";
import { GetByProfUsername } from "../../functions/professionalMethods";

const Verificacion = () => {
  // const [username, setUsername] = useState();
  // const usernameHandler = (e) => setUsername(e.target.value);
  const [paymentLink, setPaymentLink] = useState(true);
  const [verificationState, setVerificationState] = useState();
  const [message, setMessage] = useState("");
  // const monto = "$2000";

  useEffect(() => {
    verifyLoggedAccountSubscriptionState();
  }, []);

  const verifyLoggedAccountSubscriptionState = () => {
    // Retrieve data from localStorage
    const userData = localStorage.getItem("user");
    const parsedData = JSON.parse(userData); // Parseamos data del localhost
    const username = parsedData["username"];

    GetByProfUsername(username).then((user) => {
      const estadoSub = user.estadoSub;
      setVerificationState(estadoSub);

      if (estadoSub === false) {
        setMessage(
          <Row className="justify-content-center">
            <Col xs={11} md={9} lg={7} className="shadow-sm rounded">
              <Row className="fondo-rojo75 rounded-top">
                <Col xs={12} className="p-4">
                  <h2 className="mb-0 text-white">Activar cuenta</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="p-4">
                  <h5 className="mb-4">
                    Activá tu cuenta para comenzar a operar con Saturno
                  </h5>
                  <p className="mb-4">
                    A continuación te redirigiremos a Mercado Pago para realizar
                    la suscripción a <strong>Saturno</strong>. Una vez
                    completado el pago te guiaremos para continuar con la
                    activación de la cuenta.
                  </p>
                  <MercadoPagoLink open={paymentLink}></MercadoPagoLink>
                </Col>
              </Row>
            </Col>
          </Row>
        );
        setPaymentLink(true);
      } else {
        setMessage(
          <Row className="justify-content-center">
            <Col xs={11} md={9} lg={7} className="shadow-sm rounded">
              <Row className="fondo-rojo75 rounded-top">
                <Col xs={12} className="p-4">
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
    });
  };

  return <Container>{message}</Container>;
};

export default Verificacion;
