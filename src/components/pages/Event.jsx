import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import styles from '../../style';
import { eventsList } from '../../constants';
import GetStarted from '../GetStarted';
import axios from 'axios';

const Event = () => {

    const eventId=useParams();
    const [data,setData]=useState(null);

  useEffect(()=>{
    async function fetchData(){
      const response = await axios.get(`https://foss-backend.onrender.com/api/events/${eventId.id}`);
      setData(response.data);
    }
    fetchData();
  },[]);

  console.log(data);
    
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
        
        <section id={'event'} className={`flex-1 ${styles.flexCenter} ${styles.paragraph} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] text-gradient my-4 animate-[zoomIn_0.75s_ease-in-out]">
            { data && data.title}
            </h1>
            <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 font-poppins font-semibold ss:text-[22px] text-[15px] `}>
                <div className={`${styles.flexCenter}`}>
                    <img src={data && data.pic} alt={data && data.content} className='shadow-lg shadow-[#b0a854] h-[20rem] w-[20rem] animate-[zoomIn_0.75s_ease-in-out]'/>
                </div>
                <div className={`${styles.flexCenter} flex flex-col my-7 leading-10 animate-[zoomIn_0.75s_ease-in-out]`}>
                    <div>Date: {data && data.eventDate.slice(0,10)}</div>
                    <div>Time: {data && data.time}</div>
                    <div>Venue: {data && data.venue}</div>
                    <div>Speaker: {data && data.speaker}</div>
                    {/* <div className='ss:max-w-[25rem] max-w-[15rem] truncate'>
                        Online Link: <a href={item.onlineLink} target='_blank'>{item.onlineLink+'dwwvwergsvbrvwctcykgtyyyyyykytctutcutcugqwertuioppoiuytrsdfghj,mmxcvbtyuoouigvtycrgdrtdvwsrgsdf'}</a>
                    </div> */}
                </div>

                <div className={`${styles.paragraph} text-justify ss:text-[22px] text-[15px] my-10`} data-aos="zoom-in" data-aos-duration='2000'>
                    {data && data.content}
                </div>

                {/* <div className={`${styles.flexCenter}`} data-aos="zoom-in" data-aos-duration='2000'>
                    <GetStarted text={'Materials'} link={item.material}/>
                </div> */}

            </div>
        </section>
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