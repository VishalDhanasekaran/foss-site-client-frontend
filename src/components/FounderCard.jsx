import React from 'react'

const FounderCard = ({img,name,working}) => {
  return (
        <div className={`flex flex-col justify-center items-center rounded-lg bg-black p-5 w-60 h-[24rem]`}>
            <img src={img} alt={name} className='flex w-52 h-48 rounded-xl m-3'/>
            <span className='flex text-gradient text-center'>{name}</span>
            <span className='flex text-gradient text-center'>{working}</span>
        </div>
  )
}

export default FounderCard