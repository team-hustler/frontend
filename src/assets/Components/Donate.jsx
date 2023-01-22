import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import main from "../../../server/seedScript";

const AccountTemp = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    handleMain();
  }, [main]);
  const handleMain = async () => {
    let { donationList } = await main();
    donationList.then((e) => setResult(e));
  };
  return (
    <div className="bg-white px-9 py-2 border-t-2 border-b-2  drop-shadow-2xl flex justify-around items-center">
      <table className="">
        <thead>
          <tr className=" border-b-2 border-gray-100   mb-2">
            <th className="py-4 ml-2 ">User</th>
            <th>Doner</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {result.map((e, i) => (
            <tr
              key={i}
              className="mt-8 mb-2 border-b-2 border-gray-100 shadow-md "
            >
              <td className="py-5 px-3">
                <AiOutlineUser
                  size={40}
                  className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
                />
              </td>
              <td className="px-3 text-center w-full">
                {e["returnValues"][0].substring(0, 4) + "..."}
              </td>
              <td className="px-3  text-center w-full">
                Rs.{e["returnValues"][1]}
              </td>
              <td className="px-3 text-center w-full">2079/5/6</td>
            </tr>
          ))}
        </tbody>
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
