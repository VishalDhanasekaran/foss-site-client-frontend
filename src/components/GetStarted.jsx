import React from 'react'
import {arrowUp } from '../assets';
const GetStarted = ({text,link,target}) => {
  const handleClick=()=>{ 
    window.open(link, target, 'noopener,noreferrer');
  }
  return (
    <div className={` justify-center items-center flex w-52 h-10 rounded-xl bg-zinc-600 p-1 cursor-pointer hover:scale-105 ease-in-out duration-300`} onClick={handleClick}>
      <p className='font-poppins font-medium text-lg  mr-2'>
        <span className='text-white'>{text}</span>
      </p>
      <img src={arrowUp} className='w-6 h-6 object-contain' alt='arrow'/>
    </div>
  )
}

export default GetStarted