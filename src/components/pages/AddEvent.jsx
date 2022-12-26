import React from 'react'
import styles from '../../style'
import * as yup from 'yup';
import { useState } from 'react';
import { google } from '../../assets';

const AddEvent = () => {
    const [name,setName]=useState();
    const [date,setDate]=useState();
    const [time,setTime]=useState();
    const [venue,setVenue]=useState();
    const [speaker,setSpeaker]=useState();
    const [link,setLink]=useState();
    const [poster,setPoster]=useState();
    const [descp,setDescp]=useState();
    const [material,setMaterial]=useState();
    const data=yup.object().shape({
        name:yup.string().required(),
        date:yup.date().required(),
        time:yup.string().required(),
        venue:yup.string().required(),
        speaker:yup.string().required(),
        link:yup.string().required(),
        poster:yup.string().required(),
        descp:yup.string().required(),
        material:yup.string().required(),
      })
  
    const handleSubmit= async event=>{
      event.preventDefault();
  
      let formData={
        name:name,
        date:date,
        time:time,
        venue:venue,
        speaker:speaker,
        link:link,
        poster:poster,
        descp:descp,
        material:material
      }
      const isValid=await data.isValid(formData);
      console.log(formData.material);
      console.log(isValid);
  
    }
    
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
        <section id={'history'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-[fadeInDown_1s_ease-in-out]`}>
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h2 className={`${styles.heading2} text-center text-gradient`}>
                    Add Event
                </h2>
            </div>
            <div className="flex justify-center items-center w-full z-[1]">
                <div className='flex flex-col justify-center items-center ss:w-[50%] w-[95%] p-4 bg-[#212015] bg-opacity-80 backdrop-blur-sm rounded-3xl m-auto object-fit'>
                    <div className='flex flex-col justify-center items-center font-poppins text-justify text-white text-base'>
                        <form method='post' autoComplete='off'>
                            
                            <div className='my-5 mx-10'>
                                <input type='text' name={'name'} placeholder={'Name'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setName(e.target.value)}/>
                            </div>
                            
                            <div className='my-5 mx-10'>
                                <input type='date' name={'date'} placeholder={'Date'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setDate(e.target.value)}/>
                            </div>
                            
                            <div className='my-5 mx-10'>
                                <input type='text' name={'time'} placeholder={'Time'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setTime(e.target.value)}/>
                            </div>

                            <div className='my-5 mx-10'>
                                <input type='text' name={'venue'} placeholder={'Venue'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setVenue(e.target.value)}/>
                            </div>

                            <div className='my-5 mx-10'>
                                <input type='text' name={'speaker'} placeholder={'Speaker'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setSpeaker(e.target.value)}/>
                            </div>

                            <div className='my-5 mx-10'>
                                <input type='text' name={'link'} placeholder={'Link'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setLink(e.target.value)}/>
                            </div>

                            <div className='my-5 mx-10'>
                                <input type='file' name={'poster'} placeholder={'Poster'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setPoster(e.target.value)}/>
                            </div>

                            <div className='my-5 mx-10'>
                                <input type='text' name={'descp'} placeholder={'Description'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setDescp(e.target.value)}/>
                            </div>

                            <div className='my-5 mx-10'>
                                <input type='file' name={'material'} placeholder={'Matrial'} multiple className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setMaterial(e.target.value)}/>
                            </div>

                            <div className='flex justify-center items-center m-10'>
                                <button className='bg-white text-black w-40 rounded-3xl h-10 hover:scale-105 ease-in-out duration-300' onClick={handleSubmit}>Add</button>
                            </div>

                        </form>
                        
                    </div>
                    
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default AddEvent;