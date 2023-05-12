import React, { useState, useEffect } from "react";
import { getProfessionals } from "../../../functions/professionalMethods";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardProfesionalF from "./CardProfesionalF";
import { Link } from "react-router-dom";

const CardsProfesionales = () => {
  const [professional, setProfessional] = useState([]);

  useEffect(() => {
    async function loadProfessional() {
      try {
        const response = await getProfessionals();
        if (response.status === 200) {
          setProfessional(response.data);
        }
      } catch (e) {
        console.log("Catch: ", e);
      }
    }
    loadProfessional();
  }, []);

  const storeProfessional = (item) => {
    var profesional = JSON.stringify(item);
    localStorage.removeItem("prof");
    localStorage.setItem("prof", profesional);
  };

  return (
    <>
      <Row className="justify-content-center">
        {professional.length < 1 ? (
          <p className="display-6 my-5 text-center">
          <strong>Ups!</strong> No hay datos disponibles (?)
        </p>
        ) : (
          professional.map((item) => (
            <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
              <Link
                to={"/perfilProfesional"}
                onClick={storeProfessional.bind(this, item)}
              >
                <CardProfesionalF data={item} />
              </Link>
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default CardsProfesionales;
