import React, { useEffect, useState } from 'react'
import { achievements, missions } from '../../constants';
import GetStarted from '../GetStarted';
import { arrow_down, linux } from '../../assets';
import Typewriter from 'typewriter-effect';
import WhatWeDo from '../WhatWeDo';
import axios from 'axios';
import { UilLink } from '@iconscout/react-unicons'
import { API } from '../../constants';
import ParticleAnimation from '../ParticleAnimation';
import Cookies from 'js-cookie';
import CurrentEventTerminal from '../CurrentEventTerminal';


const HomePage = () => {

  const [event, setEvent] = useState(null);
  const [scrollShow, setScrollShow] = useState(true);
  var date, currentDate;


  useEffect(() => {
    axios.get(`${API}/events/event/current`)
      .then((response) => {
        setEvent(response.data);
        date = new Date(Date.parse(response.data.eventDate));
        currentDate = new Date();
        if (date.getTime() >= currentDate.getTime()) {
          var expiry = new Date(new Date().getTime() + 2 * 60 * 1000);
          Cookies.set('toast', true, { expires: expiry });
          Cookies.set('event_id', response.data._id, { expires: expiry });
        }
        else {
          var expiry = new Date(new Date().getTime() + 2 * 60 * 1000);
          Cookies.set('toast', false, { expires: expiry });
        }

      })
      .catch((error) => { console.log(error); });

    axios.get(`${API}/achievements`)
      .then((response) => {
        achievements[1].title = response.data.events_count;
        achievements[2].title = response.data.yt_views;
      })
      .catch((error) => { console.log(error); });


  }, []);



  const handleClick = (link, id) => {
    console.log(link, id);
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');

    }
    else {
      window.open(`/events/${id}`, '_self', 'noopener,noreferrer');
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  const handleScroll = () => {
    //console.log("Scrolled");
    setScrollShow(false);
    window.removeEventListener("scroll", handleScroll);
  }


  return (
    <div className='flex flex-col justify-center items-center' >
      <section id="home" className={`flex md:flex-row flex-col py-10 justify-center items-center `} >
        <div className={`flex  flex-col animate-[fadeInLeft_1s_ease-in-out] ss:w-1/2 px-10`}>
          <div className="flex flex-row justify-between items-center w-full h-[16rem]">
            <h1 className="flex font-courier font-semibold text-6xl text-gradient">
              <Typewriter options={{ strings: ['FOSS', 'Free & Open Source Software'], autoStart: true, loop: true, }} />
            </h1>
          </div>
          <p className={` font-courier text-justify text-dimWhite text-2xl py-5 `}>
            FOSS-CIT is an integral framework that addresses the unmet needs of emerging technologists, ranging from novices to resource people. This team aids student development in both fundamental and contemporary technological trends.
          </p>
          <div className="flex ">
            <GetStarted text={'Get Started'} link={'/about'} target={'_self'} />
          </div>
        </div>
        {scrollShow && <div className='ss:flex items-end justify-center absolute h-full w-full p-10 hidden '>
          <div className='flex flex-col justify-center items-center'>
            <span className='flex text-dimWhite'>Scroll Down</span>
            <img src={arrow_down} className='flex h-10 w-10' />
          </div>
        </div>}

        <div className={`flex justify-center items-center relative animate-[fadeInRight_1s_ease-in-out] ss:w-1/2`}>
          <img src={linux} alt="billing" className="w-[25rem] h-[27rem] mt-6 relative z-[5] bg-transparent" />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>

      </section>
      
      {/* Current Event updates */}
      { event && <CurrentEventTerminal event={event}/> }

      <div className={`flex flex-col py-10 `}>
        <section id={'mission'} className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 `} data-aos="fade-up" data-aos-duration='2000'>
          <h1 className="flex-1 font-courier font-semibold text-5xl text-gradient">
            Our Mission...
          </h1>
          <div className='flex sm:flex-row flex-col justify-between w-full items-center'>
            <p className={`font-courier font-normal text-dimWhite text-xl flex text-justify lg:w-[50%]`}>
              FOSS-CIT aims to assist students in learning essential technical skills for the future and to work with various open-source platforms. Most of the preliminary activities include Bootcamps, Workshops, Hackathons, and talk shows which are conducted to ensure a smooth learning curve for newcomers to the world of open-source. Through the contests and events, students can enhance their skillset not only in the field of computer science, but also in all necessary professional platforms.
            </p>
            <div className="flex justify-center items-center w-full sm:w-[50%]">
              <ParticleAnimation />
            </div>

          </div>

        </section>
        <section id={'whatwedo'} className={`flex-1  flex-col xl:px-0 sm:px-16 px-6 py-10 justify-center items-center`} data-aos="fade-up" data-aos-duration='2000'>
          <h1 className="flex-1 font-courier font-semibold text-5xl text-gradient ">
            What We Do...
          </h1>
          <div className='flex py-10'>
            <WhatWeDo />
          </div>
        </section>
        <section id={'achievements'} className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 py-10 `} data-aos="fade-up" data-aos-duration='2000'>
          <h1 className="flex-1 font-courier font-semibold text-5xl text-gradient ">
            Our Achievements.
          </h1>
          <p className={`font-courier font-normal text-dimWhite text-xl py-5 text-justify`} >
            FOSS-CIT has conducted various training sessions on web technology, competitive programming, game development, and specific GNU/Linux tools and frameworks. This club has also established successful collaborations with Newton school, Mozilla Campus Clubs, Google Developer Groups in Coimbatore and FOSS Wave, an open-source software community.
          </p>
          <div className='flex p-3 flex-wrap w-full ss:gap-32 gap-10 py-10 justify-center items-center'>
            {achievements.map((item) => (
              <div className='flex flex-col gap-5 justify-center items-center text-justify' key={item.id}>
                <img src={item.img} className='flex h-20 w-20' />
                <span className='flex text-gradient text-2xl font-semibold'>{item.title}</span>
                <span className='flex text-xl'>{item.desc}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage;