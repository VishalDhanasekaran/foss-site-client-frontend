import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from '../../style';
import { eventsList } from '../../constants';
import GetStarted from '../GetStarted';

const Event = () => {

    const eventId=useParams();
    // console.log(eventsList);
    
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
        
        <section id={'event'} className={`flex-1 ${styles.flexCenter} ${styles.paragraph} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] text-gradient my-4 animate-[zoomIn_0.75s_ease-in-out]">
            {eventId.id}
            </h1>
            {eventsList.map((item,index)=>
                <div key={item.name} className={`flex-1 ${styles.flexCenter} ${item.id==eventId.id? 'flex':'hidden'} flex-col xl:px-0 sm:px-16 px-6 font-poppins font-semibold ss:text-[22px] text-[15px] `}>
                    <div className={`${styles.flexCenter}`}>
                        <img src={item.poster} alt={item.name} className='shadow-lg shadow-[#b0a854] h-[20rem] w-[20rem] animate-[zoomIn_0.75s_ease-in-out]'/>
                    </div>
                    <div className={`${styles.flexCenter} flex flex-col my-7 leading-10 animate-[zoomIn_0.75s_ease-in-out]`}>
                        <div>Date: {item.date}</div>
                        <div>Time: {item.time}</div>
                        <div>Venue: {item.venue}</div>
                        <div>Speaker: {item.speaker}</div>
                        <div className='ss:max-w-[25rem] max-w-[15rem] truncate'>
                            Online Link: <a href={item.onlineLink} target='_blank'>{item.onlineLink+'dwwvwergsvbrvwctcykgtyyyyyykytctutcutcugqwertuioppoiuytrsdfghj,mmxcvbtyuoouigvtycrgdrtdvwsrgsdf'}</a>
                        </div>
                    </div>

                    <div className={`${styles.paragraph} text-justify ss:text-[22px] text-[15px] my-10`} data-aos="zoom-in" data-aos-duration='2000'>
                        {item.description}
                    </div>

                    <div className={`${styles.flexCenter}`} data-aos="zoom-in" data-aos-duration='2000'>
                        <GetStarted text={'Materials'} link={item.material}/>
                    </div>

                </div>
                
            )}
        </section>
    </div>
  )
}

export default Event;