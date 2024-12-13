import LineBox from "@/app/components/LineBox";
import React from "react";
import TestimonialCard from "@/app/components/TestimonialCard";
import manVr from "@/public/images/man-vr.png"
import womanVr from "@/public/images/woman-vr.png"
import YellowLine from "@/app/components/LineBox/YellowLine";
import {useInView} from "react-intersection-observer";

const Testimonial = () => {
  const {ref, inView, entry} = useInView({
    triggerOnce: true,
  });
  return (
    <div className="max-w-[1040px] mx-auto my-40">

      <div className="mt-10 flex flex-col justify-center items-center">
        <YellowLine text="TESTIMONIALS" color="#F68E5F"/>
        <h2 className="text-2xl my-4 text-center font-bold">
          What our customers are <br/> saying
        </h2>
        <div className="flex justify-center items-center gap-6">
          <div ref={ref}
               className={`transition-all duration-1000  ${
                 inView ? 'translate-x-0 ' : '-translate-x-full '
               }'
              }`}
               style={{
                 opacity: inView ? 1 : 0,
                 transitionDelay: "200ms"
               }}>
            <TestimonialCard
              vrImg={manVr}
            />
          </div>

          <div ref={ref}
               className={`transition-all duration-1000  ${
                 inView ? 'translate-x-0 ' : 'translate-x-full '
               }'
              }`}
               style={{
                 opacity: inView ? 1 : 0,
                 transitionDelay: "200ms"
               }}>
            <TestimonialCard
              vrImg={manVr}
              rotate={180}
            />
          </div>

        </div>

      </div>
    </div>
  )
}
export default Testimonial;