import React from "react";

import CarruselBs from "./CarruselBs/CarruselBs";
import CardsProfesionales from "./CardsProfesionales/CardsProfesionalesF";

import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <>
      <Container className="py-3 px-0">
        <CarruselBs />
      </Container>
      <Container className="pb-5">
        <h5 className="mb-4">Encontrá los mejores lugares en Rosario</h5>
        <CardsProfesionales />
      </Container>
    </>
  );
};

export default Home;
