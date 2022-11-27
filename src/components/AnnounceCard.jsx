import React from 'react'

const AnnounceCard = ({event,date,time,venue,poster}) => {
  
  return (
    <div className='flex-col justify-center items-center ss:w-[250px] p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2 inline-block cursor-pointer hover:scale-105 ease-in-out duration-300'>
      <div className=' w-full h-56'>
        
        <img alt={event} src={poster} className='w-full h-52'/>
      </div>
      <div className='mt-4 flex flex-col font-poppins text-justify text-white text-base'>
        <span className='font-semibold text-center text-lg'>{event}</span>
        <span >Date: {date}</span>
        <span >Time: {time}</span>
        <span >Venue: {venue}</span>
      </div>
    </div>
  )
}

export default AnnounceCard;