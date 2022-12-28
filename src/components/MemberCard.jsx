import React from 'react'
import GetStarted from './GetStarted';
import styles from '../style';
import { linkedin as linkedinLogo } from '../assets';

const MemberCard = ({name,position,department,linkedin,pic}) => {
  const photo=pic.split('/');
  const handleClick=(event,link)=>{
    window.open(link, '_blank', 'noopener,noreferrer');
  }
  
  return (
    <div>
      <div className='flex flex-col justify-center sm:w-[20rem] w-[20rem] h-[30rem] items-center  p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2 hover:scale-105 duration-300 gap-10 animate-[fadeInDown_1s_ease-in-out]' data-aos="fade-up" data-aos-duration='1000'>
        <div className={`w-60 h-60 text-center ${styles.flexCenter} flex-col z-0`} >
          <img alt={name} src={`https://drive.google.com/uc?export=view&id=${photo[5]}`} className='w-52 h-48 rounded-xl'/>
          <span className='font-semibold text-lg text-gradient'>{name}</span>
        </div>
        
        <div className={`flex flex-col font-poppins justify-center items-center text-justify text-white text-base animate-[zoomIn_1s_ease-in-out]`} >
          <span className='text-gradient'>{position}</span>
          <span className='text-gradient'>{department}</span>
          <div className={`flex justify-end items-end w-full mt-5`}><img src={linkedinLogo} onClick={event => handleClick(event, linkedin)}/></div>
        </div>
      </div>
    </div>
  )
}

export default MemberCard;