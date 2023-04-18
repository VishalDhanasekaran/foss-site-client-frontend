import React,{useEffect,useState} from 'react'
import { achievements, missions } from '../../constants';
import GetStarted from '../GetStarted';
import {linux} from '../../assets';
import Typewriter from 'typewriter-effect';
import WhatWeDo from '../WhatWeDo';
import axios from 'axios';
import { UilLink } from '@iconscout/react-unicons'
import { API } from '../../constants';

const HomePage = () => {

  const [event,setEvent]=useState(null);

  useEffect(() => {
    axios.get(`${API}/events/event/current`)
    .then((response)=>{setEvent(response.data);})
    .catch((error)=>{console.log(error);});

    axios.get(`${API}/achievements`)
    .then((response)=>{
      achievements[1].title=response.data.events_count;
      achievements[2].title=response.data.yt_views;
    })
    .catch((error)=>{console.log(error);});
  }, []);


    const handleClick=(link,id)=>{
      console.log(link,id);
      if(link)
      {
        window.open(link,'_blank','noopener,noreferrer');

      }
      else{
        window.open(`/events/${id}`,'_self','noopener,noreferrer');
      }
    }
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <section id="home" className={`flex md:flex-row flex-col py-10 `}>
        <div className={`flex justify-center items-center flex-col animate-[fadeInLeft_1s_ease-in-out] ss:w-1/2 px-10`}>
          <div className="flex flex-row justify-between items-center w-full h-[16rem]">
            <h1 className="flex font-poppins font-semibold text-6xl text-white text-gradient">
              <Typewriter options={{strings: ['FOSS', 'Free Open Source Software'], autoStart: true, loop: true,}}/>
            </h1>
          </div>
          <p className={`font-poppins font-normal text-justify text-dimWhite text-2xl py-5 `}>
          FOSS-CIT is an integral framework that addresses the unmet needs of emerging technologists, ranging from novices to resource people. Our team aids student development in both fundamental and contemporary technological trends.
          </p>
          <div className="flex justify-center items-center ">
            <GetStarted text={'Get Started'} link={'/about'} target={'_self'}/>
          </div>
        </div>

        <div className={`flex justify-center items-center relative animate-[fadeInRight_1s_ease-in-out] ss:w-1/2`}>
          <img src={linux} alt="billing" className="w-[25rem] h-[25rem] relative z-[5] bg-transparent" />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>

      </section>
      
      {event&&<section id={'upcomingevents'} className={`flex flex-col w-[80%] justify-center items-center bg-zinc-800 rounded-2xl mt-10 gap-2`} data-aos="fade-up" data-aos-duration='2000'>
        <div>
          <h1 className=" flex font-poppins font-semibold text-5xl text-gradient py-5">
            Current Event
          </h1>
        </div>
        <div className='flex sm:flex-row flex-col px-5 gap-5'>

          <div className={`flex justify-center items-center flex-col mx-4`} data-aos="fade-up-right" data-aos-duration='2000'>
            <a href={`/events/${event?._id}`}>
              <div className='flex flex-col justify-center items-center'>
                <img src={event?.pic} className='aspect-video object-contain h-72'/>
                <span className={`font-poppins text-dimWhite text-2xl text-center font-bold text-gradient`}>{event?.title}</span>
              </div>
            </a>
          </div>
          <div className={` grid grid-cols-2 grid-rows-3 justify-center flex-col w-full`} data-aos="fade-up-left" data-aos-duration='2000'>
            <div className='flex flex-col justify-center'>
              <span className='flex font-semibold text-gradient text-2xl'>Date:</span>
              <span className={`font-poppins font-normal text-justify text-dimWhite text-2xl `}>{event?.eventDate.slice(0,10).split('-').reverse().join('-')}</span>
            </div>
            <div className='flex flex-col justify-center'>
              <span className='flex font-semibold text-gradient text-2xl'>Venue:</span>
              <span className={`font-poppins font-normal text-justify text-dimWhite text-2xl `}>{event?.venue}</span>
            </div>
            <div className='flex flex-col justify-center'>
              <span className='flex font-semibold text-gradient text-2xl'>Time:</span>
              <span className={`font-poppins font-normal text-justify text-dimWhite text-2xl `}>{event?.time}</span>
            </div>
            <div className='flex flex-col justify-center'>
              <span className='flex font-semibold text-gradient text-2xl'>Speaker:</span>
              <span className={`font-poppins font-normal text-justify text-dimWhite text-2xl truncate`}>{event?.speaker}</span>
            </div>
            <div className='flex flex-row col-span-2 cursor-pointer justify-start items-center' onClick={()=>{handleClick(event?.link,event?._id)}}>
              <UilLink/>
              <span className={`font-poppins font-normal text-justify text-2xl text-[#f5e257] underline underline-offset-2`}>See More</span>
            </div>
          </div>
        </div>
        <div className='flex p-2'>
          <span className={`font-poppins font-normal text-justify text-dimWhite w-full text-xl`}>{event?.content}</span>
        </div>
      </section>}
      
      <div className={`flex flex-col py-10 `}>
        <section id={'mission'} className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 `} data-aos="fade-up" data-aos-duration='2000'>
            <h1 className="flex-1 font-poppins font-semibold text-5xl text-gradient">
                Our Mission...
            </h1>
            <div className='flex sm:flex-row flex-col justify-between w-full items-center'>
              <p className={`font-poppins font-normal text-dimWhite text-xl flex text-justify lg:w-[50%]`}>
              FOSS-CIT aims to assist students in learning how to work with various open-source platforms, as well as essential technical skills for the future. Our preliminary activities include bootcamps, workshops, hackathons, and talk shows to ensure a smooth learning curve for newcomers to the world of open-source. Through our contests and events, students can enhance their skillset not only in the field of computer science, but also in all necessary professional skills.
              </p>
              <img className='flex sm:w-[50%]' src='https://amfoss.in/illus/what_we_do.svg' alt='mission'/>
            </div>
            <div className='flex flex-wrap w-full gap-10 justify-center items-end py-10' data-aos="fade-up" data-aos-duration='2000'>
              {missions.map((item)=>(
                <div key={item.id} className='flex justify-center items-center flex-col'>
                  <img src={item.img} alt={item.tagline} className='flex aspect-square object-contain h-80 w-80'/>
                  <p className='flex text-xl text-gradient font-semibold text-center'>{item.tagline}</p>
                </div>
              ))}
            </div>
        </section>
        <section id={'whatwedo'}className={`flex-1  flex-col xl:px-0 sm:px-16 px-6 py-10 justify-center items-center`} data-aos="fade-up" data-aos-duration='2000'>
            <h1 className="flex-1 font-poppins font-semibold text-5xl text-gradient ">
              What We Do...
            </h1>
            <div className='flex py-10'>
              <WhatWeDo/>
            </div>
        </section>
        <section id={'achievements'} className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 py-10 `} data-aos="fade-up" data-aos-duration='2000'>
            <h1 className="flex-1 font-poppins font-semibold text-5xl text-gradient ">
                What we have achieved...
            </h1>
            <p className={`font-poppins font-normal text-dimWhite text-xl py-5 text-justify`} >
            FOSS-CIT has conducted various training sessions on web technology, competitive programming, game development, and specific GNU/Linux tools and frameworks. Our club also established successful collaborations with Newton school, Mozilla Campus Clubs, and Google Developer Groups in Coimbatore, as well as with FOSS Wave, an open-source software community.
            </p>
            <div className='flex p-3 flex-wrap w-full ss:gap-32 gap-10 py-10 justify-center items-center'>
              {achievements.map((item)=>(
                <div className='flex flex-col gap-5 justify-center items-center text-justify' key={item.id}>
                  <item.img className='flex h-16 w-16'/>
                  <span className='flex text-gradient text-2xl font-semibold'>{item.title}</span>
                  <span className='flex'>{item.desc}</span>
                </div>
              ))}
            </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage;