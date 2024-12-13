import React from 'react'
import arrowDown from '@/public/images/arrow_downward.png'
import LineBox from './LineBox'
import WhiteLine from "@/app/components/LineBox/WhiteLine";

const Hero = () => {
  return (
      <div className='h-[80%] flex flex-col justify-center items-center'>
          <WhiteLine text='GAMEWORLD DISTRIBUTORS' color="white"/>
          <h2 className='font-bold text-4xl text-center leading-10 my-8'>Connecting Players & <br/> 
              Games in an Immersive environment.</h2>
          <button className='h-[56px] leading-none rounded-3xl px-[40px] py-[18.5px] bg-gradient-to-r to-[#7B61FF] from-[#AA82FF]'>Become a Member for Free!</button>
          <button className='flex items-center gap-3 mt-64'>
              <span>Scroll down</span>
              <img src={arrowDown.src} className='h-4 animate-bounce' />
          </button>
    </div>
  )
}

export default Hero
