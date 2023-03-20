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
      <div className='flex flex-col justify-center items-center p-3 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg hover:scale-105 duration-300 animate-[fadeInDown_1s_ease-in-out]' data-aos="fade-up" data-aos-duration='1000'>
        <div className={` text-center ${styles.flexCenter} flex-col p-4 z-0`} >
          <img alt={name} src={pic} className='flex aspect-square rounded-xl'/>
        </div>
        
        <div className={`flex flex-col font-poppins w-full justify-center items-center text-justify text-white text-base animate-[zoomIn_1s_ease-in-out]`} >
          <span className='font-semibold text-xl text-gradient'>{name}</span>
          <div className='flex flex-row w-full justify-between items-center'>
            <div className='flex w-5 h-5'></div>
            <span className='flex text-gradient text-xl'>{position}</span>
            {/* <span className='text-gradient'>{department}</span> */}
            <div className={`flex cursor-pointer h-5 w-5`}><img src={linkedinLogo} onClick={event => handleClick(event, linkedin)}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberCard;