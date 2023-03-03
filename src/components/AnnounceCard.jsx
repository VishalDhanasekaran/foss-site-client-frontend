import React from 'react'


const AnnounceCard = ({title,pic}) => {
  return (
    
    <div className='flex flex-col justify-center items-center sm:w-[33rem] w-[20rem]  p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2 hover:scale-105 duration-300 gap-10 relative z-0 animate-[fadeInDown_1s_ease-in-out]' data-aos="fade-up" data-aos-duration='1000'>
      <div className={`flex flex-col text-center justify-center items-center`}>
        <img alt={title} src={pic} className='ss:w-[30rem] w-[18rem] ss:h-[22rem] h-[13rem] rounded-xl'/>
        <span className='flex font-bold text-white font-roboto text-center text-2xl py-5'>{title}</span>
      </div>
    </div>
  )
}

export default AnnounceCard;