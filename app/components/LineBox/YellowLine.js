import React from "react";
import './yellowline.css'
const YellowLine = ({ text, color }) => {
  return (
    <div>
      <h3 className="line-box-yellow w-fit font-bold text-xs leading-3" style={{ color: color
      }}>
        {text}
      </h3>
    </div>
  );
};

export default YellowLine;
