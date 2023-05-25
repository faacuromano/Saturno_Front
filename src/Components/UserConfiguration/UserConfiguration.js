import React, { useState, useEffect, useRef } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";

import { editClient } from "../../functions/clientMethods";

const UserConfiguration = () => {
  //catch del user en la local host
  const [user, setUser] = useState([]);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("user"));
    setUser(usuario);

    setName(usuario.user.nombre);
    setLastName(usuario.user.apellido);
    setEmail(usuario.user.mail);
    setFechaNac(usuario.user.fechaNacimiento);
    setPhoneNumber(usuario.user.numTelefono);
    setFotoPerfil(usuario.user.fotoPerfil);
  }, []);

  //set de la info en los inputs
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [ubication, setUbication] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");

  // Error validation setters
  const [errors, setErrors] = useState({});
  const [errorsValidation, setErrorsValidation] = useState("");
  const inputName = useRef(null);
  const inputNameLast = useRef(null);
  const inputEmail = useRef(null);
  const inputPhoneNumber = useRef(null);
  const inputUbication = useRef(null);

  //Handler de nombre y apellido, validador de apellido
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const nameValidation = () => {
    if (name === "") {
      setErrors({ ...errors, name: "Campo obligatorio." });
    } else if (name.length > 25) {
      setErrors({
        ...errors,
        name: "Debe contener no más de 25 caracteres.",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.name;
      setErrors(_errors);
    }
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const LastnameValidation = () => {
    if (lastName === "") {
      setErrors({ ...errors, lastName: "Campo obligatorio." });
    } else if (lastName.length < 5 || lastName.length > 25) {
      setErrors({
        ...errors,
        lastName: "Debe contener entre 5 y 25 caracteres.",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.lastName;
      setErrors(_errors);
    }
  };
  //Handler y validación de email
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
  //Handler y validación de teléfono
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

  //Handler y validación de ubicación
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

  //Guardar cambios
  const updateUserData = () => {
    const newUserData = {
      id: user.id,
      nombre: name,
      apellido: lastName,
      username: user.username,
      mail: email,
      numTelefono: phoneNumber,
      fechaNacimiento: fechaNac,
      fotoPerfil: user.fotoPerfil,
    };

    editClient(newUserData.id, newUserData).then(function (response) {
      alert(response.data);
      console.log(response);
    });
    localStorage.setItem("user", JSON.stringify(newUserData));
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-around">
        <Col xs={3} className="text-end border-end pe-4">
          <a href="#change-info" className="fw-bold">
            <p>Modificar información</p>
          </a>
          <a href="#change-password" className="fw-bold">
            <p>Cambiar contraseña</p>
          </a>
        </Col>
        <Col xs={8} className="text-start">
          <Row>
            <Col xs={12} className="border-bottom pb-4 mb-4" id="change-info">
              <h1>Modificar información</h1>
            </Col>
            <Col xs={12}>
              <Form>
                <Form.Group>
                  <Form.Label>Nombre:</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={nameHandler}
                    onBlur={nameValidation}
                    ref={inputName}
                  />
                   {errors.name && (
                    <div className="errors">{errors.name}</div>
                  )}
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Apellido:</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={lastNameHandler}
                    ref={inputNameLast}
                    onBlur={LastnameValidation}
                  />
                  {errors.lastName && (
                    <div className="errors">{errors.lastName}</div>
                  )}
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={emailHandler}
                    ref={inputEmail}
                    onBlur={emailValidation}
                  />
                  {errors.email && <div className="errors">{errors.email}</div>}
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Número de celular:</Form.Label>
                  <Form.Control
                    type="tel"
                    value={phoneNumber}
                    onChange={phoneNumberHandler}
                    onBlur={phoneNumberValidation}
                    ref={inputPhoneNumber}
                  />
                  {errors.phoneNumber && (
                    <div className="errors">{errors.phoneNumber}</div>
                  )}
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Fecha de nacimiento (yyyy-mm-dd)</Form.Label>
                  <Form.Control
                    type="text"
                    value={fechaNac.slice(0, 10)}
                    onChange={fechaNacHandler}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Ciudad:</Form.Label>
                  <Form.Select
                    aria-label="select your city"
                    value={ubication}
                    onChange={ubicationHandler}
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
                {<div className="errorsValidation">{errorsValidation}</div>}
                <Col xs={8} className="mt-4 border rounded">
                  <Row className="justify-content-center py-4 align-items-center">
                    <Col xs={3}>
                      <Image src={fotoPerfil} fluid roundedCircle />
                    </Col>
                    <Col xs={7}>
                      <h5>Cambiar foto de perfil</h5>
                      <Button variant="secondary">Cargar</Button>
                    </Col>
                  </Row>
                </Col>
                <Button
                  variant="primary"
                  className="mt-4"
                  onClick={updateUserData}
                >
                  Guardar cambios
                </Button>
              </Form>
            </Col>
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
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Constraseña nueva:</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Repita la contraseña nueva:</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Button variant="primary" className="mt-4">
                  Cambiar
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserConfiguration;
