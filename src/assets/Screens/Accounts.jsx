import React from "react";
import { NavLink } from "react-router-dom";
import Carausel from "../Components/Carausel";

const Accounts = ({ children }) => {
  return (
    <div className="bg-dgreen  w-full md:w-[30rem] flex flex-col  items-center">
      <div className="w-full overflow-hidden  drop-shadow-lg  ">
        <Carausel />
      </div>
      <div className="flex justify-around items-center p-5 drop-shadow-lg bg-white text-lgreen w-full font-semibold">
        <NavLink
          className=" px-3 py-2 drop-shadow-md rounded-md"
          to="/account/students"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#7852E1" : "white",
              color: isActive ? "white" : "#7852E1",
            };
          }}
        >
          Students
        </NavLink>
        <NavLink
          className="bg-white px-3 py-2 drop-shadow-md rounded-md"
          to="/account/donate"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#7852E1" : "white",
              color: isActive ? "white" : "#7852E1",
            };
          }}
        >
          Donate
        </NavLink>
        <NavLink
          className="bg-white px-3 py-2 drop-shadow-md rounded-md"
          to="/account/sponser"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#7852E1" : "white",
              color: isActive ? "white" : "#7852E1",
            };
          }}
        >
          Sponser
        </NavLink>
        <NavLink
          className="bg-white px-3 py-2 drop-shadow-md rounded-md"
          to="/account/redeem"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#7852E1" : "white",
              color: isActive ? "white" : "#7852E1",
            };
          }}
        >
          Redeem
        </NavLink>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Accounts;
