import React from "react";
import logo from "../Images/kuiro.png";

const Footer = () => {
  return (
    <div className="flex py-20 border-t-2 border-gray-100 bg-heroimg-pattern bg-cover  w-full md:w-[30rem]  text-center drop-shadow-2xl flex-col h-16 items-center justify-center ">
      <div className=" flex justify-around  w-full text-white items-center">
        <img src={logo} alt="" className=" h-14 object-contain" />
        <div className="text-left">
          <strong>Contact Us</strong>
          <h1>9812345678</h1>
          <h1>kuiro@gmail.com</h1>
        </div>
      </div>
      <div className="absolute bottom-3">
        <h1 className="text-white text-sm ">Team Hustlers</h1>
      </div>
    </div>
  );
};

export default Footer;
