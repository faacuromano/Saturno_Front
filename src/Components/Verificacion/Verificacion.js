import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { verficarEmail } from "../../functions/otherMethods";
import MercadoPagoLink from "../MercadoPago/MercadoPagoLink";
import ValidatePayment from "../MercadoPago/ValidatePayment";

const Verificacion = () => {
  const [username, setUsername] = useState();
  const usernameHandler = (e) => setUsername(e.target.value);
  const [paymentLink, setPaymentLink] = useState(true);
  const [storedToken, setStoredToken] = useState();
  const [userToken, setUserToken] = useState(null);

  // Retrieve data from localStorage
  const userData = localStorage.getItem("user");

  console.log(userData)
  const parsedData = JSON.parse(userData); // Parseamos data del localhost

  const verifyLoggedAccountSusbscriptionState = () => {

    // const username = parsedData['username'];

    // generateHash(username).then((user) => {

    //   const token = user; // Tomamos token
    //   setStoredToken(token);
    //   if(userToken != storedToken)
    //   {


    //   }
    // });



  } 


  return (
    <Container className="vh-100">

    </Container>
  );
};

export default Verificacion;
