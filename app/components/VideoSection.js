import ReactPlayer from 'react-player';
import Video from 'next-video';
import Player from 'next-video/player';
import thumbnail from '@/public/images/video-thumbnail.png'
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

import video1 from '@/videos/video1.mp4.json'
const VideoSection = () => {
  const {ref, inView, entry} = useInView({
    triggerOnce: true,
  });

  return (
    <div className="container mx-auto my-40">
      <article className="flex justify-between ">
        <div className="w-1/2">
          <Video src={video1} />
        </div>

        <div className="w-1/2 flex  flex-col justify-between">
          <div className="border-s border-gray-900/10 p-8 ">
            <div ref={ref}
                 style={{
                   opacity: inView ? 1 : 0,
                   transform: inView ? "translateY(0)" : "translateY(20vh)",
                 }}
                 className="transition-all duration-500 font-bold capitalize text-4xl">
              <h3
              >
                We are the Best Game <br/> Distrubutors for all Gamers.
              </h3>
            </div>
            {/*jjjjjjjjjjjjjjjjjjj*/}
            <div
              ref={ref}
              className={` transition-all flex gap-4 my-6 duration-1000  ${
                inView ? 'translate-x-0 ' : 'translate-x-full '
              }'
              }`}
              style={{
                opacity: inView ? 1 : 0,
                transitionDelay: "400ms"
              }}

            >
              <div className="bg-white rounded-3xl p-2 w-fit h-fit">
                <img width="20" height="20" src="https://img.icons8.com/ios/50/xbox-controller.png"
                     alt="xbox-controller"/>
              </div>
              <div className="w-[50%]">
                <h3 className="font-bold capitalize text-xl">
                  Title Goes Here
                </h3>
                <p className="text-xs mt-2">Find whole sale prices and suppliers of video games, consoles, and game
                  accessories.</p>
              </div>
            </div>
            <div ref={ref}
                 className={` transition-all flex gap-4 my-6 duration-1000  ${
                   inView ? 'translate-x-0 ' : 'translate-x-full '
                 }'
              }`}
                 style={{
                   opacity: inView ? 1 : 0,
                   transitionDelay: "800ms"


                 }}>
              <div className="bg-white rounded-3xl p-2 w-fit h-fit">
                <img width="20" height="20" src="https://img.icons8.com/ios/50/xbox-controller.png"
                     alt="xbox-controller"/>
              </div>
              <div className="w-[50%]">
                <h3 className="font-bold capitalize text-xl">
                  Title Goes Here
                </h3>
                <p className="text-xs mt-2">Find whole sale prices and suppliers of video games, consoles, and game
                  accessories.</p>
              </div>
            </div>
            <div ref={ref}
                 className={` transition-all flex gap-4 my-6  duration-1000  ${
                   inView ? 'translate-x-0 ' : 'translate-x-full '
                 }'
              }`}
                 style={{
                   opacity: inView ? 1 : 0,
                   transitionDelay: "1200ms"

                 }}>
              <div className="bg-white rounded-3xl p-2 w-fit h-fit">
                <img width="20" height="20" src="https://img.icons8.com/ios/50/xbox-controller.png"
                     alt="xbox-controller"/>
              </div>
              <div className="w-[50%]">
                <h3 className="font-bold capitalize text-xl">
                  Title Goes Here
                </h3>
                <p className="text-xs mt-2">Find whole sale prices and suppliers of video games, consoles, and game
                  accessories.</p>
              </div>
            </div>
          </div>

        </div>
      </article>
    </div>
  )
}

export default VideoSection;