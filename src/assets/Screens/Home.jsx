import React from "react";
import group from "../Images/group-1.png";
import card from "../Images/card.png";
import Carausel from "../Components/Carausel";
import children from "../Images/children.jpg";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
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
        Accusantium quod veniam, eum ipsa velit ad similique optio! Nihil, ipsa
        esse.
      </h1>
      <Link to={link}>
        <button className=" bg-lgreen text-white w-max px-5 my-3 py-2">
          {title}
        </button>
      </Link>
    </div>
  );
}
function Learn() {
  return (
    <div className=" border-gray-100 border-2 p-4 shadow-lg rounded-md flex flex-col items-center justify-center mb-8 ">
      <img
        src="https://source.unsplash.com/random/300x300"
        className="drop-shadow-lg "
        alt=""
      />
      <h1 className="text-md my-2 text-black">
        Learn Proven Techniques and Practices
      </h1>
      <button className="bg-lgreen text-white px-5 my-2 py-2">
        Start my Journey
      </button>
    </div>
  );
}
const Home = () => {
  return (
    <div className="bg-white w-full md:w-[30rem] flex flex-col  items-center">
      <div className="w-full overflow-hidden ">
        <Carausel />
      </div>
      <h1 className="text-xl font-bold text-lgreen my-5">
        Technologies for Wellbeing
      </h1>

      <Learn />
      <Learn />
      <Learn />
      <div className="bg-gray-100 relative mt-20 flex flex-col px-11 items-center justify-center">
        <div className="flex flex-col bottom-7 relative   items-center justify-center">
          <img src={group} className=" rounded-lg drop-shadow-xl" alt="" />
          <div className="absolute flex flex-col items-center justify-center">
            <h1 className=" w-3/4 text-center text-2xl font-bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h1>
            <button className=" bg-lgreen text-white px-5 my-3 py-2">
              Learn More
            </button>
          </div>
        </div>
        <Section reverse={false} title={"Donate Clothes"} />
        <Section reverse={true} title={"Health Camp for Children"} />
      </div>
      <div className="mt-14 flex flex-col justify-center items-center">
        <img src={card} className="w-9/12 shadow-md rounded-md mb-5 " alt="" />
        <img src={card} className="w-9/12 shadow-md rounded-md mb-5 " alt="" />
        <img src={card} className="w-9/12 shadow-md rounded-md mb-5 " alt="" />
      </div>
      <div className="relative ">
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Home;
