import React,{useState} from 'react'
import { location, mail as ml } from '../../assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../constants';

import * as yup from 'yup';
import axios from 'axios';

const Contact = () => {

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')

  const handleClick=(link)=>{
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  const data=yup.object().shape({
      name:yup.string().required(), 
      mail:yup.string().email().required(),
      message:yup.string().required(),
      subject:yup.string()
    })

  const handleSubmit= async event=>{
    event.preventDefault();

    let formData={
      name:name, 
      mail:mail,
      message:message,
      subject:subject
    }
    const isValid=await data.isValid(formData);
     
    axios.post(`${API}/messages`,formData)
    .then((response)=>{console.log(response);
      toast.success('Message Send Successfully!', {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });})
    .catch((error)=>{console.log(error);
      toast.error('Some Internal Error! Couldn\'t Deliver the Message!', {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });});

  }
  return (
    <div className={`flex flex-col p-10 justify-center items-center`}>
    <ToastContainer />
      <div className={`w-full flex justify-between items-center md:flex-row flex-col py-10 relative z-[1] animate-[zoomIn_0.75s_ease-in-out]`}>
        <h2 className={`font-poppins font-semibold text-5xl text-gradient w-full text-center text-gradient`}>
          Contact Us
        </h2>
      </div>
      <section id="location" className={`flex md:flex-row flex-col `}>
        <div className={`flex flex-col animate-[fadeInLeft_0.75s_ease-in-out] p-5 gap-5`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex gap-5 flex-col font-poppins font-semibold text-4xl text-dimWhite ">
              <span className='flex'>Our Office</span>
              <span className="text-gradient text-2xl">FOSS Club at Coimbatore Institute of Technology</span>{" "}
            </h1>
          </div>

          <h1 className="font-poppins font-semibold text-2xl text-dimWhite w-full">
            Location:
          </h1>
          <div className={`font-poppins font-normal text-dimWhite text-xl text-justify`}>
            <div className='flex flex-row p-4'>
              <img src={location} className='w-6 h-6 object-contain'/>
              <span className='px-5 cursor-pointer' onClick={() => handleClick( 'https://goo.gl/maps/GjRuMDe4MQWCrr3S8')}>Avinashi Road, Civil Aerodrome Post, Peelamedu, Coimbatore, Tamil Nadu 641014 </span>
            </div>
            <div className='flex flex-row p-4'>
              <img src={ml} className='w-6 h-6 object-contain'/>
              <span className='px-5'>fosscit@gmail.com </span>
            </div>
          </div>
        </div>

        <div className={`flex p-10 relative animate-[fadeInRight_0.75s_ease-in-out]`}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.143871172457!2d77.02472797478232!3d11.027830589136626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8570bbbdef6f1%3A0x3d2892336503d775!2sFOSS(Free%20and%20Open%20Source%20Software)%20CIT!5e0!3m2!1sen!2sin!4v1671453029041!5m2!1sen!2sin" className='ss:h-[30rem] h-[15rem] ss:w-[40rem] w-[20rem] z-[10] rounded-2xl' ></iframe>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </section>
      
      <section id="mailform" className={`flex md:flex-col flex-col gap-5 py-10`} data-aos="fade-up" data-aos-duration='2000'>
        <div>
          <h1 className="flex-1 font-poppins font-semibold text-center text-4xl text-white text-gradient">
            Mail Us Your Message
          </h1>
        </div>
        <div className="flex  w-full justify-center items-center">
          <div className='flex flex-col justify-center items-center w-full p-5 bg-black bg-opacity-80 backdrop-blur-sm rounded-3xl m-2 '>
            <div className=' flex flex-col justify-center items-center font-poppins text-justify text-white text-base '>
              <form method='post' autoComplete='off' onSubmit={handleSubmit}>
                <div className='flex flex-col  gap-5'>
                  <input type='text' name={'name'} placeholder={'Name'} className='flex ' onChange={e=>setName(e.target.value)}/>
                  <input type='text' name={'mail'} placeholder={'Mail ID'} className='flex ' onChange={e=>setMail(e.target.value)}/>
                  <input type='text' name={'subject'} placeholder={'Subject'} className='flex ' onChange={e=>setSubject(e.target.value)}/>
                  <textarea name={'message'} placeholder={'Message'} className={`flex h-20`} onChange={e=>setMessage(e.target.value)}/>
                  <div className='flex w-full justify-center items-center'><input type='submit' className='bg-white text-black w-full rounded-3xl h-10 hover:scale-105 ease-in-out duration-300'/></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        

      </section>
    </div>
  )
}

export default Contact;



//want to make it responsive...