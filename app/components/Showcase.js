'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import bg from "@/public/images/bg-slider-image/BackgroundImages.png";
import cod from "@/public/images/bg-slider-image/cod.jpg";
import elden from "@/public/images/bg-slider-image/elden.jpg";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import layer from "@/public/images/showcase-layer.png";

const Showcase = () => {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${bg.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={2000} // Set the transition duration to 2000ms (2 seconds)
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
                style={{ width: "100%", height: "100%" }}
            >
                <SwiperSlide>
                    <img src={cod.src} alt="COD" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={elden.src} alt="Elden" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bg.src} alt="Background" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </SwiperSlide>
            </Swiper>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${layer.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    zIndex: 1,
                }}
            >
                <Header />
                <Hero />
            </div>
        </div>
    );
};

export default Showcase;