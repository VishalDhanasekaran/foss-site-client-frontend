import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import styles from '../../style';
import axios from 'axios';
import {RingLoader} from 'react-spinners';
import BoltLoader from '../BoltLoader'
import GetStarted from '../GetStarted';

import { UilLink } from '@iconscout/react-unicons'

const Event = () => {

    const eventId=useParams();
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        axios.get(`https://foss-backend.onrender.com/api/events/event/${eventId.id}`)
        .then((res)=>{setData(res.data);setLoading(false);console.log(res.data);})
        .catch((err)=>{
            console.log("error:",err.message);
            setError(err.message);
            setLoading(false);
        });
    },[]);

    console.log(data);
    
  return (
    <div className={`flex flex-col ${styles.paddingY} animate-[zoomIn_1s_ease-in-out]`}>
        
        {data && <section id={'event'} className={`flex-1 ${styles.flexCenter} ${styles.paragraph} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] text-gradient my-4 ">
            { data.title}
            </h1>
            <div className={`flex-1 flex justify-center items-center flex-col gap-4 xl:px-0 sm:px-16 px-6 font-poppins font-semibold ss:text-[22px] text-[15px] `}>
                <div className={`${styles.flexCenter}`}>
                    <img src={data.pic} alt={data.content} className='shadow-lg shadow-[#b0a854] aspect-video object-contain'/>
                </div>
                <div className={` grid grid-cols-2 grid-rows-2 justify-center flex-col p-4 w-1/2 gap-5`} data-aos="fade-up-left" data-aos-duration='2000'>
                    <div className='flex flex-col'>
                        <span className='flex font-semibold text-gradient text-2xl'>Date:</span>
                        <span className={`${styles.paragraph} text-xl `}>{data?.eventDate.slice(0,10)}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='flex font-semibold text-gradient text-2xl'>Venue:</span>
                        <span className={`${styles.paragraph} text-xl `}>{data?.venue}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='flex font-semibold text-gradient text-2xl'>Time:</span>
                        <span className={`${styles.paragraph} text-xl `}>{data?.time}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='flex font-semibold text-gradient text-2xl'>Speaker:</span>
                        <span className={`${styles.paragraph} text-xl `}>{data?.speaker}</span>
                    </div>
                </div>
            </div>
            <div className={`${styles.paragraph} text-justify ss:text-[22px] text-[15px] my-10`}>
                {data.content}
            </div>
            <GetStarted text={'View More'} link={data?.link}/>
        </section>}
        {loading && <div className='flex justify-center items-center'> 
            {/* <RingLoader color={'#eecc21'} loading={loading} size={150}/> */}
            <BoltLoader/>
            </div>}
        {error && <div className='flex'><span className={`${styles.heading2} text-center`}>{error}!</span></div>}
    </div>
  )
}

export default Event;



category
: 
"Introduction"
content
: 
"Introducing the FOSS community and FOSS CIT club"
createdAt
: 
"2022-12-28T16:42:05.903Z"
eventDate
: 
"2018-09-24T16:49:25.000Z"
eventYear
: 
"2018"
link
: 
""
materials
: 
""
pic
: 
"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
speaker
: 
"Dhileepan J, Sharat Chandar M"
time
: 
"After college hours"
title
: 
"Introductory session"
updatedAt
: 
"2022-12-28T16:54:38.018Z"
user
: 
"63aa8b3faf639848759913ea"
venue
: 
""
__v
: 
0
_id
: 
"63ac71ddd70f8700414e80f3"