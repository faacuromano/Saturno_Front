import React, { useState, useContext, useRef } from "react";

import "./Login.css";

import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { useNavigate, Link } from "react-router-dom";
import { authClient } from "../../functions/clientMethods";
import LoginContext from "../../Contexts/ThemeContext/LoginContext";
import AlertPopUp from "../AlertPopUp/AlertPopUp";
import { GetServiceByUsername } from "../../functions/serviceMethods";
import { validacionesInputs } from "../../Validations/Validations";

const Login = () => {
  const navigate = useNavigate(); // Allows us to redirect
  const [userName, setUserName] = useState("");
  const inputUserName = useRef(userName);
  const [userNameError, setUserNameError] = useState();
  const [passError, setPassError] = useState()
  const [password, setPassword] = useState("");
  const inputPass = useRef();
  const { auth, handleLogin } = useContext(LoginContext);
  const [openPopUp, setOpenPopUp] = useState(false); // Allows alerts to show up

 
  const loginHandler = () => {
    authClient(userName, password).then(function (response) {
      if (response) {
        const newAuth = {
          username: response.data.user.username,
          token: response.data.token,
          tipoCuenta: response.data.user.tipoCuenta,
        };
        localStorage.setItem("user", JSON.stringify(newAuth));
        handleLogin(newAuth);

        if (newAuth.tipoCuenta === "P") {
          GetServiceByUsername(newAuth.username).then(function (
            serviceResponse
          ) {
            if (serviceResponse.length > 0) {
              // El cliente tiene servicios asociados
              navigate("/");
              console.log("El cliente tiene servicios");
            } else {
              // El cliente no tiene servicios asociados
              navigate("/servicesettings");
              console.log("El cliente no tiene servicios");
            }
            // Navegar a la ruta principal
          });
        } else {
          navigate("/");
        }
      } else {
        setTimeout(() => {
          setOpenPopUp(true);
        }, 0);
      }
    });
  };

  return (
    <Container className="py-3">
      <AlertPopUp
        open={openPopUp}
        onClose={() => setOpenPopUp(false)}
        titulo="Error"
        mensaje="Usuario o contraseña incorrectos."
      />
      <Row className="justify-content-center text-start">
        <Col xs={12} lg={10} xl={7} className="border-bottom pb-4">
          <h1>Iniciar sesión</h1>
        </Col>
        <Col xs={12} lg={10} xl={7} className="mt-4">
          <Form>
            <Form.Group>
              <Form.Label>Nombre de usuario:</Form.Label>
              <Form.Control
                placeholder="Usuario"
                type="text"
                id="userName"
                ref={inputUserName}
                onBlur={()=> setUserNameError(validacionesInputs(inputUserName.current))}
                onChange={(event) => setUserName(event.target.value)}
                value={userName}
              />
              {userNameError && (
                  <div className="errors"> 
                    {userNameError}
                  </div>)}
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                placeholder="Contraseña"
                type="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                ref={inputPass}
                onBlur={()=> setPassError(validacionesInputs(inputPass.current))}
              />
              {passError && (
                  <div className="errors"> 
                    {passError}
                  </div>)} 
            </Form.Group>
            <Button onClick={loginHandler} color="primary" className="mb-4">
              Entrar
            </Button>
          </Form>
          <p className="mb-1">
            <b>¿Olvidaste tu contraseña?</b> Hacé click{" "}
            <Link to={"/recoverPassword"} className="colorLink">
              acá!
            </Link>
          </p>
          <p>
            <b>¿No tenés cuenta?</b> Hacé click{" "}
            <Link to={"/tipo-de-cuenta"} className="colorLink">
              acá
            </Link>{" "}
            para registrarte.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
