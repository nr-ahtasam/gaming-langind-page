import React from "react";
import Header from "./Header";
import bg from "@/public/images/BackgroundImages.png";
import layer from "@/public/images/showcase-layer.png";
import Hero from "./Hero";
const Showcase = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${layer.src})`,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Showcase;
