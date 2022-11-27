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
    <>
      <div className={`flex-1 ${styles.paddingY} ${styles.flexStart} items-center flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
          Contact Us
        </h1>
      </div>
      <section id="location" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[32px] text-white ss:leading-[100.8px] leading-[50px]">
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

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15664.54909339735!2d77.0272806!3d11.0283259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd9ca28d3c37cf8a!2sCoimbatore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1669484649904!5m2!1sen!2sin" loading="lazy" className='h-[30rem] w-[40rem] mx-10 z-[10]' ></iframe>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </section>
      
      <section id="mailform" className={`flex md:flex-col flex-col ${styles.paddingY}`}>
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
    </>
  )
}

export default Contact;



//want to make it responsive...