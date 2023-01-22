import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const AccountTemp = () => {
  return (
    <div className="bg-white px-9 py-2 border-t-2 border-b-2  drop-shadow-2xl flex justify-around items-center">
      <table className="">
        <tr className=" border-b-2 border-gray-100   mb-2">
          <th className="py-4 ml-2 ">User</th>
          <th>Doner</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
        <tr className="mt-8 mb-2 border-b-2 border-gray-100 shadow-md ">
          <td className="py-5">
            <AiOutlineUser
              size={40}
              className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
            />
          </td>
          <td className="px-3 md:px-5 w-full">Aananda GIti</td>
          <td className="px-5  md:px-8 w-full">Rs.20000</td>
          <td className="pr-2">2079/5/6</td>
        </tr>
        <tr className="mt-8 mb-2 border-b-2 border-gray-100 shadow-md ">
          <td className="py-5">
            <AiOutlineUser
              size={40}
              className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
            />
          </td>
          <td className="px-3 md:px-5 w-full">Aananda GIti</td>
          <td className="px-5  md:px-8 w-full">Rs.20000</td>
          <td className="pr-2">2079/5/6</td>
        </tr>
        <tr className="mt-8 mb-2 border-b-2 border-gray-100 shadow-md ">
          <td className="py-5">
            <AiOutlineUser
              size={40}
              className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
            />
          </td>
          <td className="px-3 md:px-5 w-full">Aananda GIti</td>
          <td className="px-5  md:px-8 w-full">Rs.20000</td>
          <td className="pr-2">2079/5/6</td>
        </tr>
      </table>
    </div>
  );
};
const Donate = () => {
  return (
    <div>
      <AccountTemp />
    </div>
  );
};

export default Donate;
