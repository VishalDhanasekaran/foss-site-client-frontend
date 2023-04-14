import React from 'react'
import styles from '../../style'
import * as yup from 'yup';
import { useState } from 'react';
import { google, right_arrow } from '../../assets';

import { useGoogleLogin } from '@react-oauth/google';

import Cookies from 'js-cookie';
import axios from 'axios';

import { API } from '../../constants';


const Login = ({handler,logHandler}) => {
    const [email,setEmail]=useState();
    
    const data=yup.object().shape({
        email:yup.string().email().required(),
      })

    const loginUser=(data)=>{axios.post(`${API}/visits`,data)
            .then((res=>{
                // console.log(res);
                Cookies.set("email",data.email);
                if(data.pic){
                    Cookies.set("pic",data.pic);
                }
                handler(false);
                logHandler(true);
            }))
            .catch((err=>{
                console.log(err);
                alert("ERROR in Logging In!");
            }));}
    const handleSubmit= async event=>{
        event.preventDefault();
    
        let formData={
            email:email,
            
        }
        const isValid=await data.isValid(formData);
        if(isValid)
        {
            loginUser(formData);
        }
    }

    const login = useGoogleLogin({
        onSuccess: async respose => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${respose.access_token}`
                    }
                })

                // console.log(res.data)
                loginUser({email:res.data.email,pic:res.data.picture});
            } catch (err) {
                console.log(err)

            }

        }
    });
    
  return (
    <div className={`flex flex-col my-60 z-30`}>
        <section id={'history'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-[fadeInDown_1s_ease-in-out]`}>
            <div className="flex justify-center items-center w-full z-[1]">
                <div className='flex flex-col justify-center items-center ss:w-[30%] w-[95%] p-8 bg-primary backdrop-blur-sm rounded-3xl m-auto object-fit border-2 border-[#f5e77a]'>
                    <div className='flex flex-col gap-3 justify-center items-center font-poppins text-justify text-white text-base'>
                        <div className='flex flex-row'>
                            <div className='flex bg-zinc-900 rounded-3xl justify-center items-center w-fit mt-2 mx-3 p-3 hover:scale-105 ease-in-out duration-300 cursor-pointer' onClick={login}>
                                <img alt='google' src={google} className={`w-10 h-10 object-contain bg-white m-auto rounded-xl`}/>
                                <span className='flex pl-3'>Continue with Google</span>
                            </div>
                        </div>
                        <span className='flex'>Or</span>
                        <form autoComplete='off' onSubmit={handleSubmit}>
                            
                            <div className={`flex flex-row gap-4 justify-end items-start`}>
                                <input type={'email'} name={'email'} placeholder={'E-Mail'} className='w-full my-3' onChange={e=>setEmail(e.target.value)}/>
                                <div className='flex bg-white justify-center items-center rounded-full hover:scale-125 ease-in-out duration-300 absolute w-6 p-1'>
                                    <img src={right_arrow} className='flex  mx-3' onClick={handleSubmit}/>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Login