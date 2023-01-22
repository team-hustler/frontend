import React, { useState } from "react";

const ProfileTemp = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-dgreen  border-b-2 border-gray-200  relative flex flex-col justify-between p-5 w-full md:w-[30rem] items-center  ">
      <img
        src="https://media.children.org/child-photos/latest/1792475.jpg"
        className=" border-4 rounded-md drop-shadow-3xl border-white     w-full   "
      />
      <div className="flex flex-col">
        <button className="" onClick={() => setOpen(!open)}>
          {!open ? (
            <h1 className="bg-lgreen px-8 text-white py-2 absolute bottom-20 left-8">
              Details
            </h1>
          ) : (
            <div>
              <h1 className="text-xl text-white absolute top-7 right-8 text-center z-10  cursor-pointer select-none  font-semibold ">
                X
              </h1>
            </div>
          )}
        </button>

        <div
          className={`flex fixed inset-0   z-0 md:w-[30rem] mx-auto bg-heroimg-pattern bg-cover overflow-y-hidden transition 
    ${open ? "" : "  translate-y-[150%]"}
   ease-in-out duration-700  flex-col   items-center justify-center`}
        >
          <div className="text-white">
            <h1 className="mb-2">
              <strong>Child Id: </strong>123456
            </h1>
            <h1 className="mb-2">
              <strong>Gender: </strong>Female
            </h1>
            <h1 className="mb-2">
              <strong>Birthday: </strong>2070/2/3
            </h1>
            <h1 className="mb-2">
              <strong>Days Waiting: </strong>20
            </h1>
            <h1 className="mb-2">
              <strong>Hobbies: </strong>Dancing
            </h1>
            <h1 className="mb-2">
              <strong>Language: </strong>Nepali
            </h1>
            <h1 className="mb-2">
              <strong>Lives With: </strong>Parents
            </h1>
          </div>
          <button className=" border-2 border-white py-2 px-8 text-white">
            Learn More
          </button>
        </div>
      </div>
      <h1 className="text-2xl mt-5 text-white font-semibold">Sano Nani</h1>
    </div>
  );
};

export default ProfileTemp;
