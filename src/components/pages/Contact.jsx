import React from 'react'
import { arrowUp, location, mail, phone } from '../../assets';
import styles from '../../style';

const Contact = () => {
  const handleClick=(event,link)=>{
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  const handleSubmit=event=>{
    event.preventDefault();
  }
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} items-center flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
          Contact Us
        </h1>
      </div>

      <div className='flex flex-row' id={'location'}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-[50%]`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
              Our Office
          </h1>
          <div className='mt-4 flex flex-col font-poppins text-justify text-white text-base'>
            <span className='font-semibold text-2xl'>FOSS Club at Coimbatore Institute of Technology</span>
            <span className='my-6 font-semibold text-lg border-solid border-b-4'>Location</span>
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
          </div>
        </div>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-[50%]`}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15664.54909339735!2d77.0272806!3d11.0283259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd9ca28d3c37cf8a!2sCoimbatore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1669484649904!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>
        </div>
      </div>

      <div id={'mailform'} className={`flex flex-col ${styles.paddingY} mt-10 justify-center items-center`}>
        
        <div className={`flex-1 ${styles.flexStart} items-center flex-col xl:px-0 sm:px-16 px-6`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
            Mail Us your Message
          </h1>
        </div>

        <div>
          <form method='post' autoComplete='off' name={'contactForm'} className='bg-black p-3 h-[520px] w-[80rem] rounded-3xl backdrop-blur-md shadow-[20px_20px_40px _6px_rgba(0,0,0,0.2)] text-center relative'>
            <div className='flex flex-row justify-center items-center'>
              <div className='my-4 mx-10'>
                <input type='text' name={'name'} placeholder={'Name'}/>
              </div>
              <div className='my-4 mx-10'>
                <input type='text' name={'dept'} placeholder={'Department'}/>
              </div>
            </div>
            <div className='flex flex-row justify-center items-center'>
              <div className='my-4 mx-10'>
                <input type='text' name={'mail'} placeholder={'Mail ID'}/>
              </div>
              <div className='my-4 mx-10'>
                <input type='text' name={'contact'} placeholder={'Contact'}/>
              </div>
            </div>
            <div className='my-4 mx-28'>
              <textarea name={'message'} placeholder={'Message'} className={`${styles.flexStart}`}/>
            </div>
            <div >
              <button className='bg-white text-black w-80 rounded-3xl h-10 hover:bg-secondary' onClick={handleSubmit}>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;