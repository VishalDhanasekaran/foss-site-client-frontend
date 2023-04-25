import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BoltLoader from '../BoltLoader'
import GetStarted from '../GetStarted';

import { API } from '../../constants';

const Event = () => {

    const eventId=useParams();
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        axios.get(`${API}/events/event/${eventId.id}`)
        .then((res)=>{setData(res.data);setLoading(false);})
        .catch((err)=>{
            console.log("error:",err.message);
            setError(err.message);
            setLoading(false);
        });
    },[]);

    
  return (
    <div className={`flex flex-col animate-[zoomIn_1s_ease-in-out]`}>
        
        {data && <section id={'event'} className={`flex font-poppins font-normal text-justify text-dimWhite text-xl items-center justify-center flex-col xl:px-0 sm:px-16 px-6 gap-5`} data-aos="fade-up" data-aos-duration='1000'>
            <h1 className="flex font-poppins font-semibold text-5xl text-gradient justify-center items-center p-5 text-center">
            { data.title}
            </h1>
            <div className={`flex-1 flex justify-center items-center flex-col gap-4 xl:px-0 sm:px-16 px-6 font-poppins font-semibold `}>
                <div>
                    <img src={data.pic} alt={data.content} className='shadow-lg shadow-[#b0a854] aspect-video object-contain h-72'/>
                </div>
                <div className={` grid grid-cols-2 grid-rows-2 justify-center flex-col p-4  gap-5`} data-aos="fade-up" data-aos-duration='1000'>
                    <div className='flex flex-col'>
                        <span className='flex font-semibold text-gradient text-2xl'>Date:</span>
                        <span className={`font-poppins font-normal text-justify text-dimWhite text-xl `}>{data?.eventDate.slice(0,10).split('-').reverse().join('-')}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='flex font-semibold text-gradient text-2xl'>Venue:</span>
                        <span className={`font-poppins font-normal text-justify text-dimWhite text-xl `}>{data?.venue}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='flex font-semibold text-gradient text-2xl'>Time:</span>
                        <span className={`font-poppins font-normal text-justify text-dimWhite text-xl `}>{data?.time}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='flex font-semibold text-gradient text-2xl'>Speaker:</span>
                        <span className={`font-poppins font-normal text-justify text-dimWhite text-xl truncate`}>{data?.speaker}</span>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col gap-10 font-poppins font-normal text-justify text-dimWhite text-xl justify-center  items-center`} data-aos="fade-up" data-aos-duration='1000'>
                <span>{data.content}</span>
                <GetStarted text={'View More'} link={data?.link} target={'_blank'} />
            </div>
        </section>}
        {loading && <div className='flex justify-center items-center'> 
            <BoltLoader/>
            </div>}
        {error && <div className='flex'><span className={`font-poppins font-semibold text-5xl text-gradient w-full flex text-center`}>{error}!</span></div>}
    </div>
  )
}

export default Event;
