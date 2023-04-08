import React from 'react'
import styles from '../../style'
import * as yup from 'yup';
import { useState } from 'react';
import { apple, google, outlook } from '../../assets';
// import process from 'dotenv'

// import {useGoogleLogin,GoogleLogin} from '@react-oauth/google';


const Login = ({handler,logHandler}) => {
    const [email,setEmail]=useState();
    
    const data=yup.object().shape({
        email:yup.string().email().required(),
      })

    // console.log(process.env,process.env.ClientId);
    // const googleId = process.env.ClientId
    // const googleSecret = process.env.ClientSecret

    // console.log(googleId,googleSecret);
    
    const handleSubmit= async event=>{
      event.preventDefault();
      console.log(email);
  
      let formData={
        email:email,
        
      }
      const isValid=await data.isValid(formData);
      console.log(formData);
      console.log(isValid);
      handler(false);
      logHandler(true);
  
    }

    // const handleClick = () => {
    //     console.log('handleClick');
    // }
    
  return (
    <div className={`flex flex-col my-60 z-30`}>
        <section id={'history'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-[fadeInDown_1s_ease-in-out]`}>
            <div className="flex justify-center items-center w-full z-[1]">
                <div className='flex flex-col justify-center items-center ss:w-[30%] w-[95%] p-4 bg-primary backdrop-blur-sm rounded-3xl m-auto object-fit'>
                    <div className='flex flex-col justify-center items-center font-poppins text-justify text-white text-base'>
                        <div className="w-full flex justify-between items-center md:flex-row flex-col py-8 relative z-[1]">
                            <h2 className={`font-poppins font-semibold xs:text-[35px] text-[30x] w-full xs:leading-[75px] leading-[65px] text-center text-gradient`}>
                                Log In
                            </h2>
                        </div>
                        <div className='flex flex-row'>
                            <div className='flex bg-black rounded-3xl justify-center items-center w-fit mt-2 mx-3 p-3 hover:scale-125 ease-in-out duration-300 cursor-pointer'>
                                <img alt='google' src={google} className={`w-[30px] h-[30px] object-contain bg-white m-auto rounded-xl`}/>
                                <span className='flex pl-3'>Continue with Google</span>
                                {/* <span className={`${styles.paragraph} mx-3 text-base`}>Log in with Google</span> */}
                            </div>
                            {/* <div className='flex bg-black rounded-3xl w-16 mt-2 mx-3 p-3 hover:scale-125 ease-in-out duration-300 cursor-pointer'>
                                <img alt='google' src={outlook} className={`w-[30px] h-[30px] object-contain bg-white m-auto rounded-xl`}/>
                                <span className={`${styles.paragraph} mx-3 text-base`}>Log in with Outlook</span>
                            </div>
                            <div className='flex bg-black rounded-3xl w-16 mt-2 mx-3 p-3 hover:scale-125 ease-in-out duration-300 cursor-pointer'>
                                <img alt='google' src={apple} className={`w-[30px] h-[30px] object-contain bg-white m-auto rounded-xl`}/>
                                <span className={`${styles.paragraph} mx-3 text-base`}>Log in with Apple ID</span>
                            </div> */}
                        </div>
                        {/* <div className='flex items-center w-full mt-8 z-[1]'>
                            <div className='flex flex-1 bg-white h-[1px]'/>
                            <p className='flex'>or</p>
                            <div className='flex flex-1 bg-white h-[1px]'/>

                        </div> */}
                        <form method='post' autoComplete='off'>
                            
                            <div className={` mt-10`}>
                                <input type={'email'} name={'email'} placeholder={'E-Mail'} className=' sm:w-[17rem] w-full my-3' onChange={e=>setEmail(e.target.value)}/>
                            </div>

                            <div className='flex justify-center items-center m-5'>
                                <button className='bg-white text-black w-40 rounded-3xl h-10 hover:scale-105 ease-in-out duration-300' onClick={handleSubmit}>Proceed</button>
                            </div>

                        </form>
                    </div>
                    {/* <div className='flex justify-center items-center m-5'>
                        <span className={`${styles.paragraph} text-base`}>New Here? <a href='register' className='hover:text-secondary underline underline-offset-2'>Register</a></span>
                    </div> */}
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Login