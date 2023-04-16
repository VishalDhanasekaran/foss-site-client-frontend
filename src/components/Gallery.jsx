import React, { useEffect, useState } from 'react'

import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation, Autoplay } from "swiper";

const Gallery = ({name,data}) => {
    const [slide,setSlide]=useState(3);
    window.onresize=()=>{
        if(window.innerWidth<"768"){setSlide(1)}
        if(window.innerWidth>"768"){setSlide(3)}
    }
    useEffect(()=>{
        if(window.innerWidth<"768"){setSlide(1)}
        if(window.innerWidth>"768"){setSlide(3)}
    },[]);
  return (
    <div className={`flex w-full px-2`}>
        <section id={'gallery'} className={`flex flex-col w-full xl:px-0 sm:px-16 px-6 gap-5`} data-aos="fade-up" data-aos-duration='1000'>
            <h2 className="flex font-poppins font-semibold text-gradient text-5xl text-white ">
            {name} Gallery
            </h2>
            <div className='flex flex-row w-full overflow-y-auto cursor-grab bg-zinc-700 rounded-2xl p-5'>
                <Swiper slidesPerView={slide}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation, Autoplay]}
                >
                {data?.map((item)=>(
                    <SwiperSlide className='flex p-5'>
                        <div className='flex p-2 justify-center items-center' key={item._id}>
                            <img src={item.pic} alt={item.pic} className='flex aspect-square object-contain'/>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
    </div>
  )
}

export default Gallery