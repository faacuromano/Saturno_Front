import React from "react";
import "./CardProfesional.css";

import Card from "react-bootstrap/Card";
import { FiClock } from "react-icons/fi";
import { BiMap } from "react-icons/bi";

const CardProfesional = () => {
  const cardImg = require("./smart-fit.jpg");
  return (
    <>
      <Card>
        <Card.Img variant="top" src={cardImg} />
        <Card.Body>
          <Card.Title>Smart Fit</Card.Title>
          <Card.Subtitle className="text-muted mb-2">Gimnasio</Card.Subtitle>
          <Card.Text>
            <ul className="list-unstyled mb-0">
              <li>
                <BiMap />
                Pasco 1333 - Rosario
              </li>
              <li>
                <FiClock />
                <span className="ml-4">Lun a Vie - 8 a 21hs</span>
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProfesional;
