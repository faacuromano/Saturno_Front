import React, { useState, useRef } from "react";

import { Col, Container, Row, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";

import { RegisterClient } from "../../functions/clientMethods";
import AlertPopUp from "../AlertPopUp/AlertPopUp";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    navigate("/");
  };
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [ubication, setUbication] = useState("Rosario");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [openPopUp, setOpenPopUp] = useState(""); // Handler pop up

  const inputUserName = useRef(null);
  const inputNameLast = useRef(null);
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPhoneNumber = useRef(null);
  const inputUbication = useRef(null);
  const inputPassword = useRef(null);
  const inputValidPassword = useRef(null);

  const [errors, setErrors] = useState({});
  const [errorsValidation, setErrorsValidation] = useState("");

  // Handlers y validaciones
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userNameValidation = () => {
    if (userName === "") {
      setErrors({ ...errors, userName: "Campo obligatorio." });
    } else if (userName.length < 4 || userName.length > 10) {
      setErrors({
        ...errors,
        userName: "Debe contener entre 4 y 10 caracteres.",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.userName;
      setErrors(_errors);
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const nameValidation = () => {
    if (name === "") {
      setErrors({ ...errors, name: "Campo obligatorio." });
    } else if (name.length > 25) {
      setErrors({
        ...errors,
        name: "No debe contener más de 25 caracteres.",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.name;
      setErrors(_errors);
    }
  };

  const lastnameHandler = (e) => {
    setLastname(e.target.value);
  };

  const LastnameValidation = () => {
    if (lastname === "") {
      setErrors({ ...errors, lastname: "Campo obligatorio." });
    } else if (lastname.length < 5 || lastname.length > 25) {
      setErrors({
        ...errors,
        lastname: "Debe contener entre 5 y 25 caracteres.",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.lastname;
      setErrors(_errors);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailValidation = () => {
    const validEmail = "@";
    const correct = email.match(validEmail);
    if (email === "") {
      setErrors({ ...errors, email: "Campo obligatorio." });
    } else if (!correct) {
      setErrors({ ...errors, email: "Ingrese un email correcto." });
    } else {
      let _errors = { ...errors };
      delete _errors.email;
      setErrors(_errors);
    }
  };

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const phoneNumberValidation = () => {
    if (phoneNumber === "") {
      setErrors({ ...errors, phoneNumber: "Campo obligatorio." });
    } else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      setErrors({ ...errors, phoneNumber: "Debe contener 10 números." });
    } else {
      let _errors = { ...errors };
      delete _errors.phoneNumber;
      setErrors(_errors);
    }
  };

  const fechaNacHandler = (e) => {
    setFechaNac(e.target.value);
  };

  const ubicationHandler = (e) => {
    setUbication(e.target.value);
  };

  const ubicationValidation = () => {
    if (ubication === "") {
      setErrors({ ...errors, ubication: "Campo obligatorio." });
    } else {
      let _errors = { ...errors };
      delete _errors.ubication;
      setErrors(_errors);
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const passwordValidation = () => {
    if (password === "") {
      setErrors({ ...errors, password: "Campo obligatorio." });
    } else if (password.length < 5 || password.length > 10) {
      setErrors({
        ...errors,
        password: "Debe contener entre 5 y 10 caracteres.",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.password;
      setErrors(_errors);
    }
  };

  const validPasswordHandler = (e) => {
    setValidPassword(e.target.value);
  };

  const validPasswordValidation = () => {
    if (validPassword === "") {
      setErrors({ ...errors, validPassword: "Campo obligatorio." });
    } else if (validPassword !== password) {
      setErrors({ ...errors, validPassword: "Las contraseñas no coinciden." });
    } else {
      let _errors = { ...errors };
      delete _errors.validPassword;
      setErrors(_errors);
    }
  };

  //GUARDAR INFORMACIÓN
  const saveBaseUsuarioHandler = () => {
    if (
      userName === "" ||
      name === "" ||
      lastname === "" ||
      email === "" ||
      phoneNumber === "" ||
      ubication === "" ||
      password === "" ||
      validPassword === ""
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
          ubicacion: ubication,
          numTelefono: phoneNumber,
          fechaNacimiento: fechaNac,
          fotoPerfil: null,
          pass: password,
        },
      };
      RegisterClient(usuarioDatos);
      localStorage.setItem("user", userName);
      handleShow();
      setErrorsValidation("");
    }
    cleanInputs();
  };

  const cleanInputs = () => {
    setUserName("");
    setName("");
    setLastname("");
    setEmail("");
    setPhoneNumber("");
    setFechaNac("");
    setUbication("");
    setPassword("");
    setValidPassword("");
  };

  return (
    <Container className="py-3">
      <AlertPopUp
        open={openPopUp}
        onClose={() => setOpenPopUp(false)}
        titulo="Error"
        mensaje="Debe completar los campos requeridos."
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
                placeholder="User123"
                type="text"
                onChange={userNameHandler}
                onBlur={userNameValidation}
                value={userName}
                ref={inputUserName}
              />
              {errors.userName && (
                <div className="errors">{errors.userName}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                placeholder="Juan"
                onChange={nameHandler}
                value={name}
                onBlur={nameValidation}
                type="text"
                ref={inputName}
              />
            </Form.Group>
            {errors.name && <div className="errors">{errors.name}</div>}
            <Form.Group className="mt-4">
              <Form.Label>Apellido:</Form.Label>
              <Form.Control
                placeholder="Topo"
                onChange={lastnameHandler}
                value={lastname}
                onBlur={LastnameValidation}
                type="text"
                ref={inputNameLast}
              />
              {errors.lastname && (
                <div className="errors">{errors.lastname}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                placeholder="ejemplo@gmail.com"
                onChange={emailHandler}
                value={email}
                onBlur={emailValidation}
                type="email"
                ref={inputEmail}
              />
              {errors.email && <div className="errors">{errors.email}</div>}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Número de celular:</Form.Label>
              <Form.Control
                placeholder="3402000000"
                onChange={phoneNumberHandler}
                value={phoneNumber}
                onBlur={phoneNumberValidation}
                type="text"
                ref={inputPhoneNumber}
              />
              {errors.phoneNumber && (
                <div className="errors">{errors.phoneNumber}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Fecha de nacimiento (yyyy-mm-dd)</Form.Label>
              <Form.Control
                placeholder="1965-03-25"
                onChange={fechaNacHandler}
                value={fechaNac}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Ubicación:</Form.Label>
              <Form.Select
                onChange={ubicationHandler}
                value={ubication}
                onBlur={ubicationValidation}
                ref={inputUbication}
              >
                <option>Elija su ciudad</option>
                <option value="Rosario">Rosario</option>
                <option value="Arroyo Seco">Arroyo Seco</option>
                <option value="VGG">Villa Gobernador Galvez</option>
                <option value="Baigorria">Baigorria</option>
              </Form.Select>
              {errors.ubication && (
                <div className="errors">{errors.ubication}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                placeholder="Contraseña"
                onChange={passwordHandler}
                onBlur={passwordValidation}
                value={password}
                type="password"
                ref={inputPassword}
              />
              {errors.password && (
                <div className="errors">{errors.password}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Repita la contraseña:</Form.Label>
              <Form.Control
                placeholder="Contraseña"
                onChange={validPasswordHandler}
                onBlur={validPasswordValidation}
                value={validPassword}
                type="password"
                ref={inputValidPassword}
              />
              {errors.validPassword && (
                <div className="errors">{errors.validPassword}</div>
              )}
            </Form.Group>
            {<div className="errorsValidation">{errorsValidation}</div>}
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
