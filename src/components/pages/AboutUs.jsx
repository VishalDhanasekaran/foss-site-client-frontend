import React,{useEffect,useState} from 'react'
import styles from '../../style';
import GetStarted from '../GetStarted';
import { advisors, founders } from '../../constants';
import FounderCard from '../FounderCard';

import axios from 'axios';
import { API } from '../../constants';

import Gallery from '../Gallery';

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
    <div className={`flex flex-col ${styles.paddingY}`}>
      <section id={'history'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-[fadeInDown_1s_ease-in-out]`}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className={`${styles.heading2} text-center`}>
            About FOSS CIT
          </h2>
        </div>
        <h1 className="flex-1 font-poppins font-semibold text-5xl text-gradient ">
            History
        </h1>
        <p className={`${styles.paragraph} mt-5 text-justify`}>
        Our college's FOSS club was founded with the intention of introducing students to the world of open-source software, where they can learn and create new software. 
        The only pupils who will actually benefit from such a group are those who actively participate in it. Indirectly, the college gains from these initiatives since they make our students' talents known to prospective employers.
        </p>
      </section>
      

      <section id={'founders'} className={`flex-1 ${styles.flexStart} items-center justify-center my-16 sm:flex-row flex-col xl:px-0 sm:px-16 px-6 `} data-aos="fade-up" data-aos-duration='2000'>
        <div className='flex flex-col sm:w-1/3'>
          <h1 className="flex-1 font-poppins text-gradient font-semibold text-5xl">
            Initiators 
          </h1>
          <p className={`${styles.paragraph} mt-5 text-justify`}>
            Dhileepan Thangamanimaran, Sai Adarsh, and Sibi Bose launched FOSS in 2018 while they were second-year students studying software systems at the Coimbatore Institute of Technology in Coimbatore.
          </p>
        </div>
        <div className=' flex flex-wrap w-2/3 gap-10 justify-center items-center'>
          {founders.map((user)=>(
            <FounderCard key={user.id} {...user}/>
          ))}
        </div>
      </section>

      <section id={'founders'} className={`flex-1 ${styles.flexStart} items-center justify-center my-16 sm:flex-row flex-col xl:px-0 sm:px-16 px-6 `} data-aos="fade-up" data-aos-duration='2000'>
        <div className='flex flex-col sm:w-1/3'>
          <h1 className="flex-1 font-poppins text-gradient font-semibold text-5xl ">
            Staff Advisors 
          </h1>
          <p className={`${styles.paragraph} mt-5 text-justify`}>
            Our club is supported by our two staff advisers. They act as a mentor, offering encouragement, direction, and leadership to our club members and ensuring that the club adheres to college regulations and procedures.
          </p>
        </div>
        <div className=' flex flex-wrap w-2/3 gap-10 justify-center items-center'>
          {advisors.map((user)=>(
            <FounderCard key={user.id} {...user}/>
          ))}
        </div>
      </section>

      {data&&<div className='flex'>
        <Gallery data={data} name={'Event'}/>
      </div>}
      
      <section id={'community'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:p-16 p-6 `} data-aos="fade-up" data-aos-duration='2000'>
        <h2 className="flex-1 font-poppins font-semibold text-4xl text-gradient ">
          Join Our Community
        </h2>
        <div className='flex flex-col ss:flex-row gap-10 justify-center items-center'>
            <div className='flex flex-col justify-between ss:w-1/2'>
              <span className={`flex ${styles.paragraph}`}>Join our Discord community for additional exclusive updates. You can learn about our forthcoming events, cutting-edge technological advancements, and our continuous conversations with those who share our enthusiasm for supporting open source here.</span>
              <div className='flex m-12'>
                <GetStarted text={'Discord'} link={'https://discord.com/invite/zAqY6nqQ8H'} target={'_blank'}/>
              </div>
            </div>
            <div className='flex ss:w-1/2 justify-center items-center'>
              <img className='flex aspect-square object-contain h-72' src='https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk='/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs;