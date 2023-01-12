import React from 'react'
import { linkedin as Lpic } from '../assets'

const FounderCard = ({img,name,working,department,linkedin,content,rev,sno}) => {
    const handleClick=(event,link)=>{
        window.open(link, '_blank', 'noopener,noreferrer');
      }
  return (
    <div className='flex justify-center items-center p-5'>
        <div className={`flex ${sno%2==0?'ss:flex-row-reverse flex-col':'ss:flex-row flex-col'} ss:w-[80%] rounded-lg bg-black`}>
            <div className='flex w-60 justify-center items-center ss:w-[50%]'>
                <img src={img} alt={name} className='w-52 h-48 rounded-xl m-3'/>
            </div>
            <div className='flex flex-col text-xl p-5 text-justify ss:w-[50%]'>
                <div className='flex justify-between items-end p-3'>
                    <div className='flex'><span className='text-gradient '>{name}</span></div>
                    <div className='flex'><img src={Lpic} alt='Linkedin' className='flex cursor-pointer'  onClick={event => handleClick(event, linkedin)}/></div>
                </div>
                <span className='text-gradient p-3'>{department}</span>
                <span className='text-gradient p-3'>{working}</span>
                <span className='text-gradient p-3'>{content}</span>
            </div>
        </div>
    </div>
  )
}

export default FounderCard