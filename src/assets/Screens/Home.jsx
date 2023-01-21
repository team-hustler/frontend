import React from "react";
import group from "../Images/group-1.png";
import card from "../Images/card.png";
import Carausel from "../Components/Carausel";
import children from "../Images/children.jpg";
function Learn() {
  return (
    <div className="  flex flex-col items-center justify-center mb-5 ">
      <img
        src="https://source.unsplash.com/random/300x300"
        className="drop-shadow-lg "
        alt=""
      />
      <h1 className="text-md my-2 text-black">
        Learn Proven Techniques and Practices
      </h1>
      <button className="bg-lgreen text-white px-5 my-3 py-2">
        Start my Journey
      </button>
    </div>
  );
}
const Home = () => {
  return (
    <div className="bg-white w-full md:w-[30rem] flex flex-col  items-center">
      <div className="w-full p-2">
        <Carausel />
      </div>
      <h1 className="text-xl font-bold text-lgreen my-5">
        Technologies for Wellbeing
      </h1>

      <Learn />
      <Learn />
      <Learn />
      <div className="bg-dgreen relative mt-20 flex flex-col px-11 items-center justify-center">
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
        <div className="flex flex-col mt-5">
          <img src={children} className="w-2/3 rounded-md" alt="" />
          <h1 className="mt-2 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            corporis dignissimos tenetur beatae eaque deserunt autem omnis quos.
            Accusantium quod veniam, eum ipsa velit ad similique optio! Nihil,
            ipsa esse.
          </h1>
          <button className=" bg-lgreen text-white w-max px-5 my-3 py-2">
            Learn More
          </button>
        </div>
        <div className="flex flex-col mt-5 justify-items-end items-end">
          <img src={children} className="w-2/3 rounded-md" alt="" />
          <h1 className="mt-2 text-right text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            corporis dignissimos tenetur beatae eaque deserunt autem omnis quos.
            Accusantium quod veniam, eum ipsa velit ad similique optio! Nihil,
            ipsa esse.
          </h1>
          <div className="w-full bg-white"></div>
          <button className=" bg-lgreen text-white w-max px-5 my-3 py-2">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-14 flex flex-col justify-center items-center">
        <img src={card} className="w-9/12 drop-shadow-xl mb-5 " alt="" />
        <img src={card} className="w-9/12 drop-shadow-xl mb-5 " alt="" />
        <img src={card} className="w-9/12 drop-shadow-xl mb-5 " alt="" />
      </div>
    </div>
  );
};

export default Home;
