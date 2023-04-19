import React from 'react'
import { linkedin as ln } from '../assets'
import { mail as ml } from '../assets'

const FounderCard = ({img,name,working,mail,linkedin}) => {

  const handleClick = (link) => {
    window.open(link,'_blank','noopener,noreferrer');
    }

  return (
        <div className={`flex flex-col  justify-between items-center rounded-lg bg-black p-5 w-60 h-[23rem]`}>
          <div className='flex flex-col justify-center items-center'>
            <img src={img} alt={name} className='flex aspect-square object-contain rounded-xl'/>
            <span className='flex text-gradient text-center'>{name}</span>
            <span className='flex text-gradient text-center'>{working}</span>
          </div>
          <div className='flex items-center w-full'>
            {mail&&<div className='flex flex-row gap-2 justify-center items-center cursor-pointer w-full' onClick={()=>{handleClick('mailto:'+mail)}}>
              <img src={ml} className='flex h-5 w-5'/>
              <span className='flex text-[#a09439] text-center underline underline-offset-2'>{mail}</span>
            </div>}
            {linkedin&& <div className='flex justify-end w-full' onClick={()=>{handleClick(linkedin)}}>
              <img src={ln} className='flex cursor-pointer'/>
            </div>}
          </div>
        </div>
  )
}

export default FounderCard