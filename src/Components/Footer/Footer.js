import React from "react";
import "./Footer.css";

import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <p>
        Saturno App y todos sus derivados son propiedad única y exclusiva del{" "}
        <strong>Grupo 4©</strong>
      </p>
    </Container>
  );
};

export default Footer;
