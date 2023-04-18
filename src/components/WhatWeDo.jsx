import React, { useEffect } from 'react'
import { activities } from '../constants'
import { useState } from 'react'
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import Activity from './Activity';


const WhatWeDo = () => {
    const [data,setData] = useState()
    useEffect(()=>{
        setData(activities[0]);
    },[]);
    const handleClick = (id) => {
        let obj=activities.find(obj=>obj.id===id);
        setData(obj);
    }
    console.log(data);
  return (
    <div className='flex w-full flex-col gap-5'>
        <div className='flex w-full ss:flex-row flex-col bg-zinc-800 h-80 gap-5 p-4 rounded-2xl' >
            <div className='flex flex-col gap-5 ss:w-2/3 p-4 '>
                <span className='flex text-gradient text-[45px] font-semibold '>{data?.title}</span>
                <span className='flex text-[20px] text-justify'>{data?.desc}</span>
            </div>
            <div className='flex ss:w-1/3 justify-center items-center'>
                <img src={data?.pic} alt={data?.title} className='flex rounded-2xl aspect-square object-contain h-72'/>
            </div>
        </div>
        <div className='flex flex-wrap gap-2 w-full justify-center items-center'>
            {activities.map((item)=>(
                <div className='flex h-40 w-24 flex-col justify-end items-center gap-2 cursor-pointer hover:bg-amber-500 hover:bg-opacity-5 p-3 rounded-xl' key={item. id} onClick={()=>handleClick(item.id)}>
                    <img src={item.icon} className='flex h-12 w-20'/>
                    <span className='flex text-center text-gradient h-12'>{item.title}</span>
                    <div className={`flex ${data?.id===item.id?'bg-amber-500':''} h-2 w-2 rounded-full `}></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WhatWeDo