import React from 'react'
import styles from '../style';
import { arrowUp } from '../assets';
import GetStarted from './GetStarted';

const MemberCard = ({sno,name,role,department,year,dateOfBirth,mobileNumber,personalMail,clgMail,photo}) => {
  const pic=photo.split('/');
  
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
        <GetStarted text={'Linkedin'} link={personalMail}/>
      </div>
    </div>
  )
}

export default MemberCard;