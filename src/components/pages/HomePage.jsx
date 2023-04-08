import React from 'react'
import { event } from '../../constants';
import GetStarted from '../GetStarted';
import {linux} from '../../assets';
import styles from '../../style';
import Typewriter from 'typewriter-effect';

const HomePage = () => {
  
  return (
    <div className='ss:mx-20'>
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
        <div className={`flex-1 ${styles.flexStart} flex-col ss:ml-20 mx-3 animate-[fadeInLeft_1s_ease-in-out]`}>
          <div className="flex flex-row justify-between items-center w-full h-[16rem]">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] text-gradient">
              {/* <span className="text-gradient">Free & Open Source Software</span> */}
              {/* <Typewriter onInit={(typewriter)=> {
              typewriter.typeString("FOSS").pauseFor(1000).deleteAll().typeString("Free & Open Source Software").start();}} className={`text-gradient`} /> */}
              <Typewriter options={{strings: ['FOSS', 'Free & Open Source Software'], autoStart: true, loop: true,}}/>
            </h1>
          </div>
          <p className={`${styles.paragraph} max-w-[600px] mt-5 text-justify`}>
          FOSS-CIT is an integral framework that addresses the unmet needs of emerging technologists, ranging from novices to resource people.
          We aid students development in both fundamental and contemporary technological trends.
 
          </p>
          <div className="ss:flex hidden md:mr-4 mr-0 mt-8 ml-[25%]">
            <GetStarted text={'Get Started'}/>
          </div>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 ss:mr-20 relative animate-[fadeInRight_1s_ease-in-out]`}>
          <img src={linux} alt="billing" className="w-[60%] h-[60%] relative z-[5] md:w-[85%] md:h-[85%]" />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted text={'Get Started'}/>
        </div>
      </section>
      
      <section id={'upcomingevents'} className={`flex md:flex-row flex-col ${styles.paddingY} my-6`}>
        <div className={`flex-1 ${styles.flexStart} flex-col mx-4`} data-aos="fade-up-right" data-aos-duration='2000'>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-gradient ss:leading-[60.8px]  ">
            Few Words About FOSS-CIT
          </h1>
          <p className={`${styles.paragraph} text-justify`}>
          It is an open-source club that strives to create a powerful developer community in CIT. Our club members are involved in accomplishing the team goals.
          We divide responsibilities among us to ensure succession planning. The vision of FOSSCIT is to create a community of successful developers who realise and utilise the potential of open-source technologies. 
 
            </p>
        </div>
        <div className={`flex-1 ${styles.flexCenter} flex-col mx-4 ss:mt-2 mt-5`} data-aos="fade-up-left" data-aos-duration='2000'>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-gradient ss:leading-[100.8px] ">
            Current Event
          </h1>
          <a href={`/events/${event.id}`}>
            <div >
              <img src={event.poster} className='shadow-lg shadow-[#b0a854] w-full h-[20rem]'/>
            </div>
          </a>
         
        </div>
      </section>
      
      <div className={`flex flex-col ${styles.paddingY} my-6`}>
        <section id={'whatwedo'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 my-6`} data-aos="fade-up" data-aos-duration='2000'>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-gradient ss:leading-[100.8px] ">
                what we do...
            </h1>
            <p className={`${styles.paragraph} mt-5 text-justify`}>
            We assist students in learning how to work with various open source platforms as well as all necessary technical skills for the future.
            The list of preliminary activities we conduct to ensure a smooth learning curve for new entrants to the world of open-source includes the following: Bootcamps, workshops, hackathons, and talk shows.
            Through our contests and events, students can enhance their skillset not only in computer science fields but also in all necessary professional skills.
            </p>
        </section>
        <section id={'achievements'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 my-6`} data-aos="fade-up" data-aos-duration='2000'>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-gradient ss:leading-[100.8px] ">
                what we have achieved...
            </h1>
            <p className={`${styles.paragraph} mt-5 text-justify`} >
              We conducted various training sessions for web technologies, competitive programming, recreational programming, and GNU/Linux tools and frameworks.
              We established successful collaborations with Newton schools, Mozilla Campus Clubs, Google Developer Groups in Coimbatore, and FOSS Wave.
              <li className={`flex-1 font-poppins font-semibold ss:text-[32px] text-[22px] text-white ss:leading-[100.8px] `}>
                Mozilla Campus Clubs
              </li>
              <span className={`${styles.paddingX}`}>
                It is a Mozilla program that engages students all over the world, building campus groups that each have hundreds of passionate volunteers contributing to open source as advocates, technologists, and innovators. 
              </span>

              <li className={`flex-1 font-poppins font-semibold ss:text-[32px] text-[22px] text-white ss:leading-[100.8px] `}>
                Google Developer Groups - Coimbatore
              </li>    
              <span className={`${styles.paddingX}`}>
                It is a non-profit developer group for developers interested in Google's developer technology, including the Android, App Engine, and Google Chrome platforms and APIs. 
              </span>
              <li className={`flex-1 font-poppins font-semibold ss:text-[32px] text-[22px] text-white ss:leading-[100.8px] `}>
                FOSS Wave
              </li>
              <span className={`${styles.paddingX}`}>
                It is a not-for-profit organization/community to connect college students and professionals to the ecosystem of continuous innovation, enriching their skillset, and paving the pathway for being industry-ready.
              </span>
              <li className={`flex-1 font-poppins font-semibold ss:text-[32px] text-[22px] text-white ss:leading-[100.8px] `}>
                Newton school
              </li>    
              <span className={`${styles.paddingX}`}>
                Newton School is a neo-university that provides highly immersive learning to millions of students and working professionals to tap into new-age technology.
              </span>
            </p>
        </section>
      </div>
    </div>
  )
}

export default HomePage;