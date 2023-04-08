import React from 'react'

const MemberCard = ({name,position,linkedin,pic}) => {
  const handleClick=(event,link)=>{
    window.open(link, '_blank', 'noopener,noreferrer');
  }
  
  return (
    <div onClick={e=>handleClick(e,linkedin)} className='flex flex-col justify-center items-center sm:w-[33rem] w-[20rem]   p-4 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg m-2 hover:scale-105 duration-300 cursor-pointer gap-10 z-0 animate-[fadeInDown_1s_ease-in-out]' >
      <div className={`flex flex-col text-center justify-center items-center`}>
        <img alt={name} src={pic} className='flex aspect-video rounded-xl object-contain'/>
        <span className='flex font-bold text-gradient font-roboto text-center text-2xl py-5 '>{name}</span>
        <span className='flex text-xl text-gradient'>{position}</span>
      </div>
    </div>
  )
}

export default MemberCard;