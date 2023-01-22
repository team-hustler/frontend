import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import main from "../../../server/seedScript.js";
const AccountTemp = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    handleMain();
  }, [main]);
  const handleMain = async () => {
    let { sponsership } = await main();
    sponsership.then((e) => setResult(e));
  };
  return (
    <div className="bg-white px-9 py-2 border-t-2 border-b-2  drop-shadow-2xl flex justify-around items-center">
      <table className="">
        <thead>
          <tr className=" border-b-2 border-gray-100   mb-2">
            <th className="py-4 ml-2 ">User</th>
            <th className="w-full">Sponser Name</th>
            <th className="w-full">Student ID</th>
            <th className="w-full">Amount</th>
          </tr>
        </thead>
        <tbody>
          {result.map((e, i) => (
            <tr
              key={i}
              className="mt-8 mb-2 border-b-2 border-gray-100 shadow-md "
            >
              <td className="py-5">
                <AiOutlineUser
                  size={40}
                  className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
                />
              </td>
              <td className="px-7 md:px-10 w-full text-center ">
                {e["returnValues"][0].substring(0, 4) + "..."}
              </td>
              <td className="px-7 md:px-10 w-full text-center">
                {e["returnValues"][1]}
              </td>
              <td className="px-7 md:px-10 w-full text-center ">
                {e["returnValues"][2]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const Sponser = () => {
  return (
    <div>
      <AccountTemp />
    </div>
  );
};

export default Sponser;
