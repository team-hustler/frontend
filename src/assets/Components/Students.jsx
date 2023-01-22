import React from "react";
import { AiOutlineUser } from "react-icons/ai";
const AccountTemp = () => {
  return (
    <div className="bg-white px-9 py-2 border-t-2 border-b-2  drop-shadow-2xl flex justify-around items-center">
      <table className="">
        <tr className=" border-b-2 border-gray-100   mb-2">
          <th className="py-4 ml-2 ">User</th>
          <th>Name</th>
          <th>Age</th>
          <th>Academic</th>
          <th>Donate</th>
        </tr>
        <tr className="mt-8 mb-2 border-b-2 border-gray-100 shadow-md ">
          <td className="py-5">
            <AiOutlineUser
              size={40}
              className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
            />
          </td>
          <td className="px-3 md:px-5">Prashant Soni</td>
          <td className="px-5 md:px-8">5</td>
          <td>UKG</td>
          <div className="flex flex-col  justify-center space-y-2 py-5  items-center">
            <button className="bg-lgreen px-3 py-2 text-white">Donate</button>
            <button className="bg-lgreen px-3 py-2 text-white">Donate</button>
          </div>
        </tr>
        <tr className="mt-8 mb-2 border-b-2 border-gray-100 shadow-md ">
          <td className="py-5">
            <AiOutlineUser
              size={40}
              className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
            />
          </td>
          <td className="px-3 md:px-5">Prashant Soni</td>
          <td className="px-5 md:px-8">5</td>
          <td>UKG</td>
          <div className="flex flex-col  justify-center space-y-2 py-5  items-center">
            <button className="bg-lgreen px-3 py-2 text-white">Donate</button>
            <button className="bg-lgreen px-3 py-2 text-white">Donate</button>
          </div>
        </tr>
        <tr className="mt-8 mb-2 border-b-2 border-gray-100 shadow-md ">
          <td className="py-5">
            <AiOutlineUser
              size={40}
              className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
            />
          </td>
          <td className="px-3 md:px-5">Prashant Soni</td>
          <td className="px-5 md:px-8">5</td>
          <td>UKG</td>
          <div className="flex flex-col  justify-center space-y-2 py-5 pr-4 items-center  ">
            <button className="bg-lgreen px-3 py-2 text-white">Donate</button>
            <button className="bg-lgreen px-3 py-2 text-white">Donate</button>
          </div>
        </tr>
      </table>
    </div>
  );
};

const Students = () => {
  return (
    <div className="">
      <AccountTemp />
    </div>
  );
};

export default Students;
