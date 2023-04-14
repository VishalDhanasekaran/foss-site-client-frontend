import React from 'react'
import styles from '../style';
import { UilArrowLeft,UilArrowRight } from '@iconscout/react-unicons'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Navigation,Autoplay } from 'swiper';

const Gallery = ({name,data}) => {
    console.log(name,data);
  return (
    <div className={`${data?"flex":"hidden"}`}>
        <section id={'gallery'} className={`flex-1 ${styles.flexStart} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`} data-aos="fade-up" data-aos-duration='1000'>
        <h2 className="flex-1 font-poppins font-semibold ss:text-[42px] text-gradient text-[22px] text-white ss:leading-[100.8px] leading-[75px]">
          {name} Gallery
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
            <SwiperSlide key={item._id}>
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
            <SwiperSlide key={item._id}>
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
    </div>
  )
}

export default Gallery