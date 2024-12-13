import React from "react";
import card1 from "@/public/images/we-do-1.png";

const Card = ({image, buttonText, desc, color}) => {
  return (
    <div className="bg-[#20202E] max-w-[300px] w-fit border-t-2" style={{
      borderColor: color,
    }}>
      <div className="relative">
        <img src={image.src} className="w-full h-full p-6"/>
      </div>
      <button
        className="bg-[#57576A] px-6 py-3"
      >
        {buttonText}
      </button>

      <p className="p-6 ">
        {desc}
      </p>

    </div>
  );
};

export default Card;
