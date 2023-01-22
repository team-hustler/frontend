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
        <img src={image} className="w-2/3 rounded-md" alt="" />
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
      <div className="bg-gray-100 relative pt-8 flex flex-col px-11 items-center justify-center">
        <Section reverse={false} title={"Donate Clothes"} />
        <Section reverse={true} title={"Health Camp for Children"} />
        <Section reverse={false} title={"Donate Food"} />
        <Section reverse={true} title={"Donate Educational Product"} />
        <Section reverse={false} title={"Contribute"} link="/volunteer" />
      </div>
    </div>
  );
};

export default Donation;
