import React from 'react'
import { UilTimes } from '@iconscout/react-unicons'

const Activity = ({data,setData}) => {
  return (
    <div className={`flex flex-col z-30 `}>
        <section className={`flex flex-row p-3 `}>
            <UilTimes onClick={()=>setData(null)} className='flex cursor-pointer h-10 w-10'/>
            <div className="flex flex-row justify-center items-center w-full z-[1]">
                <div className='flex flex-col gap-5 p-4 z-10 w-1/2'>
                    <span className='flex text-gradient text-2xl font-semibold items-center justify-center font-lobster'>{data?.title}</span>
                    <span className='flex text-lg text-justify'>{data?.desc}</span>
                </div>
                <div className='flex w-1/2 justify-center items-center'>
                  <img src={data?.pic} className='flex h-80 w-80'/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Activity;