import React, { useEffect } from 'react'
import { activities } from '../constants'
import { useState } from 'react'
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import Activity from './Activity';


const WhatWeDo = () => {
    const [data,setData] = useState();
    
    const handleClick = (id) => {
        let obj=activities.find(obj=>obj.id===id);
        setData(obj);
    }
  return (
    <div className='flex w-full flex-col justify-center items-center'>
        {data && <div className='hidden sm:flex bg-zinc-800 bg-opacity-95 fixed z-20 animate-[fadeInDown_1s_ease-in-out] w-2/3 rounded-2xl' >
            <Activity data={data} setData={setData}/>
        </div>}
        <div className='hidden sm:flex gap-3 flex-wrap w-[60%] justify-center items-center'>
            {activities.map((item)=>(
                <div className='flex h-40 w-24 flex-col justify-end rounded-xl items-center gap-2 cursor-pointer hover:bg-amber-500 hover:bg-opacity-5 p-3' key={item.id} onClick={()=>handleClick(item.id)}>
                    <img src={item.icon} className='flex h-12 w-20 aspect-square'/>
                    <span className='flex text-center text-gradient h-12'>{item.title}</span>
                </div>
            ))}
        </div>
        <div className='flex sm:hidden flex-col gap-3 bg-zinc-800 justify-center items-center p-3 rounded-xl'>
        {activities.map((item)=>(
            <div className='flex flex-col bg-zinc-800 p-2 rounded-xl justify-center items-center gap-3' key={item.id}>
                <span className='flex text-2xl text-gradient font-semibold font-courier'>{item.title}</span>
                <div className='flex flex-row justify-center items-center'>
                    <img className='flex aspect-square object-contain h-20 w-20' src={item.icon}/>
                    <span className='flex text-justify p-2 font-courier'>{item.desc}</span>
                </div>
            </div>
        ))}
        </div>      
    </div>
  )
}

export default WhatWeDo