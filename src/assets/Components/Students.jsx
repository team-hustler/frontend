import React, { useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import main from "../../../server/seedScript";
import matic from "../Images/matic.png";
import solana from "../Images/solana.jpg";
const AccountTemp = () => {
  async () => {
    if (window.solana && window.solana.isPhantom) {
      const resp = await window.solana.connect(); // this is browser wallet

      var connection = new solanaWeb3.Connection(
        solanaWeb3.clusterApiUrl("devnet"),
        "confirmed"
      );

      const recieverWallet = new solanaWeb3.PublicKey(
        "DEBCZ41EV5m8KB17W8c89LFxjrPcuSE3jSjED5B8mEGg"
      );
      var transaction = new solanaWeb3.Transaction().add(
        solanaWeb3.SystemProgram.transfer({
          fromPubkey: resp.publicKey,
          toPubkey: recieverWallet,
          lamports: 10000000 * 50,
        })
      );
      // Setting the variables for the transaction
      transaction.feePayer = resp.publicKey;
      let blockhashObj = await connection.getRecentBlockhash();
      transaction.recentBlockhash = await blockhashObj.blockhash;

      const { signature } = await window.solana.signAndSendTransaction(
        transaction
      );
      await connection.confirmTransaction(signature);
    }
  };
  const [result, setResult] = useState([]);
  useEffect(() => {
    handleMain();
  }, [main]);
  const handleMain = async () => {
    let { studentList } = await main();
    studentList.then((e) => setResult(e));
  };

  const handleSolana = async () => {
    if (window.solana && window.solana.isPhantom) {
      const resp = await window.solana.connect(); // this is browser wallet

      var connection = new solanaWeb3.Connection(
        solanaWeb3.clusterApiUrl("devnet"),
        "confirmed"
      );

      const recieverWallet = new solanaWeb3.PublicKey(
        "DEBCZ41EV5m8KB17W8c89LFxjrPcuSE3jSjED5B8mEGg"
      );
      var transaction = new solanaWeb3.Transaction().add(
        solanaWeb3.SystemProgram.transfer({
          fromPubkey: resp.publicKey,
          toPubkey: recieverWallet,
          lamports: 10000000 * 50,
        })
      );
      // Setting the variables for the transaction
      transaction.feePayer = resp.publicKey;
      let blockhashObj = await connection.getRecentBlockhash();
      transaction.recentBlockhash = await blockhashObj.blockhash;

      const { signature } = await window.solana.signAndSendTransaction(
        transaction
      );
      await connection.confirmTransaction(signature);
    }
  };
  const handleClick2 = () => {
    console.log("2");
  };
  const handleClick1 = () => {
    handleSolana();
    console.log("1");
  };
  console.log(result);
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
          {result.map((e, i) => (
            <tr
              key={i}
              className="mt-8 mb-2 border-b-2  border-gray-100 shadow-md "
            >
              <td className="py-5 md:px-2">
                <AiOutlineUser
                  size={40}
                  className="border-2 text-lgreen rounded-full ml-2 mr-5 md:mr-0 border-lgreen"
                />
              </td>
              <td className=" w-full text-center   md:px-2">
                {" "}
                {e["returnValues"][0]}
              </td>
              <td className="md:px-2 w-full text-center ">
                {" "}
                {e["returnValues"][1]}
              </td>
              <td className="md:px-2  w-full text-center">
                {" "}
                {e["returnValues"][2]}
              </td>
              <div className="flex flex-col w-24 md:w-32 p-2 items-center">
                {/* <button
                  onClick={handleClick1}
                  className="bg-lgreen px-3 py-2 text-white"
                  id="mintbtn"
                >
                  Donate
                </button> */}
                <img
                  src={matic}
                  id="mintbtn"
                  className=" border-2 py-2 mb-1 px-2 cursor-pointer hover:scale-110 transition delay-150 ease-in-out"
                  onClick={handleClick1}
                />
                <img
                  src={solana}
                  className=" border-2 py-2 px-2 cursor-pointer hover:scale-110 transition delay-150 ease-in-out"
                  onClick={handleClick2}
                />
              </div>
            </tr>
          ))}
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
