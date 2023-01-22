import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import main from "../../../server/seedScript";
const AccountTemp = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    handleMain();
  }, [main]);
  const handleMain = async () => {
    console.log(main());
    let { redeemList } = await main();
    redeemList.then((e) => setResult(e));
  };
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
          {result.map((e, i) => (
            <tr
              key={i}
              className="mt-8 mb-2 border-b-2 border-gray-100 shadow-md "
            >
              <td className="py-5 md:px-3">
                <AiOutlineUser
                  size={40}
                  className="border-2 text-lgreen rounded-full ml-2 border-lgreen"
                />
              </td>
              <td className="px-4 md:px-3 w-full text-center">
                {e["returnValues"][0].substring(0, 4) + "..."}
              </td>
              <td className="px-4 md:px-3 w-full text-center  ">
                {e["returnValues"][1]}
              </td>
              <td className="px-4 md:px-3  w-full text-center hover:text-lgreen ">
                <a href={e["returnValues"][2]}>Link</a>
              </td>
              <td className="px-4 md:px-3 w-full text-center">2079/5/6</td>
            </tr>
          ))}
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
