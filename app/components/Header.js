import React from "react";

const Header = () => {
  const navMenus = ["Home", "About", "Privacy Policy", "Our Shop"];
  return (
    <div className="container mx-auto py-6 flex justify-between items-center">
      <div className="">
        <img src="/images/brand-logo.png" className="w-[255px] h-106px]" />
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="flex justify-center items-center gap-6">
          {navMenus.map((item, idx) => (
            <li key={idx} className="text-xs font-bold list-none">
              {item}
            </li>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-[219px] h-[36px] outline-none rounded-3xl border border-[#E4E5EC]"
          ></input>
          <img
            src="/images/search-icon.png"
            className="absolute w-[28px] h-[28px] top-1 right-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
