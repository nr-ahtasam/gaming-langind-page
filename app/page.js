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

export default function Home() {
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
