import React,{useEffect,useState} from 'react'
import styles from '../../style';
import GetStarted from '../GetStarted';
import { founders } from '../../constants';
import FounderCard from '../FounderCard';
import { UilArrowLeft,UilArrowRight } from '@iconscout/react-unicons'
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { API } from '../../constants';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Navigation,Autoplay } from 'swiper';

const AboutUs = () => {

  const [data,setData]=useState(null);
  useEffect(()=>{
    axios.get(`${API}/events/year/2022-23`)
      .then((res)=>{console.log(res);setData(res.data);})
      .catch((err)=>{
        console.log("error:",err.message);
      }); 

  },[]);

  console.log(data);

  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
      <section id={'history'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-[fadeInDown_1s_ease-in-out]`}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className={`${styles.heading2} text-center text-gradient`}>
            About FOSS CIT
          </h2>
        </div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-gradient ss:leading-[100.8px] leading-[75px]">
            History Of FOSS-CIT
        </h1>
        <p className={`${styles.paragraph} mt-5 text-justify`}>
        Our college's FOSS club was founded with the intention of introducing students to the world of open-source software, where they can learn and create new software. 
        The only pupils who will actually benefit from such a group are those who actively participate in it. Indirectly, the college gains from these initiatives since they make our students' talents known to prospective employers.
        </p>
      </section>
      

      <section id={'founders'} className={`flex-1 ${styles.flexStart} items-center justify-center my-16 sm:flex-row flex-col xl:px-0 sm:px-16 px-6 `} data-aos="fade-up" data-aos-duration='2000'>
        <div className='flex flex-col sm:w-1/3'>
          <h1 className="flex-1 font-poppins text-gradient font-semibold ss:text-[52px] text-[32px] ss:leading-[100.8px] leading-[75px]">
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

      <section id={'gallery'} className={`flex-1 ${styles.flexStart} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`} data-aos="fade-up" data-aos-duration='1000'>
        <h2 className="flex-1 font-poppins font-semibold ss:text-[42px] text-gradient text-[22px] text-white ss:leading-[100.8px] leading-[75px]">
          Events Gallery
        </h2>
        <Swiper
          effect={'coverflow'}
              grabCursor={true}
              loop={true}
              slidesPerView={3}
              autoplay={{
                delay:2000,
                disableOnInteraction: false
              }}
              
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className='sm:flex hidden w-full p-10'
        >
          {data?.map((item)=>(
            <SwiperSlide>
              <img src={item.pic} className='flex aspect-square object-contain'/>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <UilArrowLeft name="arrow-back-outline"></UilArrowLeft>
            </div>
            <div className="swiper-button-next slider-arrow">
              <UilArrowRight name="arrow-forward-outline"></UilArrowRight>
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </Swiper>

        <Swiper
          effect={'coverflow'}
              grabCursor={true}
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay:2000,
                disableOnInteraction: false
              }}
              
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className='flex sm:hidden w-full p-10'
        >
          {data?.map((item)=>(
            <SwiperSlide>
              <img src={item.pic} className='flex aspect-square object-contain'/>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <UilArrowLeft name="arrow-back-outline"></UilArrowLeft>
            </div>
            <div className="swiper-button-next slider-arrow">
              <UilArrowRight name="arrow-forward-outline"></UilArrowRight>
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </Swiper>
        
      </section>
      
      <section id={'community'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:p-16 p-6 `} data-aos="fade-up" data-aos-duration='2000'>
        <h2 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-gradient ss:leading-[100.8px] leading-[75px]">
          Join Our Community
        </h2>
        <GetStarted text={'Discord'} link={'https://discord.com/invite/zAqY6nqQ8H'}/>
      </section>
    </div>
  )
}

export default AboutUs;