import React from 'react'
import { linkedin as ln } from '../assets'
import { mail as ml } from '../assets'

const FounderCard = ({img,name,working,mail,linkedin}) => {

  const handleClick = (link) => {
    window.open(link,'_blank','noopener,noreferrer');
    }

  return (
        <div className={`flex flex-col justify-center items-center rounded-lg bg-black p-5 w-60 h-[24rem]`}>
            <img src={img} alt={name} className='flex aspect-square object-contain rounded-xl m-3'/>
            <span className='flex text-gradient text-center'>{name}</span>
            <span className='flex text-gradient text-center'>{working}</span>
            {mail&&<div className='flex flex-row gap-2 justify-center items-center cursor-pointer' onClick={()=>{handleClick('mailto:'+mail)}}>
              <img src={ml} className='flex h-5 w-5'/>
              <span className='flex text-gradient text-center'>{mail}</span>
            </div>}
            {linkedin&& <div className='flex justify-end w-full' onClick={()=>{handleClick(linkedin)}}>
              <img src={ln} className='flex cursor-pointer'/>
            </div>}
        </div>
  )
}

export default FounderCard