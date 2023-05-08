import React from "react";

import "./Content1.css";

import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import ThemeContext from "../../../../Contexts/ThemeContext/ThemeContext";

const Content1 = () => {
  const empleada1 = require("./empleada1.jpg");
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Row className="justify-content-center content1 py-4 align-items-center">
        <Col xs={8} md={3}>
          <Image src={empleada1} fluid roundedCircle />
        </Col>
        <Col xs={10} md={4} className="my-3 my-lg-0">
          <h1 className="text-white font-weight-bold">
            El gestor de turnos que tu negocio estaba necesitando
          </h1>
          <Link to={"/profesionales"}>
            <Button className={theme} color="primary">
              <FaRegUser /> Ver más
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Content1;
