import React,{useRef} from 'react'
import { activities } from '../constants'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import Activity from './Activity';


const WhatWeDo = () => {
    const [data,setData] = useState()
    const handleClick = (id) => {
        let obj=activities.find(obj=>obj.id===id);
        setData(obj);
    }
    // const handleNextSlide = () => {
    //     if (swiperRef.current && swiperRef.current.slideNext) {
    //       swiperRef.current.slideNext();
    //     }
    //   };

    //   const handlePrevSlide = () => {
    //     if (swiperRef.current && swiperRef.current.slidePrev) {
    //       swiperRef.current.slidePrev();
    //     }
    //   };

      
    
    //   const swiperRef = useRef(null);
  return (
    <div className='flex w-full flex-col justify-center items-center'>
        {data && <div className='flex bg-black bg-opacity-90 fixed z-20 animate-[fadeInDown_1s_ease-in-out]' >
            
            {/* <div className='flex flex-col gap-5 ss:w-2/3 p-4 z-10'>
                <span className='flex text-gradient text-[45px] font-semibold '>{data.title}</span>
                <span className='flex text-[20px] text-justify'>{data.desc}</span>
            </div>
            <div className='flex -skew-x-12 object-contain border-l-[35px] border-zinc-800 z-30'/>
            <div className='flex -skew-x-12 object-contain border-l-[35px] border-zinc-800 z-30'/>
            <div className='flex -skew-x-12 object-contain border-l-[35px] border-zinc-800 z-30'/>
            <div className='flex bg-black z-10 relative ss:-translate-x-10'>
                <img src={data.img} alt={data.title} className='flex aspect-square'/>
            </div> */}
            <Activity data={data} setData={setData}/>
        </div>}
        {/* <div className='ss:hidden flex gap-2 w-full justify-center items-center'>
            <div className="flex text-3xl" onClick={handlePrevSlide}>{"<"}</div>
            <Swiper spaceBetween={50} slidesPerView={3} ref={swiperRef}  onSwiper={(swiper) => {swiperRef.current = swiper;}} 
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} loop={true}>
            {activities.map((item)=>(
                <SwiperSlide>
                    <div className='flex h-40 w-24 flex-col justify-end items-center gap-2 cursor-pointer hover:bg-amber-500 hover:bg-opacity-5 p-3' key={item.id} onClick={()=>handleClick(item.id)}>
                        <img src={item.icon} className='flex h-12 w-20 aspect-square'/>
                        <span className='flex text-center text-gradient h-12'>{item.title}</span>
                        <div className={`flex ${data.id===item.id?'bg-amber-500':''} h-2 w-2 rounded-full `}></div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
            <div className="flex text-3xl" onClick={handleNextSlide}>{">"}</div>
        </div> */}
        <div className='flex gap-3 flex-wrap w-[60%]'>
            {activities.map((item)=>(
                    <div className='flex h-40 w-24 flex-col justify-end items-center gap-2 cursor-pointer hover:bg-amber-500 hover:bg-opacity-5 p-3' key={item.id} onClick={()=>handleClick(item.id)}>
                        <img src={item.icon} className='flex h-12 w-20 aspect-square'/>
                        <span className='flex text-center text-gradient h-12'>{item.title}</span>
                        {/* <div className={`flex ${data.id===item.id?'bg-amber-500':''} h-2 w-2 rounded-full `}></div> */}
                    </div>
            ))}
        </div>
    </div>
  )
}

export default WhatWeDo