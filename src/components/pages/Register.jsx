import React from 'react'
import styles from '../../style'
import * as yup from 'yup';
import { useState } from 'react';
import { google,outlook,apple } from '../../assets';

const Register = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const data=yup.object().shape({
        email:yup.string().email().required(),
        name:yup.string().required()
      })
  
    const handleSubmit= async event=>{
      event.preventDefault();
      console.log(email);
  
      let formData={
        name:name,
        email:email,
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
            <div className="flex justify-center items-center w-full z-[1]">
                <div className='flex flex-col justify-center items-center ss:w-[40%] w-[95%] p-4 bg-[#212015] bg-opacity-80 backdrop-blur-sm rounded-3xl m-auto object-fit'>
                    <div className='flex flex-col justify-center items-center font-poppins text-justify text-white text-base'>
                        <div className='flex flex-row mt-10'>
                            <div className='flex bg-black rounded-3xl w-16 mt-2 mx-3 p-3 hover:scale-125 ease-in-out duration-300 cursor-pointer'>
                                <img alt='google' src={google} className={`w-[30px] h-[30px] object-contain bg-white m-auto rounded-xl`}/>
                                {/* <span className={`${styles.paragraph} mx-3 text-base`}>Log in with Google</span> */}
                            </div>
                            <div className='flex bg-black rounded-3xl w-16 mt-2 mx-3 p-3 hover:scale-125 ease-in-out duration-300 cursor-pointer'>
                                <img alt='google' src={outlook} className={`w-[30px] h-[30px] object-contain bg-white m-auto rounded-xl`}/>
                                {/* <span className={`${styles.paragraph} mx-3 text-base`}>Log in with Outlook</span> */}
                            </div>
                            <div className='flex bg-black rounded-3xl w-16 mt-2 mx-3 p-3 hover:scale-125 ease-in-out duration-300 cursor-pointer'>
                                <img alt='google' src={apple} className={`w-[30px] h-[30px] object-contain bg-white m-auto rounded-xl`}/>
                                {/* <span className={`${styles.paragraph} mx-3 text-base`}>Log in with Apple ID</span> */}
                            </div>
                        </div>
                        <div className='flex items-center w-full mt-9 z-[1]'>
                            <div className='flex flex-1 bg-white h-[1px]'/>
                            <p className='flex'>or</p>
                            <div className='flex flex-1 bg-white h-[1px]'/>

                        </div>
                        <form method='post' autoComplete='off'>
                            
                            <div className='mt-9'>
                                <input type='text' name={'name'} placeholder={'Name'} className='sm:w-[20rem] w-full my-3' onChange={e=>setName(e.target.value)}/>
                            </div>

                            <div className='my-5'>
                                <input type='text' name={'email'} placeholder={'E-Mail'} className='sm:w-[20rem] w-full my-3' onChange={e=>setEmail(e.target.value)}/>
                            </div>

                            <div className='flex justify-center items-center m-8'>
                                <button className='bg-white text-black w-40 rounded-3xl h-10 hover:scale-105 ease-in-out duration-300' onClick={handleSubmit}>Sign Up</button>
                            </div>

                        </form>
                        
                    </div>
                    <div className='flex justify-center items-center m-5'>
                        <span className={`${styles.paragraph} text-base`}>Already Signed Up? <a href='login' className='hover:text-secondary underline underline-offset-2'>Log In</a></span>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Register;