import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [academic, setAcademic] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        location: "DC",
        age,
        phone,
        address,
        email,
        contributions: academic,
        date,
        duration,
      }),
    };
    const response = await fetch(
      "https://vertexhacks.aanandagiri.repl.co/",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="bg-white w-full md:w-[30rem] flex flex-col  overflow-y-hidden items-center h-screen overflow-hidden">
      <h1 className="mt-5 text-2xl font-bold text-lgreen">Volunteer Form</h1>
      <form className="px-5 w-full">
        <div className="w-full flex flex-col justify-center items-center">
          <input
            type={"text"}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className=" w-full outline-none  mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Name"
          />
          <input
            type={"text"}
            className="  w-full outline-none mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <input
            type={"text"}
            className="  w-full outline-none mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            type={"text"}
            className="  w-full outline-none mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <input
            type={"text"}
            className="  w-full outline-none mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type={"text"}
            className="  w-full outline-none mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Academic Background"
            onChange={(e) => {
              setAcademic(e.target.value);
            }}
          />
          <div className="flex flex-col  w-full  mt-4 px-2 py-1">
            <h1>Date Prefereed:</h1>
            <input
              type={"date"}
              className=" w-full border-b-2  border-gray-200 "
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col  w-full mt-4 px-2 py-1">
            <h1>Duration Prefereed (in hrs):</h1>
            <input
              type={"number"}
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              placeholder="1"
              className=" w-full border-b-2 p-2 outline-none border-gray-200 "
            />
          </div>
          <div className="flex flex-col w-full my-6 px-2 py-1">
            <button
              onClick={handleSubmit}
              className=" w-full bg-dgreen p-2 py-3 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
