import React from 'react'
import GetStarted from './GetStarted';
import styles from '../style';
import { useState } from 'react';

const MemberCard = ({name,role,department,year,linkedin,photo}) => {
  const pic=photo.split('/');
  const [click,setClick]=useState(null);
  // console.log(click);
  return (
    <div>
      <div className='flex sm:flex-row flex-col justify-center sm:w-[20rem] w-[20rem] items-center  p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2 hover:scale-105 duration-300 gap-10 relative z-0 animate-[fadeInDown_1s_ease-in-out]' data-aos="fade-up" data-aos-duration='1000'>
        <div className={`w-60 h-60 text-center ${styles.flexCenter} flex-col z-0`} onClick={()=>setClick({name})}>
          <img alt={name} src={`https://drive.google.com/uc?export=view&id=${pic[5]}`} className='w-52 h-52 rounded-xl'/>
          <span className='font-semibold text-lg text-gradient'>{name}</span>
        </div>
        { click && 
        <div className={`absolute z-10 mt-4 flex flex-col font-poppins text-justify text-white text-base animate-[zoomIn_1s_ease-in-out]`} onClick={()=>setClick(null)}>
          <span><span className='text-gradient'>Role: </span> {role}</span>
          <span><span className='text-gradient'>Department: </span> {department}</span>
          <span><span className='text-gradient'>Year: </span> {year}</span>
          <GetStarted text={'Linkedin'} link={linkedin} />
        </div>}
      </div>
    </div>
  )
}

export default MemberCard;