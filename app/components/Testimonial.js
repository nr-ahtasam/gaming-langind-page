import LineBox from "@/app/components/LineBox";
import React from "react";
import TestimonialCard from "@/app/components/TestimonialCard";
import manVr from "@/public/images/man-vr.png"
import womanVr from "@/public/images/woman-vr.png"

const Testimonial = () => {
  return (
    <div className="max-w-[1040px] mx-auto my-40">

      <div className="mt-10 flex flex-col justify-center items-center">
        <LineBox text="TESTIMONIALS" color="#F68E5F"/>
        <h2 className="text-2xl my-4 text-center font-bold">
          What our customers are <br/> saying
        </h2>
        <div className="flex justify-center items-center gap-6">
          <TestimonialCard vrImg={manVr}/>
          <TestimonialCard vrImg={womanVr} rotate={180}/>
        </div>

      </div>
    </div>
  )
}
export default Testimonial;