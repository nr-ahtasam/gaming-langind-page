import LineBox from "@/app/components/LineBox";
import React from "react";
import cta from "@/public/images/CTA.png"
const Testimonial = () => {
  return (
    <div className="container mx-auto my-40">

      <div className="flex gap-4 items-center  justify-center">
        <div>
          <LineBox text="TESTIMONIALS" color="#F68E5F"/>
          <h2 className="text-3xl my-4 font-bold">
            Ready to unlock your <br/> potentials in a world of <br/> fun?
          </h2>
          <button className="bg-[#070B1D] mt-10 px-6 py-3 rounded-3xl border border-gray-100">Join for Free</button>
        </div>

        <div>
          <img src={cta.src} className="h-[500px]"/>
        </div>

      </div>
    </div>
  )
}
export default Testimonial;