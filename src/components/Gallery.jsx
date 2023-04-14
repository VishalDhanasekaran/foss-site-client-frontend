import React from 'react'
import styles from '../style';
import { UilArrowLeft,UilArrowRight } from '@iconscout/react-unicons'


const Gallery = ({name,data}) => {
    console.log(name,data);
  return (
    <div className={`flex w-full px-2`}>
        <section id={'gallery'} className={`flex-1 ${styles.flexStart} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`} data-aos="fade-up" data-aos-duration='1000'>
            <h2 className="flex-1 font-poppins font-semibold ss:text-[42px] text-gradient text-[22px] text-white ss:leading-[100.8px] leading-[75px]">
            {name} Gallery
            </h2>
            <div className='flex flex-nowrap overflow-x-auto w-50'>
                {data?.map((item)=>(
                    <div className='flex p-10' key={item._id}>
                        <img src={item.pic} alt={item.pic}/>
                    </div>
                ))}
            </div>            
        </section>
    </div>
  )
}

export default Gallery