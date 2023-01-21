import React from "react";
import Slider from "react-slick";
import children from "../Images/children.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carausel = () => {
  return (
    <Slider autoplay={true}>
      <img src={children} />
      <img src={children} />
      <img src={children} />
    </Slider>
  );
};

export default Carausel;
