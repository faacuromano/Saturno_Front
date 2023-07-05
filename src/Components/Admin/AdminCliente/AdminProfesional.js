import React from "react";
import { useEffect, useState, useContext } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";

import { editClient, DeleteClient } from "../../../functions/clientMethods";
import LoginContext from "../../../Contexts/ThemeContext/LoginContext";
import { decryptToken } from "../../../functions/otherMethods"
import { DeleteProfesional } from "../../../functions/professionalMethods";

const AdminProfesional = () => {
  const navigate = useNavigate()
  const { auth, handleLogin } = useContext(LoginContext);


  const [ID, setID] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [ubication, setUbication] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  }

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastname(e.target.value);
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  }

  const fechaNacHandler = (e) => {
    setFechaNac(e.target.value);
  }

  const ubicationHandler = (e) => {
    setUbication(e.target.value);
  }

  const updateUserData = () => {
    const newUserData = {
        id: ID,
        nombre: name,
        apellido: lastname,
        username: userName,
        mail: email,
        ubicacion: ubication,
        numTelefono: phoneNumber,
        fechaNacimiento: fechaNac,
        fotoPerfil: ""
    };

    editClient(newUserData.username, newUserData, accessToken).then(function (response) {
      console.log(response);
    });

  };
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = decryptToken(user.token);

  const deleteUser = () => {
    DeleteProfesional(userName, accessToken)
    navigate("/admin")
  }
  
  useEffect(()=>{
        const dataCliente = JSON.parse(localStorage.getItem("cliente"))
        const cliente = dataCliente.user
        setID(cliente.id)
        setUserName(cliente.username)
        setName(cliente.nombre)
        setLastname(cliente.apellido)
        setEmail(cliente.mail)
        setPhoneNumber(cliente.numTelefono)
        setFechaNac(cliente.fechaNacimiento)
  },[])

  return (
    <Container>
      <Row className="justify-content-center text-start">
        <Col xl={7}>
          <h4>Cliente</h4>
        </Col>
        <Col xl={7}>
          <Form>
            <Form.Group className="my-4">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" value={userName} onChange={userNameHandler}/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" value={name} onChange={nameHandler}/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Apellido:</Form.Label>
              <Form.Control type="text" value={lastname} onChange={lastNameHandler}/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" value={email} onChange={emailHandler}/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Número de teléfono:</Form.Label>
              <Form.Control type="text" value={phoneNumber} onChange={phoneNumberHandler}/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Fecha de nacimiento:</Form.Label>
              <Form.Control type="text" value={fechaNac} onChange={fechaNacHandler}/>
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Ubicación:</Form.Label>
              <Form.Control type="text" value={ubication} onChange={ubicationHandler}/>
            </Form.Group>
          </Form>
        </Col>
        <Col xl={7} className="mt-3">
          <Link to={"/admin"}><Button variant="secondary" className="me-2">Volver</Button></Link>
          <Button className="me-2" onClick={updateUserData}>Modificar cliente</Button>
          <Button variant="danger" onClick={deleteUser}>Eliminar cliente</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminProfesional;
