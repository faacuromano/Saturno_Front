import React, { useState, useContext } from "react";

import "./Login.css";

import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { useNavigate, Link } from "react-router-dom";
import { authClient } from "../../functions/clientMethods";
import LoginContext from "../../Contexts/ThemeContext/LoginContext";

const Login = () => {
  const navigate = useNavigate(); // Allows us to redirect
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const { auth, handleLogin } = useContext(LoginContext);

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

  const passwordValidation = () => {
    if (password === "") {
      setErrors({ ...errors, password: "Campo obligatorio." });
    } else if (password.length < 4 || password.length > 10) {
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

  const loginHandler = () => {
    authClient(userName, password).then(function (response) {
      if (response) {
        localStorage.setItem("user", response.data.user.username);
        const newAuth = {
          username: response.data.user.username,
          token: response.data.token,
          tipoCuenta: response.data.user.tipoCuenta,
        };
        handleLogin(newAuth);
        navigate("/");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
    setUserName("");
    setPassword("");
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center text-start">
        <Col xs={12} lg={10} xl={7} className="border-bottom pb-4">
          <h1>Iniciar sesión</h1>
        </Col>
        <Col xs={12} lg={10} xl={7} className="mt-4">
          <Form>
            <Form.Group>
              <Form.Label>Nombre de usuario:</Form.Label>
              <Form.Control
                type="text"
                id="userName"
                onChange={(event) => setUserName(event.target.value)}
                onBlur={userNameValidation}
                value={userName}
              />
              {errors.userName && (
                <div className="errors">{errors.userName}</div>
              )}
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
                onBlur={passwordValidation}
                value={password}
              />
              {errors.password && (
                <div className="errors">{errors.password}</div>
              )}
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
