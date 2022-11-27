import React from 'react'
import GetStarted from './GetStarted';

const MemberCard = ({name,role,department,year,linkedin,photo}) => {
  const pic=photo.split('/');
  
  return (
    <div className='flex flex-col justify-center items-center w-[250px] p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2 hover:scale-105 ease-in-out duration-300'>
      <div className=' w-full h-56'>
        
        <img alt={name} src={`https://drive.google.com/uc?export=view&id=${pic[5]}`} className='w-full h-52'/>
      </div>
      <div className='mt-4 flex flex-col font-poppins text-justify text-white text-base'>
        <span className='font-semibold text-center text-lg'>{name}</span>
        <span >Role: {role}</span>
        <span >Department: {department}</span>
        <span >Year: {year}</span>
        <GetStarted text={'Linkedin'} link={linkedin}/>
      </div>
    </div>
  )
}

export default MemberCard;