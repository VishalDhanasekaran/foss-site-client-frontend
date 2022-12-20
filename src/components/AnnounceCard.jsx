import React from 'react'
import styles from '../style';

const AnnounceCard = ({name,poster}) => {
  return (
    
    <div className='flex flex-col justify-center sm:w-[20rem] w-[20rem] items-center  p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2 hover:scale-105 duration-300 gap-10 relative z-0 animate-[fadeInDown_1s_ease-in-out]' data-aos="fade-up" data-aos-duration='1000'>
      <div className={`w-60 h-60 text-center ${styles.flexCenter} flex-col z-0`}>
        <img alt={name} src={poster} className='w-52 h-52 rounded-xl'/>
      </div>
      <div className='mt-4 flex flex-col font-poppins text-justify text-white text-base'>
        <span className='font-semibold text-center text-lg'>{name}</span>
      </div>
    </div>
  )
}

export default AnnounceCard;