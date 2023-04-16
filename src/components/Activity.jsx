import React from 'react'
import { UilTimes } from '@iconscout/react-unicons'

const Activity = ({data,setData}) => {
  return (
    <div className={`flex flex-col z-30 `}>
        <section className={`flex flex-row p-3 `}>
            <UilTimes onClick={()=>setData(null)} className='flex cursor-pointer h-10 w-10'/>
            <div className="flex flex-col justify-center items-center w-full z-[1]">
                <div className='flex flex-col gap-5 p-4 z-10'>
                    <span className='flex text-gradient text-[45px] font-semibold items-center justify-center'>{data?.title}</span>
                    <span className='flex text-[20px] text-justify'>{data?.desc}</span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Activity;