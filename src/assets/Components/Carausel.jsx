import React from "react";
import Slider from "react-slick";
import children from "../Images/children.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carausel = () => {
  return (
    <Slider autoplay={true}>
      <img src={children} />
      <img
        src={
          "http://volunteersummernepal.org/wp-content/uploads/2011/12/street-children.jpg?fbclid=IwAR3pMSFWpz-OT3QJAfs8zDoz6dJ0o7-kqL64a0sk-mjxu79hQJ90z9WQdso"
        }
      />
      <img
        src={
          "https://world.time.com/wp-content/uploads/sites/17/2013/11/1500_int_zbrabove_1209.jpg?w=720&h=480&crop=1&fbclid=IwAR3iT_nmsG3cjWVMPSa3COKglauM2q6vx2c_GpONK_aKdDA8KmchWlilbRk"
        }
      />
    </Slider>
  );
};

export default Carausel;
