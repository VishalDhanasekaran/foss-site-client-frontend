import React,{useState} from 'react'
import { arrowUp, location, mail, phone } from '../../assets';
import styles from '../../style';

import * as yup from 'yup';

const Contact = () => {

  const [name, setName] = useState('')
  const [dept, setDept] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')

  const handleClick=(event,link)=>{
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  const data=yup.object().shape({
      name:yup.string().required(), 
      dept:yup.string().required(),
      email:yup.string().email().required(),
      contact:yup.number().required().test(val=>val.toString().length===10),
      message:yup.string().required()
    })

  const handleSubmit= async event=>{
    event.preventDefault();
    console.log(name,dept,email,contact,message);

    let formData={
      name:name, 
      dept:dept,
      email:email,
      contact:contact,
      message:message
    }
    const isValid=await data.isValid(formData);
    console.log(formData,isValid);

  }
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
      <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] animate-[zoomIn_0.75s_ease-in-out]`}>
        <h2 className={`${styles.heading2} text-center text-gradient`}>
          Contact Us
        </h2>
      </div>
      <section id="location" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-[fadeInLeft_0.75s_ease-in-out]`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[32px] text-white ss:leading-[55px] leading-[45px]">
              <span>Our Office</span><br className="sm:block" />{" "}
              <span className="text-gradient sm:text-[22px] text-[15px] leading-tight">FOSS Club at Coimbatore Institute of Technology</span>{" "}
            </h1>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[40px] text-[30px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Location:
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] text-justify`}>
            <div className='flex flex-row my-4'>
              <img src={location} className='w-[23px] h-[23px] object-contain'/>
              <span className='mx-5 cursor-pointer' onClick={event => handleClick(event, 'https://goo.gl/maps/GjRuMDe4MQWCrr3S8')}>Avinashi Road, Civil Aerodrome Post, Peelambedu, Coimbatore, Tamil Nadu 641014 </span>
            </div>
            <div className='flex flex-row my-4'>
              <img src={phone} className='w-[23px] h-[23px] object-contain'/>
              <span className='mx-5'>+91 98765 43210 </span>
            </div>
            <div className='flex flex-row my-4'>
              <img src={mail} className='w-[23px] h-[23px] object-contain'/>
              <span className='mx-5'>fosscit@gmail.com </span>
            </div>
          </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative animate-[fadeInRight_0.75s_ease-in-out]`}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.143871172457!2d77.02472797478232!3d11.027830589136626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8570bbbdef6f1%3A0x3d2892336503d775!2sFOSS(Free%20and%20Open%20Source%20Software)%20CIT!5e0!3m2!1sen!2sin!4v1671453029041!5m2!1sen!2sin" loading="lazy" className='h-[30rem] w-[40rem] mx-10 z-[10]' ></iframe>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </section>
      
      <section id="mailform" className={`flex md:flex-col flex-col ${styles.paddingY}`} data-aos="zoom-in" data-aos-duration='2000'>
        <div>
          <h1 className="flex-1 font-poppins font-semibold text-center ss:text-[42px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
            Mail Us Your Message
          </h1>
        </div>
        <div className="flex justify-center items-center w-full z-[1]">
          <div className='flex flex-col justify-center items-center ss:w-[75%] w-[95%] p-4 bg-[#212015] bg-opacity-80 backdrop-blur-sm rounded-3xl m-2 object-fit'>
            <div className=' flex flex-col justify-center items-center font-poppins text-justify text-white text-base '>
              <form method='post' autoComplete='off'>
                <div className='my-5 mx-10'>
                  <input type='text' name={'name'} placeholder={'Name'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setName(e.target.value)}/>
                  <input type='text' name={'dept'} placeholder={'Department'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setDept(e.target.value)}/>
                </div>
                <div className='my-5 mx-10'>
                  <input type='text' name={'mail'} placeholder={'Mail ID'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setEmail(e.target.value)}/>
                  <input type='text' name={'contact'} placeholder={'Contact'} className='mx-5 sm:w-[20rem] w-[75%] my-3' onChange={e=>setContact(e.target.value)}/>
                </div>
                <div className='my-5 mx-10'>
                  <textarea name={'message'} placeholder={'Message'} className={`${styles.flexStart} mx-5 w-[75%] my-3`} onChange={e=>setMessage(e.target.value)}/>
                </div>
                <div className='flex justify-center items-center m-10'>
                  <button className='bg-white text-black w-80 rounded-3xl h-10 hover:scale-105 ease-in-out duration-300' onClick={handleSubmit}>SUBMIT</button>
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