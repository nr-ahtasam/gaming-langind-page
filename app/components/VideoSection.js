import ReactPlayer from 'react-player';
import Video from 'next-video';
import Player from 'next-video/player';
import thumbnail from '@/public/images/video-thumbnail.png'
import video1 from '@/videos/video1.mp4.json'
const VideoSection = () => {
  return (
    <div className="container mx-auto my-40">
      <article className="flex justify-between ">
        <div className="w-1/2">
          <Video src={video1} />
        </div>

        <div className="w-1/2 flex  flex-col justify-between">
          <div className="border-s border-gray-900/10 p-8 ">
            <div>
              <h3 className="font-bold capitalize text-4xl">
                We are the Best Game <br/> Distrubutors for all Gamers.
              </h3>
            </div>

            <div className="flex gap-4 my-6">
              <div className="bg-white rounded-3xl p-2 w-fit h-fit">
                <img width="20" height="20" src="https://img.icons8.com/ios/50/xbox-controller.png"
                     alt="xbox-controller"/>
              </div>
              <div className="w-[50%]">
                <h3 className="font-bold capitalize text-xl">
                  Title Goes Here
                </h3>
                <p className="text-xs mt-2">Find whole sale prices and suppliers of video games, consoles, and game accessories.</p>
              </div>
            </div><div className="flex gap-4 my-6">
              <div className="bg-white rounded-3xl p-2 w-fit h-fit">
                <img width="20" height="20" src="https://img.icons8.com/ios/50/xbox-controller.png"
                     alt="xbox-controller"/>
              </div>
              <div className="w-[50%]">
                <h3 className="font-bold capitalize text-xl">
                  Title Goes Here
                </h3>
                <p className="text-xs mt-2">Find whole sale prices and suppliers of video games, consoles, and game accessories.</p>
              </div>
            </div><div className="flex gap-4 my-6">
              <div className="bg-white rounded-3xl p-2 w-fit h-fit">
                <img width="20" height="20" src="https://img.icons8.com/ios/50/xbox-controller.png"
                     alt="xbox-controller"/>
              </div>
              <div className="w-[50%]">
                <h3 className="font-bold capitalize text-xl">
                  Title Goes Here
                </h3>
                <p className="text-xs mt-2">Find whole sale prices and suppliers of video games, consoles, and game accessories.</p>
              </div>
            </div>
          </div>

        </div>
      </article>
    </div>
  )
}

export default VideoSection;