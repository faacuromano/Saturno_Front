import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Content1 from "./Content1/Content1";
import Content2 from "./Content2/Content2";

const CarruselBs = () => {
  return (
    <Carousel controls={false} className="mb-3">
      <Carousel.Item>
        <Content1 />
      </Carousel.Item>
      <Carousel.Item>
        <Content2 />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarruselBs;
