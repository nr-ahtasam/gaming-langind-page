"use client"
import Branding from "./components/Branding";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import NewReleased from "@/app/components/NewReleased";
import VideoSection from "@/app/components/VideoSection";
import Testimonial from "@/app/components/Testimonial";
import CallToAction from "@/app/components/CallToAction";
import SendEmailSection from "@/app/components/SendEmailSection";
import Footer from "@/app/components/Footer";
import CustomButton from "@/app/components/Buttons/CustomButton";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // Animation duration in milliseconds
      once: true,       // Whether animation should happen only once
    });
  }, []);
  return <>
    <Showcase />
    <Branding/>
    <NewReleased/>
    <VideoSection/>
    <Testimonial/>
    <CallToAction/>
    <SendEmailSection/>
    <Footer/>
  </>;
}
