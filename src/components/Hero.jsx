import React from 'react'
import styles from '../style';
import {linux } from '../assets';
import GetStarted from './GetStarted';

const Hero = () =>(
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
  <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
    <div className="flex flex-row justify-between items-center w-full">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
        Free and <br className="sm:block hidden" />{" "}
        <span className="text-gradient">Open Source</span>{" "}
      </h1>
      <div className="ss:flex hidden md:mr-4 mr-0">
        <GetStarted />
      </div>
    </div>

    <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
      Software, CIT
    </h1>
    <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
      Nostrud cupidatat Lorem labore labore eu aliqua commodo ut eiusmod irure cillum laborum Lorem. Proident aliqua reprehenderit amet incididunt. Ex incididunt tempor anim esse nostrud eiusmod cupidatat. 
    </p>
  </div>

  <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
    <img src={linux} alt="billing" className="w-[60%] h-[60%] relative z-[5] md:w-[100%] md:h-[100%]" />

    {/* gradient start */}
    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    {/* gradient end */}
  </div>

  <div className={`ss:hidden ${styles.flexCenter}`}>
    <GetStarted />
  </div>
</section>
  )

export default Hero;