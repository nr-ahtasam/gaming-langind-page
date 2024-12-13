import React from "react";
import './whiteline.css'
const WhiteLine = ({ text, color }) => {
  return (
    <div>
      <h3 className="line-box-white w-fit font-bold text-xs leading-3" style={{ color: color
      }}>
        {text}
      </h3>
    </div>
  );
};

export default WhiteLine;
