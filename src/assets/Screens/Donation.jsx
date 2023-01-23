import React from "react";
import group from "../Images/group-1.png";
import children from "../Images/children.jpg";
import { Link } from "react-router-dom";

const Donation = () => {
  function Section({ reverse, title, image = children, link = "#" }) {
    return (
      <div
        className={`flex flex-col mt-5 bg-white mb-8 drop-shadow-lg rounded-md p-3 ${
          reverse && "justify-items-end items-end"
        } `}
      >
        <img src={image} className="w-full rounded-md" alt="" />
        <h1 className={`mt-3 text-dgreen ${reverse && "text-right"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          corporis dignissimos tenetur beatae eaque deserunt autem omnis quos.
          Accusantium quod veniam, eum ipsa velit ad similique optio! Nihil,
          ipsa esse.
        </h1>
        <Link to={link}>
          <button className=" bg-lgreen text-white w-max px-5 my-3 py-2">
            {title}
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="bg-white w-full md:w-[30rem] flex flex-col  items-center">
      <div className="bg-white relative pt-8 flex flex-col px-11 items-center justify-center">
        <Section
          image="https://thedailynewnation.com/library/1425130723_6.jpg?fbclid=IwAR0Fr070gk3Ja6oeC08T21AD8aRdQKyLfe-k5h47ulNu2KCSg9MXyXjg9KU"
          reverse={false}
          title={"Donate Clothes"}
        />
        <Section reverse={true} title={"Health Camp for Children"} />
        <Section
          image={
            "https://world.time.com/wp-content/uploads/sites/17/2013/11/1500_int_zbrabove_1209.jpg?w=720&h=480&crop=1&fbclid=IwAR3iT_nmsG3cjWVMPSa3COKglauM2q6vx2c_GpONK_aKdDA8KmchWlilbRk"
          }
          reverse={false}
          title={"Donate Food"}
        />
        <Section
          image={
            "https://www.mindanews.com/wp-content/uploads/2011/09/05teach1.jpg?fbclid=IwAR2r8LWZfJ1spFVpf9_8-Y1MTXcJpUM5rFqLhf6RXpGZLPNZWfVZz7uHboU"
          }
          reverse={false}
          title={"Contribute"}
          link="/volunteer"
        />
      </div>
    </div>
  );
};

export default Donation;
