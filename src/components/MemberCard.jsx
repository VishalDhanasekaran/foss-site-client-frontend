import React from 'react'
import GetStarted from './GetStarted';
import styles from '../style';
import { useState } from 'react';

const MemberCard = ({name,role,department,year,linkedin,photo}) => {
  const pic=photo.split('/');
  
  return (
    <div>
      <div className='flex flex-col justify-center sm:w-[20rem] w-[20rem] h-[30rem] items-center  p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2 hover:scale-105 duration-300 gap-10 animate-[fadeInDown_1s_ease-in-out]' data-aos="fade-up" data-aos-duration='1000'>
        <div className={`w-60 h-60 text-center ${styles.flexCenter} flex-col z-0`} >
          <img alt={name} src={`https://drive.google.com/uc?export=view&id=${pic[5]}`} className='w-52 h-48 rounded-xl my-2'/>
          <span className='font-semibold text-lg text-gradient'>{name}</span>
        </div>
        
        <div className={`flex flex-col font-poppins text-justify p-4 text-white text-base animate-[zoomIn_1s_ease-in-out]`} >
          <span><span className='text-gradient'>Role: </span> {role}</span>
          <span><span className='text-gradient'>Department: </span> {department}</span>
          <span><span className='text-gradient'>Year: </span> {year}</span>
          <div className={`${styles.flexCenter}`}><GetStarted text={'Linkedin'} link={linkedin}/></div>
        </div>
      </div>
    </div>
  )
}

export default MemberCard;