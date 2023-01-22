import React from "react";
import logo from "../Images/logo.png";

const Footer = () => {
  return (
    <div className="flex py-20 border-t-2 border-gray-100 bg-white w-full md:w-[30rem]  text-center drop-shadow-2xl flex-col h-20 items-center justify-center ">
      <div className=" flex justify-around space-x-9 items-center">
        <img src={logo} alt="" className=" h-14 object-contain" />
        <div className="text-left">
          <strong>Contact Us</strong>
          <h1>9812345678</h1>
          <h1>kuiro@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
