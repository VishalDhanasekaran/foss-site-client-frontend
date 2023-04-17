import React from 'react'


const AnnounceCard = ({title,pic}) => {
  return (
    
    <div className='flex flex-col sm:w-full w-[90%] sm:h-full h-[90%] p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2 hover:scale-[1.02] group duration-300 animate-[fadeInDown_1s_ease-in-out] justify-end items-center' >
        <div className='flex justify-center items-center'>
          <img alt={title} src={pic} className='flex aspect-[16/9] rounded-xl object-contain h-80'/>
        </div>
        <div className='flex  justify-center items-center w-full h-20'>
          <span className='flex font-bold text-gradient font-roboto text-lg py-5 w-4/5 text-center justify-center items-center'>{title}</span>
        </div>
        <span className='sm:hidden font-semibold group-hover:flex text-sm text-gradient absolute'>Click to View Details</span>
    </div>
  )
}

export default AnnounceCard;