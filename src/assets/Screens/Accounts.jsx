import React from "react";
import { Link } from "react-router-dom";
import Carausel from "../Components/Carausel";

const Accounts = ({ children }) => {
  return (
    <div className="bg-dgreen w-full md:w-[30rem] flex flex-col  items-center">
      <div className="w-full overflow-hidden  drop-shadow-lg  ">
        <Carausel />
      </div>
      <div className="flex justify-around items-center p-5 shadow-xl bg-white text-lgreen w-full font-semibold">
        <Link to="/account/students">Students</Link>
        <Link to="/account/donate">Donate</Link>
        <Link to="/account/sponser">Sponser</Link>
        <Link to="/account/redeem">Redeem</Link>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Accounts;
