import React from 'react'


const AnnounceCard = ({title,pic}) => {
  return (
    
    <div className='flex flex-col justify-center items-center sm:w-[33rem] w-[20rem] sm:h-[25rem] h-[20rem]  p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2 hover:scale-[1.02] group duration-300 gap-10 z-0 animate-[fadeInDown_1s_ease-in-out]' >
      <div className={`flex flex-col text-center justify-end items-center`}>
        <img alt={title} src={pic} className='flex aspect-[16/9] rounded-xl object-contain h-72'/>
        <span className='flex font-bold text-gradient font-roboto text-center text-2xl py-5 '>{title}</span>
        <span className='sm:hidden flex group-hover:flex text-xl text-gradient absolute'>Click to View Details</span>
      </div>
    </div>
  )
}

export default AnnounceCard;