import React from "react";

const LineBox = ({ text, color }) => {
  return (
    <div>
      <h3 className="line-box w-fit font-bold text-xs leading-3" style={{ color: color }}>
        {text}
      </h3>
    </div>
  );
};

export default LineBox;
