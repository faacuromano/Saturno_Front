import React, { useState, useEffect } from "react";
import { getProfessionals } from "../../../functions/professionalMethods";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import CardProfesionalF from "./CardProfesionalF";

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

  return (
    <>
      <Row className="">
        {professional.length < 1 ? (
          <p className="display-6 my-5 text-center">
            <strong>Ups!</strong> No hay datos disponibles (?)
          </p>
        ) : (
          professional.map((item, index) => (
            <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0" key={index}>
              <Link to={`/perfilProfesional/${item.username}`}>
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
