import React from "react";

const TestimonialCard = ({vrImg, rotate}) => {
  return (
    <div className=" bg-[#232335] rounded-xl relative mt-20">
      <div className=" p-6 w-[60%]">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map(item => (
            <svg key={item} xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-4 text-yellow-500">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
            </svg>
            ))}
        </div>
        <p className="mb-2 text-sm mt-1">My neighbor has one of these. She works as a gardener and she says its really awesome.</p>
        <h2 className="font-bold">Charles Boyle</h2>
        <p className="text-purple-500 font-semibold">Graphic Designer</p>
      </div>
      <div className="absolute -right-[33px] -top-[3.25rem]">
        <img src={vrImg.src} className="h-[236px] w-[343px]" style={{
          transform: `rotateY(${rotate}deg)`,
        }}/>
      </div>
    </div>
  )
}

export default TestimonialCard;