import React, { useEffect } from "react";

import CarruselBs from "./CarruselBs/CarruselBs";
import CardsProfesionales from "./CardsProfesionales/CardsProfesionalesF";

import Container from "react-bootstrap/Container";

const Home = () => {
  useEffect(() => {
    localStorage.removeItem("prof");
  }, []);

  return (
    <>
      <Container className="py-3 px-0">
        <CarruselBs />
      </Container>
      <Container className="pb-5">
        <CardsProfesionales />
      </Container>
    </>
  );
};

export default Home;
