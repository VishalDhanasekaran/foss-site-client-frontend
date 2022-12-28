import React from 'react'
import styles from '../style';
import { logo } from '../assets';
import { footerLinks,socialMedia,contributors } from '../constants';
const Footer = () => {

  const handleClick=(event,link)=>{
    window.open(link, '_blank', 'noopener,noreferrer');
  }
return (
    <section className={`sm:py-8 py-3 flex-col`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-3 w-full border-t-[1px] border-t-[#f7f2cb] pt-2`}>
        <div className='flex-1 flex flex-col justify-start '>
          <img src={logo} alt='FOSS Logo' className='w-[266px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Free and Open Source Software, CIT</p>
        </div>
        <div className={``}>
          <div className='flex-[1.5] w-full flex flex-row flex-wrap md:mt-0 mt-5 items-center justify-center'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white mt-4 underline underline-offset-4'>Important Links</h4>
            {footerLinks.map((footerLinks)=>(
              <div key={footerLinks.id} className='flex flex-row my-0 min-w-[150px] justify-center items-center'>
                  <ul className='list-none mt-4 flex flex-wrap mx-4'>
                      <div className='flex'><li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-1`}>
                        <a href={`../${footerLinks.link}`}>{footerLinks.name}</a>
                      </li></div>
                  </ul>
              </div>
            ))}
          </div>
          <div className='flex-[1.5] w-full flex flex-row flex-wrap md:mt-0 mt-5 items-center justify-center'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white mt-4 underline underline-offset-4'>Contributors</h4>
            {contributors.map((footerLinks)=>(
              <div key={footerLinks.id} className='flex flex-row my-0 min-w-[150px] justify-center items-center'>
                  <ul className='list-none mt-4 flex flex-wrap mx-4'>
                      <div className='flex'><li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-1`}>
                        <a onClick={event => handleClick(event, footerLinks.link)}>{footerLinks.name}</a>
                      </li></div>
                  </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-center md:flex-row flex-col pt-1 border-t-[1px] border-t-[#f7f2cb]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'> &#169; 2022 FOSS CIT. All Rights Reserved.</p>
      
        <div className='flex flex-row md:mt-0 mt-6 mx-4'>
          {socialMedia.map((social,index)=>(
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1? 'mr-6': 'mr-0' } hover:scale-125 ease-in-out duration-300`} onClick={event => handleClick(event, social.link)} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer;