import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
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

  console.log(userData)
  const parsedData = JSON.parse(userData); // Parseamos data del localhost

  const verifyLoggedAccountSubscriptionState = () => {
    const username = parsedData['username'];

    GetByProfUsername(username).then((user) => {
      const verification = user.verificado;
      setVerificationState(verification);

      if (verification === false) {
        setMessage(
          `Usted no posee su cuenta verificada, para ello deberá abonar mensualmente un monto de ${monto}. Debajo se encuentra el link de pago para poder verificarla y utilizar todos nuestros beneficios.`
        );
        setPaymentLink(true)
      } else {
        setMessage("Cuenta verificada");
      }
      console.log("response state", verification)
    });
    console.log("verif state", verificationState)
  };

  verifyLoggedAccountSubscriptionState();


  return (
    <Container className="vh-100">
      <p className="text-center">{message}</p>
      <MercadoPagoLink open={paymentLink}></MercadoPagoLink>

    </Container>
  );
};

export default Verificacion;
