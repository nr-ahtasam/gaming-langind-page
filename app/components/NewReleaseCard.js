import React from "react";
import cardImg from "@/public/images/new-release-card.png";

const NewReleaseCard = ({image, buttonText, desc, color}) => {
  return (
    <div className="max-w-[250px] ">
      <div>
        <img src={cardImg.src}  className="w-[250px] h-[250px]"/>
      </div>
      <div className="p-4 backdrop-blur">
        <div className="mb-3">
          <h2 className="font-bold ">Dead Island 2</h2>
          <p className="text-xs font-bold">Activision</p>
          <p className="text-xs ">PS4, PS5, XBOX ONE, XBOS SERIES X</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-4 text-yellow-500">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
            </svg>

            <span>4.5</span>
          </div>
          <p className="text-xs">185 Orders</p>
          <button className="rounded-3xl bg-[#F68E5F] text-xs font-bold p-2">Order Now</button>
        </div>
      </div>

    </div>
  );
};

export default NewReleaseCard;
