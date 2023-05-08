import React, { useState, useEffect } from "react";
import { getProfessionals } from "../../../functions/professionalMethods";
import { get_n_Professionals } from "../../../functions/professionalMethods";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardProfesionalF from "./CardProfesionalF";
import { Link } from "react-router-dom";

const CardsProfesionales = () => {
  const [professional, setProfessional] = useState([]);

  useEffect(() => {
    async function loadProfessional() {
      try {
        const response = await  get_n_Professionals(4);
        if (response.status === 200) {
          setProfessional(response.data);
          console.log(response)
        }
      } catch (e) {
        console.log("Catch: ", e);
      }
    }
    loadProfessional();
  }, []);

  const storeProfessional = (item) => {
    console.log(item);
    localStorage.removeItem("prof");
    localStorage.setItem("prof", item.idUsuarios);
  };

  return (
    <>
      <Row className="justify-content-around">
        {professional.length < 1 ? (
          <h1> No hay datos disponibles </h1>
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
