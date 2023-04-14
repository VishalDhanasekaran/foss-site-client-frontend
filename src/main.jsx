import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BoltLoader } from './components';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Loader=() =>{
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
          setLoading(false)
      },2500);
  },[]);

  AOS.init();

return(
  <div className='flex'>
      {
      loading?
        <div className='flex justify-center items-center w-full h-[100vh] bg-primary'> 
          <BoltLoader/>
        </div>
      :<App />
      }

  </div>
)
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId= {import.meta.env.VITE_CLIENTID}>
      <BrowserRouter>
        <Loader />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
