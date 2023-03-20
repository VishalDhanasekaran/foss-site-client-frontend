import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import styles from '../../style';
import axios from 'axios';
import {RingLoader} from 'react-spinners';
import BoltLoader from '../BoltLoader'

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
            <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 font-poppins font-semibold ss:text-[22px] text-[15px] `}>
                <div className={`${styles.flexCenter}`}>
                    <img src={data.pic} alt={data.content} className='shadow-lg shadow-[#b0a854] ss:h-[25rem] w-[40rem] '/>
                </div>
                <div className={`${styles.flexCenter} flex flex-col my-7 leading-10 `}>
                    <div>Date: {data.eventDate.slice(0,10)}</div>
                    <div>Time: {data.time}</div>
                    <div>Venue: {data.venue}</div>
                    <div>Speaker: {data.speaker}</div>
                </div>
                <div className={`${styles.paragraph} text-justify ss:text-[22px] text-[15px] my-10`}>
                    {data.content}
                </div>
            </div>
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