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
          "https://www.mindanews.com/wp-content/uploads/2011/09/05teach1.jpg?fbclid=IwAR2r8LWZfJ1spFVpf9_8-Y1MTXcJpUM5rFqLhf6RXpGZLPNZWfVZz7uHboU"
        }
      />
      <img
        src={
          "https://world.time.com/wp-content/uploads/sites/17/2013/11/1500_int_zbrabove_1209.jpg?w=720&h=480&crop=1&fbclid=IwAR3iT_nmsG3cjWVMPSa3COKglauM2q6vx2c_GpONK_aKdDA8KmchWlilbRk"
        }
      />
      <img
        src={
          "https://thedailynewnation.com/library/1425130723_6.jpg?fbclid=IwAR0Fr070gk3Ja6oeC08T21AD8aRdQKyLfe-k5h47ulNu2KCSg9MXyXjg9KU"
        }
      />
    </Slider>
  );
};

export default Carausel;
