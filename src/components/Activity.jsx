import React from 'react'
import { UilTimes } from '@iconscout/react-unicons'

const Activity = ({data,setData}) => {
  return (
    <div className={`flex flex-col z-30 `}>
        <section className={`flex flex-col sm:px-10 px-5 py-3 `}>
            <UilTimes onClick={()=>setData(null)} className='flex cursor-pointer h-10 w-10'/>
            <div className="flex flex-col ss:flex-row justify-center items-center w-full z-[1]">
                <div className='flex flex-col gap-5 ss:w-2/3 p-4 z-10'>
                    <span className='flex text-gradient text-[45px] font-semibold '>{data?.title}</span>
                    <span className='flex text-[20px] text-justify'>{data?.desc}</span>
                </div>
                {/* <div className='flex z-10 relative'>
                    <img src={data?.img} alt={data?.title} className='flex aspect-square '/>
                </div> */}
            </div>
        </section>
    </div>
  )
}

export default Activity;