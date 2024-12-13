'use client'
import React from "react";
import branding from "@/public/images/other-brand-logo.png";
import LineBox from "./LineBox";
import Card from "./Card";
import card1 from "@/public/images/we-do-1.png";
import ellipse1 from "@/public/images/Ellipse1.png";
import ellipse2 from "@/public/images/Ellipse2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';

const Branding = () => {
    return (
        <div className="bg-[#1b1b27] relative py-40">
            <img src={ellipse1.src} className="absolute top-0 left-0 w-[450px]" />
            <div className="max-w-[1040px] mx-auto">
                {/* Swiper Section for Autoplaying Branding Image */}
                <Swiper
                    spaceBetween={0}  // No space between slides
                    centeredSlides={true} // Center the slides
                    loop={true}  // Enable infinite looping
                    autoplay={{
                        delay: 0,  // No delay, keeps transitioning immediately
                        disableOnInteraction: false,  // Keep autoplaying even after user interaction
                    }}
                    speed={3000}  // Transition speed, in milliseconds (3000 = 3 seconds)
                    modules={[Autoplay]}  // Only include Autoplay module
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={branding.src} alt="Brand Logo" className="object-contain w-full h-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={branding.src} alt="Brand Logo" className="object-contain w-full h-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={branding.src} alt="Brand Logo" className="object-contain w-full h-auto" />
                    </SwiperSlide>
                </Swiper>

                <div className="mt-40 flex flex-col justify-center items-center">
                    <LineBox text="What we do" color="#F68E5F" bgcolor="red" />
                    <h2 className="text-2xl my-4 text-center font-bold">
                        Meeting the needs of players <br /> across the world
                    </h2>
                </div>

                <div className="mt-10 flex justify-center items-center gap-8">
                    <Card
                        image={card1}
                        buttonText="Video Game Suppliers"
                        desc="List of carefully selected, verified, high quality suppliers, in different regions worldwide."
                        color="#61FFDA"
                    />
                    <Card
                        image={card1}
                        buttonText="Video Game Suppliers"
                        desc="List of carefully selected, verified, high quality suppliers, in different regions worldwide."
                        color="#7B61FF"
                    />
                    <Card
                        image={card1}
                        buttonText="Video Game Suppliers"
                        desc="List of carefully selected, verified, high quality suppliers, in different regions worldwide."
                        color="#FF626B"
                    />
                </div>
            </div>
            <img src={ellipse2.src} className="absolute top-0 right-0 w-[350px]" />
        </div>
    );
};

export default Branding;
