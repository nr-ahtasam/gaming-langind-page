import LineBox from "@/app/components/LineBox";
import React from "react";
import cta from "@/public/images/CTA.png"
import CustomButton from "@/app/components/Buttons/CustomButton";
import YellowLine from "@/app/components/LineBox/YellowLine";
const Testimonial = () => {
  return (
    <div className="container mx-auto my-40">

      <div className="flex gap-4 items-center  justify-center">
        <div>
          <YellowLine text="EXPLORE A NEW DIMENSION" color="#F68E5F"/>
          <h2 className="text-3xl mt-4 mb-20 font-bold ">
            Ready to unlock your <br/> potentials in a world of <br/> fun?
          </h2>
          <CustomButton text="Join for Free"/>
        </div>

        <div>
          <img src={cta.src} className="h-[500px]"/>
        </div>

      </div>
    </div>
  )
}
export default Testimonial;