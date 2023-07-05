import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Container, Form, Modal } from "react-bootstrap";
import {
  GetByProfUsername,
  editProfessional,
} from "../../functions/professionalMethods";
import AlertPopUp from "../AlertPopUp/AlertPopUp";
import "./ValidatePayment.css";
import { decryptToken, verficarEmail } from "../../functions/otherMethods";
import { useNavigate } from "react-router";

// Para ingresar a este componente => localhost:3000/inaccessible-route?fromExternalURL=true

// Falta agregar los controles de errores (si no está el user en localstores send message)

// Agregar mensaje en validación para UX

const ValidatePayment = () => {
  const navigate = useNavigate();

  const [openPopUp, setOpenPopUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [code, setCode] = useState("");

  const [emailButtonShow, setEmailButtonShow] = useState(true);
  const [showCodeValidator, setShowCodeValidator] = useState(false);

  //Handler Code Verif
  const handleToggleContent = () => {
    setShowCodeValidator(!showCodeValidator);
  };

  // Input Handler
  const codeHandler = (e) => {
    setCode(e.target.value);
  };

  // Retrieve data from localStorage
  const userData = localStorage.getItem("user");

  const parsedData = JSON.parse(userData); // Parseamos data del localhost

  // Validar código y pegarle a la base para validar la suscripción

  const validateCodeAndEnableSuscription = () => {
    const username = parsedData["username"];

    generateHash(username).then((userInfo) => {
      const token = userInfo; // Tomamos token

      if (token == code) {
        verficarEmail(username); // Verifica Username

        setErrorMessage("¡Éxito!");
        setAlertMessage("Su cuenta ha sido verificada exitosamente.");

        setTimeout(() => {
          setOpenPopUp(true);
        }, 0);

        setTimeout(() => {
          navigate("/");
        }, 5000);
      } else {
        setErrorMessage("Ups! Hubo un problema");
        setAlertMessage(
          "El codigo ingresado no es correcto, por favor intente más tarde."
        );

        setTimeout(() => {
          setOpenPopUp(true);
        }, 0);

        setTimeout(() => {
          setOpenPopUp(false);
        }, 5000);
      }
    });
  };

  // Función para generar el hash
  const generateHash = async (username) => {
    const encoder = new TextEncoder();
    const userBuffer = encoder.encode(username);
    const hashBuffer = await crypto.subtle.digest("SHA-256", userBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    const token = hashHex.substr(0, 10); // Generación de token único, los 10 primeros carácteres
    console.log(token);
    return token;
  };

  //Send Email for Validation

  const sendEmailValidation = () => {
    const username = parsedData["username"]; // Tomamos el user desde los datos parseados
    const serviceID = "service_epptsak"; // Reemplaza con tu ServiceID de emailJS
    const templateID = "template_p7rvwjd"; // Reemplaza con tu TemplateID de emailJS
    const publicKey = "jbLjGuaWWG4ng7Dco"; // Reemplaza con tu PublicKey de emailJS

    generateHash(username).then((userToken) => {
      const token = userToken; // Tomamos token

      GetByProfUsername(username).then((response) => {
        // Seteamos datos para el mail a enviar

        const nombre = response.nombre;
        const apellido = response.apellido;
        const mail = response.mail;

        const templateParams = {
          to_name: nombre + " " + apellido,
          from_name: "SaTurno Servicios",
          message: token,
          to_email: mail, // Dirección de correo electrónico del destinatario
        };

        emailjs
          .send(serviceID, templateID, templateParams, publicKey)
          .then((response) => {
            setErrorMessage("¡Éxito!");
            setAlertMessage(
              "El correo con el código e instrucciones para validar y activar su cuenta se envió correctamente."
            );
            handleToggleContent(); // Shows Code Validator

            setTimeout(() => {
              setOpenPopUp(true);
              setEmailButtonShow(false); // Hides Send Email // Chequear
            }, 0);
          })
          .catch((error) => {
            setErrorMessage("Ocurrió un error");
            setAlertMessage("Hubo un error al enviar el correo electrónico.");
            setTimeout(() => {
              setOpenPopUp(true);
            }, 0);
          });
      });
    });
  };

  // Solamente usar el botón "toggle show validator" en testing

  return (
    <div>
      <AlertPopUp
        open={openPopUp}
        onClose={() => setOpenPopUp(false)}
        titulo={errorMessage}
        mensaje={alertMessage}
      />
      <Button
        className="button me-2"
        show={emailButtonShow}
        variant="primary"
        onClick={sendEmailValidation}
      >
        Enviar email
      </Button>
      <Button
        className="button"
        show={true}
        variant="primary"
        onClick={handleToggleContent}
      >
        Mostrar validador
      </Button>

      {showCodeValidator && (
        <div className="mt-4">
          <p>
            Ingrese el <strong>código</strong> enviado a su mail para terminar
            la verificación de su cuenta:
          </p>
          <div className="divardo">
            <Form.Group className="mt-1">
              <Form.Label>Código</Form.Label>
              <Form.Control
                type="text-area"
                rows="5"
                cols="33"
                value={code}
                onChange={codeHandler}
              ></Form.Control>
            </Form.Group>
            <br></br>
            <Button
              className="button"
              show={true}
              variant="primary"
              onClick={validateCodeAndEnableSuscription}
            >
              Validar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValidatePayment;
