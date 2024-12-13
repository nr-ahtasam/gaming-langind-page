import React from "react";

const SendEmailSection = () => {
  return (
    <div className="container mx-auto my-40">
      <div className="flex justify-between items-center">
        <img src="/images/brand-logo.png" className="w-[255px] h-106px]"/>
        <div className="relative">
          <input
            type="text"
            placeholder="Eamil address"
            className="px-6 w-[400px] h-[64px] outline-none rounded-[50px] border-none bg-[#292945]"
          ></input>
          <img
            src="/images/arrow-side.png"
            className="absolute w-[28px] h-[28px] top-4 right-4"
          />
        </div>
      </div>

    </div>
  )
}

export default SendEmailSection;