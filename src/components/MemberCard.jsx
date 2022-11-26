import React from 'react'
import styles from '../style';
import { arrowUp } from '../assets';

const MemberCard = ({sno,name,role,department,year,dateOfBirth,mobileNumber,personalMail,clgMail,photo}) => {
  const pic=photo.split('/');
  const handleClick=event=>{
    
    window.open(personalMail, '_blank', 'noopener,noreferrer');
  }
  return (
    <div className='flex flex-col justify-center items-center w-[250px] p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2'>
      <div className=' w-full h-56'>
        
        <img alt={name} src={`https://drive.google.com/uc?export=view&id=${pic[5]}`} className='w-full h-52'/>
      </div>
      <div className='mt-4 flex flex-col font-poppins text-justify text-white text-base'>
        <span className='font-semibold text-center text-lg'>{name}</span>
        <span >Role: {role}</span>
        <span >Department: {department}</span>
        <span >Year: {year}</span>
        <div className={`${styles.flexCenter} w-full h-[40px] bg-black p-[2px] cursor-pointer mt-2`} onClick={handleClick}>
          <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] `}>
            <div className={`${styles.flexCenter} flex-row`}>
              <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
                <span className='text-white'>Linkedin</span>
              </p>
              <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt='arrow'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberCard;