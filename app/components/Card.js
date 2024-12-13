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
      <button className="flex ">
        <svg
          width="217"
          height="38"
          viewBox="0 0 217 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.10938H-0.890625V2V36V36.8906H0H214H215.137L214.865 35.7866L206.473 1.78657L206.305 1.10938H205.608H0Z"
            fill="#57576A"
            stroke="#20202E"
            strokeWidth="1.78125"
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontFamily="Arial, sans-serif"
          >
            {buttonText}
          </text>
        </svg>
        <svg width="18" className="-ml-2" height="38" viewBox="0 0 18 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 1.10938H1.87549L2.13305 2.20399L10.1331 36.204L10.2946 36.8906H11H15H16.1245L15.867 35.796L7.86695 1.79601L7.70539 1.10938H7H3Z"
            fill="#57576A" stroke="#20202E" strokeWidth="1.78125"/>
        </svg>
        <svg width="18" className="-ml-2" height="38" viewBox="0 0 18 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 1.10938H1.87549L2.13305 2.20399L10.1331 36.204L10.2946 36.8906H11H15H16.1245L15.867 35.796L7.86695 1.79601L7.70539 1.10938H7H3Z"
            fill="#57576A" stroke="#20202E" strokeWidth="1.78125"/>
        </svg>
        <svg width="18" className="-ml-2" height="38" viewBox="0 0 18 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 1.10938H1.87549L2.13305 2.20399L10.1331 36.204L10.2946 36.8906H11H15H16.1245L15.867 35.796L7.86695 1.79601L7.70539 1.10938H7H3Z"
            fill="#57576A" stroke="#20202E" strokeWidth="1.78125"/>
        </svg>


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
