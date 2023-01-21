import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="w-full md:w-[30rem] flex flex-col   items-center bg-white sticky top-0 z-40 drop-shadow-lg">
      <div className="  flex justify-between items-center space-x-7 h-20">
        <Link to="/">
          <img src={logo} className="    h-14 object-contain   bg-white" />
        </Link>
        <ul className="text-lgreen flex w-full justify-center items-center space-x-4 text-md">
          <Link className="cursor-pointer " to={"/volunteer"}>
            Volunteer
          </Link>
          <Link className="cursor-pointer " to={"/donation"}>
            Donation
          </Link>
        </ul>
      </div>
    </div>
  );
};
