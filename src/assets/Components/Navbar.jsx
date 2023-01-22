import React, { useState } from "react";
import logo from "../Images/kuiro.png";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const AllLinks = [
    { id: "3", name: "Home", path: "/" },
    { id: "1", name: "Volunteer", path: "/volunteer" },
    { id: "2", name: "Donation", path: "/donation" },
    { id: "4", name: "Accounts", path: "/account" },
  ];
  return (
    <div className="w-full md:w-[30rem] flex flex-col bg-center  items-center bg-heroimg-pattern bg-cover sticky top-0  z-40 drop-shadow-lg">
      <div className=" border-b-2 border-gray-200  flex justify-between p-5 w-full items-center h-20  ">
        <Link to="/">
          <img src={logo} className="      w-24 object-contain  " />
        </Link>
        <div className="">
          <button className="" onClick={() => setOpen(!open)}>
            {!open ? (
              <svg
                className="w-6 h-6 cursor-pointer select-none"
                fill="white"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <div>
                <h1 className="text-xl text-white text-center z-[5000] cursor-pointer select-none  font-semibold">
                  X
                </h1>
              </div>
            )}
          </button>

          <div
            className={`flex fixed inset-0 h-screen bg-heroimg-pattern bg-cover   overflow-y-hidden transition
        ${open ? "" : "  -translate-y-[150%]"}
       ease-in-out duration-700  flex-col  -z-10 w-full  justify-center`}
          >
            {AllLinks.map((link, state) => (
              <NavLink
                key={state}
                style={({ isActive }) => {
                  return {
                    // backgroundColor: isActive ? "white" : "",
                    color: isActive ? "white" : "white",
                  };
                }}
                to={link.path}
                onClick={() => setOpen(false)}
              >
                <div className="flex  items-center justify-center w-40 mx-auto py-2 border-b-2 border-[#D9D9D9] ">
                  <h1 className="text-lg">{link.name}</h1>{" "}
                  {/* <img src={arrow} alt="arrow" /> */}
                </div>
              </NavLink>
            ))}
            <Link to="/login">
              <button className=" px-14 py-2  mt-5 mx-auto flex items-center justify-center  rounded-md text-white border-white border-2 hover:border-lgreen hover:bg-lgreen hover:text-white">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
