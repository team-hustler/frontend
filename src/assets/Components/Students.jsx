import React from "react";
import { AiOutlineUser } from "react-icons/ai";
const AccountTemp = () => {
  return (
    <div className="bg-white px-9 py-2 border-t-2 border-b-2  drop-shadow-2xl flex justify-around items-center">
      <table className="">
        <thead>
          <tr className=" border-b-2 border-gray-100   mb-2">
            <th className="py-4 ml-2 ">User</th>
            <th className="px-2">Name</th>
            <th className="px-2">Age</th>
            <th className="px-2">Academic</th>
            <th className="px-2">Donate</th>
          </tr>
        </thead>
        <tbody className="w-full">
          <tr className="mt-8 mb-2 border-b-2  border-gray-100 shadow-md ">
            <td className="py-5 px-3">
              <AiOutlineUser
                size={40}
                className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
              />
            </td>
            <td className=" w-full text-center   px-2">Prashant Soni</td>
            <td className="px-2 w-full text-center ">5</td>
            <td className="px-2 w-full text-center">UKG</td>
            <div className="flex flex-col px-5 justify-center space-y-2 py-5  items-center">
              <button className="bg-lgreen px-3 py-2 text-white">Donate</button>
              <button className="bg-lgreen px-3 py-2 text-white">Donate</button>
            </div>
          </tr>
          <tr className="mt-8 mb-2 border-b-2  border-gray-100 shadow-md ">
            <td className="py-5 px-2">
              <AiOutlineUser
                size={40}
                className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
              />
            </td>
            <td className=" w-full text-center   px-2">Prashant Soni</td>
            <td className="px-2 w-full text-center ">5</td>
            <td className="px-2 w-full text-center">UKG</td>
            <div className="flex flex-col px-5 justify-center space-y-2 py-5  items-center">
              <button className="bg-lgreen px-3 py-2 text-white">Donate</button>
              <button className="bg-lgreen px-3 py-2 text-white">Donate</button>
            </div>
          </tr>
        </tbody>
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
