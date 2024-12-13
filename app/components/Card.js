import React from "react";
import card1 from "@/public/images/we-do-1.png";
import {useInView} from "react-intersection-observer";

const Card = ({image, buttonText, desc, color, delay}) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });
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

      <p
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transitionDelay: inView ? `${delay}ms` : "0ms",
        }}
        className={`transition-all duration-1000 transform ${
        inView ? `translate-x-0` : '-translate-x-full'} p-6`}>
        {desc}
      </p>

    </div>
  );
};

export default Card;
