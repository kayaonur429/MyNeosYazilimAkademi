import React from "react";
import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.neosyazilim.com/media/duyurular/devam_ediyor_2000__1000_piksel_1_1.png"
          alt="First slide"
          id="slider1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="slider2"
          src="https://www.neosyazilim.com/media/duyurular/huge_2000__1000_piksel_3_2.png"
          alt="Second slide"
        />
      </Carousel.Item>
 
    </Carousel>
  );
}

export default UncontrolledExample;
