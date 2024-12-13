import React from "react";
import card1 from "@/public/images/we-do-1.png";
const Card = () => {
  return (
    <div className="bg-[#20202E]">
      <div className="relative">
        <img src={card1.src} className="h-[155px] w-[250px] p-6" />
      </div>
      <div
        className="bg-[#57576A] "
        style={{
          clipPath: "polygon(25% 0%, 36% 0, 12% 100%, 0% 100%)",
        }}
          >
              hello
      </div>
    </div>
  );
};

export default Card;
