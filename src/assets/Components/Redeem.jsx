import React from "react";
import { AiOutlineUser } from "react-icons/ai";
const AccountTemp = () => {
  return (
    <div className="bg-white px-9 py-2 border-t-2 border-b-2  drop-shadow-2xl flex justify-around items-center">
      <table className="">
        <thead>
          <tr className=" border-b-2 border-gray-100   mb-2">
            <th className="py-4 ml-2 ">User</th>
            <th>Manager</th>
            <th>Budget</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="mt-8 mb-2 border-b-2 border-gray-100 shadow-md ">
            <td className="py-5 md:px-3">
              <AiOutlineUser
                size={40}
                className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
              />
            </td>
            <td className="px-2 md:px-3 w-full text-center">Aananda Giri</td>
            <td className="px-2 md:px-3 w-full text-center  ">Rs.20000</td>
            <td className="px-2 md:px-3  w-full text-center ">Rs.20000</td>
            <td className="px-2 md:px-3 w-full text-center">2079/5/6</td>
          </tr>
          <tr className="mt-8 mb-2 border-b-2 border-gray-100 shadow-md ">
            <td className="py-5 md:px-3">
              <AiOutlineUser
                size={40}
                className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
              />
            </td>
            <td className="px-2 md:px-3 w-full text-center">Aananda Giri</td>
            <td className="px-2 md:px-3 w-full text-center  ">Rs.20000</td>
            <td className="px-2 md:px-3  w-full text-center ">Rs.20000</td>
            <td className="px-2 md:px-3 w-full text-center">2079/5/6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const Redeem = () => {
  return (
    <div>
      <AccountTemp />
    </div>
  );
};

export default Redeem;
