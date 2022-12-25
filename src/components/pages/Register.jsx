import React from 'react'
import styles from '../../style'
import * as yup from 'yup';
import { useState } from 'react';
import { linkedin } from '../../assets';

const Register = () => {
    const [name,setName]=useState();
    const [position,setPosition]=useState();
    const [department,setDepartment]=useState();
    const [year,setYear]=useState();
    const [linkedin,setLinkedin]=useState();
    const [profile,setProfile]=useState();
    const [email,setEmail]=useState();
    
    const data=yup.object().shape({
        name:yup.string().required(),
        email:yup.string().email().required(),
        position:yup.string().required(),
        department:yup.string().required(),
        year:yup.number().required(),
        linkedin:yup.string().required(),
        profile:yup.string().required(),
      })
  
    const handleSubmit= async event=>{
      
        event.preventDefault();
    
        let formData={
            name:name,
            email:email,
            position:position,
            department:department,
            year:year,
            linkedin:linkedin,
            profile:profile,
        }

        const isValid=await data.isValid(formData);
        console.log(formData);
        console.log(isValid);
  
    }
    
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
        <section id={'history'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-[fadeInDown_1s_ease-in-out]`}>
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h2 className={`${styles.heading2} text-center text-gradient`}>
                    Sign Up
                </h2>
            </div>
            <div className='flex flex-col justify-center items-center ss:w-[50%] w-[95%] p-4 bg-[#212015] bg-opacity-80 backdrop-blur-sm rounded-3xl m-auto object-fit'>
                <div className='flex flex-col justify-center items-center font-poppins text-justify text-white text-base'>
                    <form method='post' autoComplete='off'>
                        
                        <div className='my-5 mx-10'>
                            <input type='text' name={'name'} placeholder={'Name'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setName(e.target.value)}/>
                        </div>

                        <div className='my-5 mx-10'>
                            <input type='text' name={'email'} placeholder={'E-Mail'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setEmail(e.target.value)}/>
                        </div>


                        <div className='my-5 mx-10'>
                            <input type='text' name={'position'} placeholder={'Position'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setPosition(e.target.value)}/>
                        </div>
                        
                        <div className='my-5 mx-10'>
                            <input type='text' name={'department'} placeholder={'Department'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setDepartment(e.target.value)}/>
                        </div>

                        <div className='my-5 mx-10'>
                            <input type='text' name={'year'} placeholder={'Year'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setYear(e.target.value)}/>
                        </div>

                        <div className='my-5 mx-10'>
                            <input type='text' name={'linkedin'} placeholder={'Linkedin'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setLinkedin(e.target.value)}/>
                        </div>

                        <div className='my-5 mx-10 flex-col'>
                            <label className='mx-5 sm:w-[20rem] w-[75%] my-3 text-gray-400'>Profile Picture</label>
                            <div><input type='file' name={'profile'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setProfile(e.target.value)}/></div>
                        </div>

                        <div className='flex justify-center items-center m-10'>
                            <button className='bg-white text-black w-40 rounded-3xl h-10 hover:scale-105 ease-in-out duration-300' onClick={handleSubmit}>Sign Up</button>
                        </div>
                        

                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Register;