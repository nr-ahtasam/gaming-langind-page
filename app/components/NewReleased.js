import bg from "@/public/images/new-release-game.jpeg";
import layer from "@/public/images/showcase-layer.png";
import upshadow from "@/public/images/UP_SHADOW.png";
import React from "react";
import NewReleaseCard from "@/app/components/NewReleaseCard";

const NewReleased = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
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
          objectFit: "cover",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <img src={upshadow.src} className="absolute rotate-180 w-full"/>
        </div>
        <h2 className="text-2xl pt-24 pb-10 text-center font-bold">
          Newly Released Games
        </h2>
        <div className="flex items-center justify-center gap-4 pb-10">
          <button className="rounded-3xl bg-[#F68E5F] text-xs font-bold px-4 py-2">All</button>
          <button className="rounded-3xl  text-xs font-bold px-4 py-px">PS4</button>
          <button className="rounded-3xl  text-xs font-bold px-4 py-px">PS5</button>
          <button className="rounded-3xl  text-xs font-bold px-4 py-px">X-BOX</button>
        </div>
        <div className="grid grid-cols-4 gap-6 max-w-[1040px] mx-auto">
          <NewReleaseCard/>
          <NewReleaseCard/>
          <NewReleaseCard/>
          <NewReleaseCard/>
          <NewReleaseCard/>
          <NewReleaseCard/>
          <NewReleaseCard/>
          <NewReleaseCard/>
        </div>
        <div>
          <img src={upshadow.src} className="w-full"/>
        </div>
      </div>

    </div>
  )
}

export default NewReleased;