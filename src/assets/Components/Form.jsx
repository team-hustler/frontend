import React from "react";

const Form = () => {
  return (
    <div className="bg-white w-full md:w-[30rem] flex flex-col  overflow-y-hidden items-center h-screen overflow-hidden">
      <h1 className="mt-5 text-2xl font-bold text-lgreen">Volunteer Form</h1>
      <form className="">
        <div className="w-full flex flex-col justify-center items-center">
          <input
            type={"text"}
            className=" w-96 mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Name"
          />
          <input
            type={"text"}
            className=" w-96 mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Age"
          />
          <input
            type={"text"}
            className=" w-96 mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Phone"
          />
          <input
            type={"text"}
            className=" w-96 mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Address"
          />
          <input
            type={"text"}
            className=" w-96 mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Email"
          />
          <input
            type={"text"}
            className=" w-96 mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Phone"
          />
          <input
            type={"text"}
            className=" w-96 mt-4 px-2 py-1  border-b-2 border-gray-200 "
            placeholder="Academic Background"
          />
          <div className="flex flex-col w-full mt-4 px-2 py-1">
            <h1>Date Prefereed:</h1>
            <input
              type={"date"}
              className=" w-full border-b-2 border-gray-200 "
            />
          </div>
          <div className="flex flex-col w-full mt-4 px-2 py-1">
            <h1>Duration Prefereed (in hrs):</h1>
            <input
              type={"number"}
              className=" w-full border-b-2 p-2 border-gray-200 "
            />
          </div>
          <div className="flex flex-col w-full my-6 px-2 py-1">
            <input
              type={"submit"}
              className=" w-full bg-dgreen p-2 text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
