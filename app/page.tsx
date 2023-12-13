import React from "react";
import Rectangle from "../components/rectangle";
import UserImage from "../components/user_image";

const HomePage = () => {
  return (
    <div className="h-screen bg-custom-background w-full p-5">
      <div className="flex flex-wrap justify-center flex-col mx-auto w-full">
        <div className="flex justify-center flex-row w-full">
          <h1 className="text-3xl font-bold mr-6"> Buddywork</h1>
          <UserImage />
        </div>
        <div className="w-full flex flex-col md:flex-row lg:flex-row justify-center mx-auto">
          <Rectangle />
          <Rectangle />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
