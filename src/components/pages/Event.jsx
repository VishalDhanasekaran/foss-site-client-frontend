import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from '../../style';
import { eventsList } from '../../constants';
import AnnounceCard from '../AnnounceCard';

const Event = () => {

    const eventName=useParams();
    console.log(eventsList);
    const handleClick=(event,link)=>{
        window.open(link, '_blank', 'noopener,noreferrer');
      }
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
        <section id={'event'} className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] text-gradient my-4">
            {eventName.name}
            </h1>
            {eventsList.map((item,index)=>
                <div key={item.name} className={`flex-1 ${styles.flexCenter} ${item.name===eventName.name? 'flex':'hidden'} flex-col xl:px-0 sm:px-16 px-6 font-poppins font-semibold ss:text-[22px] text-[15px]`}>
                    <div className={`${styles.flexCenter}`}>
                        <img src={item.poster} alt={item.name} className='h-[20rem] w-[20rem]'/>
                    </div>
                    <div className={`${styles.flexCenter} flex ss:flex-row flex-col my-10 `}>
                        <div className='my-2 mx-[24px]'>
                            Date: {item.date}
                        </div>
                        <div className='my-2 mx-[24px]'>
                            Time: {item.time}
                        </div>
                        <div className='my-2 mx-[24px]'>
                            Venue: {item.venue}
                        </div>
                    </div>
                    <div className='text-justify ss:text-[22px] text-[15px]'>
                        {item.description}
                    </div>
                </div>
                
            )}
        </section>
    </div>
  )
}

export default Event;