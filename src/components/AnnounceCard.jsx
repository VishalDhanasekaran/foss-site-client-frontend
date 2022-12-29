import React from 'react'
import styles from '../style';

const AnnounceCard = ({title,pic}) => {
  return (
    
    <div className='flex flex-col justify-center sm:w-[30rem] w-[20rem] items-center  p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2 hover:scale-105 duration-300 gap-10 relative z-0 animate-[fadeInDown_1s_ease-in-out]' data-aos="fade-up" data-aos-duration='1000'>
      <div className={` text-center ${styles.flexCenter} flex-col z-0`}>
        <img alt={title} src={pic} className='ss:w-[30rem] w-[18rem] ss:h-[20rem] h-[13rem] rounded-xl'/>
      </div>
      <div className=' flex flex-col font-poppins text-justify text-white text-base'>
        <span className='font-semibold text-center text-lg'>{title}</span>
      </div>
    </div>
  )
}

export default AnnounceCard;