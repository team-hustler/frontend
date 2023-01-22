import React from "react";
import ProfileTemp from "../Components/ProfileTemp";
import progress from "../Images/progress.svg";
const Profile = () => {
  return (
    <div className="bg-white w-full md:w-[30rem] flex flex-col  items-center">
      <ProfileTemp />
      <div className="p-5 bg-white w-full border-b-2">
        <h1 className="text-lgreen font-bold  text-2xl">Achievements</h1>
      </div>
      <div className="bg-white w-11/12 px-5 py-3 my-2 drop-shadow-lg">
        <div className="flex w-full justify-between border-b-2 pb-2 font-semibold text-xl text-dgreen items-center">
          <h1 className="">Academics</h1>
          <h1>85%</h1>
        </div>
        <div className="flex w-full justify-between border-b-2 py-2 font-semibold text-xl text-dgreen items-center">
          <h1 className="">Communication</h1>
          <h1>80%</h1>
        </div>
        <div className="flex w-full justify-between border-b-2 font-semibold py-2 text-xl text-dgreen items-center">
          <h1 className="">Arts & Crafts</h1>
          <h1>90%</h1>
        </div>
        <div className="flex w-full justify-between border-b-2 font-semibold py-2 text-xl text-dgreen items-center">
          <h1 className="">Creativity</h1>
          <h1>95%</h1>
        </div>
        <div className="flex w-full justify-between border-b-2 font-semibold py-2 text-xl text-dgreen items-center">
          <h1 className="">Hygiene</h1>
          <h1>90%</h1>
        </div>
      </div>
      <div className="p-5 bg-white w-full border-b-2 ">
        <h1 className="text-lgreen font-bold  text-2xl">Progress History</h1>
      </div>
      <div className="bg-white py-2 w-11/12 mx-auto drop-shadow-lg my-5">
        <img src={progress} className="p-4 rounded-md" />
      </div>
    </div>
  );
};

export default Profile;
