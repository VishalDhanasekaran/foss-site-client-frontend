import React from 'react'
import { linkedin as ln } from '../assets'

const MemberCard = ({name,position,linkedin,pic}) => {
  const handleClick=(link)=>{
    window.open(link, '_blank', 'noopener,noreferrer');
  }
  
  return (
    <div  className='flex flex-col justify-center items-center sm:w-[33rem] w-[20rem]   p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2 hover:scale-105 duration-300 gap-10 z-0 animate-[fadeInDown_1s_ease-in-out]'  data-aos="fade-up" data-aos-duration='1000' >
      <div className={`flex flex-col text-center justify-center items-center gap-3`}>
        <img alt={name} src={pic} className='flex aspect-video rounded-xl object-contain sm:h-72 h-52'/>
        <span className='flex font-bold text-gradient font-poppins text-center text-2xl '>{name}</span>
        <span className='flex text-xl text-gradient'>{position}</span>
        <div className='flex w-full justify-end '>
          <img src={ln} onClick={()=>handleClick(linkedin)} className='flex cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default MemberCard;