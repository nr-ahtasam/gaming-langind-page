import React from "react";
import branding from "@/public/images/other-brand-logo.png";
import LineBox from "./LineBox";
import Card from "./Card";
const Branding = () => {
  return (
    <div className="bg-[#1b1b27]">
      <div className="max-w-[1040px] mx-auto">
        <div className="p-20">
          <img src={branding.src} className="" />
        </div>
        <div className="mt-10 flex flex-col justify-center items-center">
          <LineBox text="What we do" color="#F68E5F" />
          <h2 className="text-2xl my-4 text-center font-bold">
            Meeting the needs of players <br /> across the world
          </h2>
        </div>
        <Card/>
      </div>
    </div>
  );
};

export default Branding;
