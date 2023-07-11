import React, { useState, useRef, useEffect } from "react";

import { Col, Container, Row, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import DatePicker from "react-date-picker";

import { RegisterClient } from "../../functions/clientMethods";
import AlertPopUp from "../AlertPopUp/AlertPopUp";
import {
  validacionesInputs,
  validacionesInputsTel,
  validacionesInputsEmail,
  validacionesInputsPass,
  validacionesInputsValidPass,
  validacionesInputsFecha,
} from "../../Validations/Validations";
import { getUbicaciones } from "../../functions/ubicationMethods";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    navigate("/");
  };
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  //estados
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fechaNac, setFechaNac] = useState(new Date());
  const [ubicacion, setUbicacion] = useState("");
  const [ubicaciones, setUbicaciones] = useState([]);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [openPopUp, setOpenPopUp] = useState(""); // Handler pop up
  //referencias
  const inputUserName = useRef(null);
  const inputNameLast = useRef(null);
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputFechaNac = useRef(null);
  const inputUbicacion = useRef(null);
  const inputPhoneNumber = useRef(null);
  const inputPassword = useRef(null);
  const inputValidPassword = useRef(null);
  //errores
  const [userNameError, setUserNameError] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ubicacionError, setUbicacionError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [fechaNacError, setFechaNacError] = useState("");
  const [passError, setPassError] = useState("");
  const [validPassError, setValidPassError] = useState("");

  //mapear lista de ubicaciones
  useEffect(() => {
    getUbicaciones()
      .then((response) => {
        console.log("listaUbicaciones", response);
        setUbicaciones([...response.data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //GUARDAR INFORMACIÓN
  const saveBaseUsuarioHandler = () => {
    if (
      userName === "" ||
      name === "" ||
      lastname === "" ||
      email === "" ||
      ubicacion === "" ||
      phoneNumber === "" ||
      password === "" ||
      validPassword === ""
    ) {
      setTimeout(() => {
        setOpenPopUp(true);
      }, 0);
    } else if (
      userNameError ||
      nameError ||
      lastnameError ||
      emailError ||
      ubicacionError ||
      phoneNumberError ||
      passError ||
      validPassError
    ) {
      setTimeout(() => {
        setOpenPopUp(true);
      }, 0);
    } else {
      const usuarioDatos = {
        idUsuariosNavigation: {
          nombre: name,
          apellido: lastname,
          username: userName,
          mail: email,
          ubicacion: ubicacion,
          numTelefono: phoneNumber,
          fechaNacimiento: fechaNac.toISOString().split("T")[0],
          fotoPerfil: null,
          pass: password,
        },
      };
      console.log(usuarioDatos);
      RegisterClient(usuarioDatos);
      localStorage.setItem("user", userName);
      handleShow();
      cleanInputs();
    }
  };

  const cleanInputs = () => {
    setUserName("");
    setName("");
    setLastname("");
    setEmail("");
    setPhoneNumber("");
    setFechaNac("");
    setUbicacion("");
    setPassword("");
    setValidPassword("");
  };

  return (
    <Container className="py-3">
      <AlertPopUp
        open={openPopUp}
        onClose={() => setOpenPopUp(false)}
        titulo="Error"
        mensaje="Debe completar los campos requeridos y sin errores."
      />
      <Row className="justify-content-center text-start">
        <Col xs={12} lg={10} xl={7} className="border-bottom pb-4 mb-4">
          <h1>Registro de cliente</h1>
        </Col>
        <Col xs={12} lg={10} xl={7} className="mt-2">
          <Form>
            <Form.Group>
              <Form.Label>Nombre de usuario:</Form.Label>
              <Form.Control
                placeholder="Usuario"
                type="text"
                onChange={(event) => setUserName(event.target.value)}
                value={userName}
                ref={inputUserName}
                onBlur={() =>
                  setUserNameError(validacionesInputs(inputUserName.current))
                }
              />
              {userNameError && <div className="errors">{userNameError}</div>}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                placeholder="Homero"
                onChange={(event) => setName(event.target.value)}
                value={name}
                type="text"
                ref={inputName}
                onBlur={() =>
                  setNameError(validacionesInputs(inputName.current))
                }
              />
              {nameError && <div className="errors">{nameError}</div>}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Apellido:</Form.Label>
              <Form.Control
                placeholder="Simpson"
                onChange={(event) => setLastname(event.target.value)}
                value={lastname}
                type="text"
                ref={inputNameLast}
                onBlur={() =>
                  setLastnameError(validacionesInputs(inputNameLast.current))
                }
              />
              {lastnameError && <div className="errors">{lastnameError}</div>}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                placeholder="ejemplo@gmail.com"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                ref={inputEmail}
                onBlur={() =>
                  setEmailError(validacionesInputsEmail(inputEmail.current))
                }
              />
              {emailError && <div className="errors">{emailError}</div>}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Número de celular:</Form.Label>
              <Form.Control
                placeholder="3402000000"
                onChange={(event) => setPhoneNumber(event.target.value)}
                value={phoneNumber}
                type="text"
                ref={inputPhoneNumber}
                onBlur={() =>
                  setPhoneNumberError(
                    validacionesInputsTel(inputPhoneNumber.current)
                  )
                }
              />
              {phoneNumberError && (
                <div className="errors">{phoneNumberError}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Fecha de nacimiento:</Form.Label>
            </Form.Group>
            <DatePicker onChange={setFechaNac} value={fechaNac} />
            {fechaNacError && <div className="errors">{fechaNacError}</div>}
            <Form.Group className="mt-4">
              <Form.Label>Ubicación:</Form.Label>
              <Form.Select
                aria-label="select your city"
                value={ubicacion}
                onChange={(event) => setUbicacion(event.target.value)}
                ref={inputUbicacion}
                onBlur={() =>
                  setUbicacionError(validacionesInputs(inputUbicacion.current))
                }
              >
                <option value="" disabled>
                  Elegir una ciudad
                </option>
                {ubicaciones.map((ubicacion, index) => (
                  <option key={index} value={ubicacion}>
                    {ubicacion}
                  </option>
                ))}
              </Form.Select>
              {ubicacionError && <div className="errors">{ubicacionError}</div>}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                placeholder="Contraseña"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                type="password"
                ref={inputPassword}
                onBlur={() =>
                  setPassError(validacionesInputsPass(inputPassword.current))
                }
              />
              <Form.Text className="text-muted">
                La contraseña debe tener una mayúscula y un número
              </Form.Text>
              {passError && <div className="errors">{passError}</div>}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Repita la contraseña:</Form.Label>
              <Form.Control
                placeholder="Contraseña"
                onChange={(event) => setValidPassword(event.target.value)}
                value={validPassword}
                type="password"
                ref={inputValidPassword}
                onBlur={() =>
                  setValidPassError(
                    validacionesInputsValidPass({
                      value1: inputValidPassword.current.value,
                      value2: password,
                    })
                  )
                }
              />
              {validPassError && <div className="errors">{validPassError}</div>}
            </Form.Group>
            <Button
              variant="primary"
              className="mt-4"
              onClick={saveBaseUsuarioHandler}
            >
              Enviar
            </Button>
            <Button
              variant="secondary"
              className="mt-4 mx-2"
              onClick={cleanInputs}
            >
              Resetear
            </Button>
          </Form>
        </Col>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>¡Registro exitoso!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Ya puedes sacar turnos con tus profesionales favoritos
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Ir al Inicio
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default SignUp;
