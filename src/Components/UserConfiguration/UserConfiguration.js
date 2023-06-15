import React, { useState, useEffect, useRef } from "react";

import { Col, Container, Row, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Image as BootstrapImage } from "react-bootstrap";

import { editClient } from "../../functions/clientMethods";
import { getUserByUsername } from "../../functions/clientMethods";
import { Input } from "reactstrap";
import { decryptToken } from "../../functions/otherMethods";

const UserConfiguration = () => {
  //set de la info en los inputs
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [ubication, setUbication] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [username, setUsername] = useState("");

  //BASE 64

  const [base64Image, setBase64Image] = useState("");

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxSize = 200;
          let width = img.width;
          let height = img.height;

          if (width !== height) {
            const aspectRatio = width / height;
            if (width > height) {
              height = maxSize;
              width = Math.round(maxSize * aspectRatio);
            } else {
              width = maxSize;
              height = Math.round(maxSize / aspectRatio);
            }
          }

          const offsetX = Math.round((maxSize - width) / 2);
          const offsetY = Math.round((maxSize - height) / 2);

          canvas.width = maxSize;
          canvas.height = maxSize;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, offsetX, offsetY, width, height);

          const base64 = canvas.toDataURL("image/jpeg", 0.2);
          resolve(base64);
        };
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      convertToBase64(file)
        .then((base64) => {
          setBase64Image(base64);
          setFotoPerfil(base64);
        })
        .catch((error) => {
          console.log("Error al convertir la imagen:", error);
        });
    }
  };

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [headerModal, setHeaderModal] = useState();
  const [bodyModal, setBodyModal] = useState();
  const handlerHeaderModal = (data) => {
    setHeaderModal(data);
  };
  const handlerBodyModal = (data) => {
    setBodyModal(data);
  };

  // Error validation setters
  const [errors, setErrors] = useState({});
  const [errorsValidation, setErrorsValidation] = useState("");
  const inputName = useRef(null);
  const inputNameLast = useRef(null);
  const inputEmail = useRef(null);
  const inputPhoneNumber = useRef(null);
  const inputUbication = useRef(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const username = user.username;
    const accessToken = decryptToken(user.token);
    getUserByUsername(username, accessToken).then(function (response) {
      try {
        setName(response.data.nombre);
        setLastName(response.data.apellido);
        setUsername(response.data.username);
        setEmail(response.data.mail);
        setFechaNac(response.data.fechaNacimiento);
        setPhoneNumber(response.data.numTelefono);
        setFotoPerfil(response.data.fotoPerfil);
        setUbication(response.data.ubicacion);
      } catch (errors) {
        console.log(errors);
      }
    });
  }, []);

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
        name: "No debe contener más de 25 caracteres.",
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
      nombre: name,
      apellido: lastName,
      username: username,
      mail: email,
      ubicacion: ubication,
      numTelefono: phoneNumber,
      fechaNacimiento: fechaNac,
      fotoPerfil: fotoPerfil,
    };

    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = decryptToken(user.token);

    editClient(username, newUserData, accessToken).then(function (response) {
      if (response) {
        handlerHeaderModal(
          <Modal.Header closeButton>
            <Modal.Title>¡Modificación exitosa!</Modal.Title>
          </Modal.Header>
        );
        handlerBodyModal(
          <Modal.Body>Tu información fue modificada con exito</Modal.Body>
        );
      } else {
        handlerHeaderModal(
          <Modal.Header closeButton>
            <Modal.Title>¡Error en la modificacion!</Modal.Title>
          </Modal.Header>
        );
        handlerBodyModal(
          <Modal.Body>
            Hubo un problema al querer modificar tu información
          </Modal.Body>
        );
      }
      handleShow();
    });
  };

  return (
    <Container>
      <Row className="justify-content-around">
        <Col xs={8} className="text-start shadow-sm rounded p-5">
          <Row>
            <Col xs={12} className="border-bottom pb-4 mb-4" id="change-info">
              <h1>Modificar información personal</h1>
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
                  {errors.name && <div className="errors">{errors.name}</div>}
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
                    value={fechaNac}
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
                <Col xs={12} className="mt-4 border rounded">
                  <Row className="justify-content-center py-4 align-items-center">
                    <Col xs={3}>
                      <BootstrapImage src={fotoPerfil} fluid roundedCircle />
                    </Col>
                    <Col xs={7}>
                      <h5>Cambiar foto de perfil</h5>
                      {/* <Button variant="secondary">Cargar</Button> */}
                      <Input
                        type="file"
                        onChange={(e) => handleImageUpload(e)}
                        variant="secondary"
                      >
                        {" "}
                        Cargar{" "}
                      </Input>
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
          </Row>
        </Col>
        <Modal show={show} onHide={handleClose} centered>
          {headerModal}
          {bodyModal}
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default UserConfiguration;
