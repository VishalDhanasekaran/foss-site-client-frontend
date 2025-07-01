import React,{useEffect,useState} from 'react'
import GetStarted from '../GetStarted';
import { advisors, founders } from '../../constants';
import FounderCard from '../FounderCard';

import axios from 'axios';
import { API } from '../../constants';

import Gallery from '../Gallery';
import { discordCommunity } from '../../assets';

const AboutUs = () => {

  const [data,setData]=useState(null);
  useEffect(()=>{
    axios.get(`${API}/gallery`)
      .then((res)=>{setData(res.data);})
      .catch((err)=>{
        console.log("error:",err.message);
      }); 

  },[]);

  return (
    <div className={`flex flex-col py-10`}>
      <section id={'history'} className={`flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6 animate-[fadeInDown_1s_ease-in-out]`}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col p-10 relative z-[1]">
          <h2 className={`font-courier font-semibold text-5xl text-gradient w-full text-center`}>
            About FOSS CIT
          </h2>
        </div>
        <h1 className="flex-1 font-courier font-semibold text-5xl text-gradient ">
            History
        </h1>
        <p className={`font-courier font-normal text-justify text-dimWhite text-xl py-5 `}>
        FOSS-CIT was first established in 2018 by Dhileepan Thangamanimaran, Sai Adarsh, and Sibi Bose,  students of Software Systems from the Department of Computing, Coimbatore Institute of Technology. Initially, the club was a team of 5 members which has now gradually grown to be a successful team of more than 25 members. The main objective of introducing this club amidst many other clubs of CIT was to strengthen the technical proficiency of the students by assisting them with Webinars and Hackathons of varied concepts. FOSS has seen a progressive and steady increase in the participants count all through the years. Moreover, the team exhibits enthusiastic support in conducting more events in the near future.
        </p>
      </section>
      

      <section id={'founders'} className={`flex justify-start items-start py-10 sm:flex-row flex-col xl:px-0 sm:px-16 px-6 `} data-aos="fade-up" data-aos-duration='2000'>
        <div className='flex flex-col sm:w-2/5'>
          <h1 className="flex-1 font-courier text-gradient font-semibold text-5xl">
            Initiative
          </h1>
          <p className={`font-courier font-normal text-justify text-dimWhite text-xl py-5`}>
          Initially, the aim of our Alumni, Dhileepan Thangamanimaran, Sai Adarsh, and Sibi Bose, was to address the technical concerns faced by students in their journey of learning the sage and development of Open-Source softwares. They focused on creating and exploring knowledge through an open forum, <span className='font-[800]'>endowed with a dedicated team.</span>
          </p>
        </div>
        <div className=' flex flex-wrap sm:w-3/5 gap-10 justify-center items-center'>
          {founders.map((user)=>(
            <FounderCard key={user.id} {...user}/>
          ))}
        </div>
      </section>

      <section id={'founders'} className={`flex items-center justify-center py-10 sm:flex-row flex-col xl:px-0 sm:px-16 px-6 `} data-aos="fade-up" data-aos-duration='2000'>
        <div className='flex flex-col sm:w-1/2'>
          <h1 className="flex-1 font-courier text-gradient font-semibold text-5xl ">
            Staff Advisors 
          </h1>
          <p className={`font-courier font-normal text-justify text-dimWhite text-xl py-5`}>
          The club is fortunate to have the guidance and support of two staff advisors from the Department of Computing at Coimbatore Institute of Technology. <span className='font-[800]'>They act as the guiding pillars, mentoring, encouraging and emphasizing the importance of leadership and communication to the club members.</span> The advisors also ensure that the club adheres to college regulations and procedures. They generously share their knowledge and experience with the members, helping them to grow and learn through the opportunities created as a team.
          </p>
        </div>
        <div className=' flex flex-wrap sm:w-1/2 gap-10 justify-center items-center'>
          {advisors.map((user)=>(
            <FounderCard key={user.id} {...user}/>
          ))}
        </div>
      </section>

      {data&&<div className='flex'>
        <Gallery data={data} name={'Event'}/>
      </div>}
      
      <section id={'community'} className={`flex flex-row xl:px-0 sm:p-16 p-6 `} data-aos="fade-up" data-aos-duration='2000'>
        <div className='flex flex-col ss:w-1/2'>
          <h2 className="flex font-courier font-semibold text-4xl text-gradient ">
            Join Our Community
          </h2>
            <div className='flex flex-col justify-between'>
              <span className={`flex font-courier font-normal text-justify text-dimWhite text-xl py-5`}>Join the Discord community for additional exclusive updates. You can learn about the forthcoming events, cutting-edge technological advancements, and the continuous conversations with those who share the enthusiasm for supporting open source here.</span>
              <div className='flex'>
                <GetStarted text={'Discord'} link={'https://discord.com/invite/zAqY6nqQ8H'} target={'_blank'}/>
              </div>
            </div>
        </div>
        <div className='flex ss:w-1/2 justify-center items-center'>
          <img className='flex aspect-square object-contain h-72' src={discordCommunity}/>
        </div>
      </section>
    </div>
  )
}

export default AboutUs;