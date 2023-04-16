import React from 'react'
import { logo } from '../assets';
import { footerLinks,socialMedia,contributors } from '../constants';
const Footer = () => {

  const handleClick=(link)=>{
    window.open(link, '_blank', 'noopener,noreferrer');
  }
return (
    <section className={`sm:py-8 py-3 flex-col`}>
      <div className={`flex ss:flex-row flex-col my-3 py-2 gap-5 items-start justify-center`}>
        
        <div className='flex-1 flex flex-col ss:w-[30%] gap-5 justify-end'>
          <div className='flex justify-center items-center'>
            <a href='/'><img src={logo} alt='FOSS Logo' className='h-[10rem] object-contain '/></a>
          </div>
          <div className='flex flex-row flex-wrap mx-2  justify-center items-center'>
            {socialMedia.map((social,index)=>(
              <img key={social.id} src={social.icon} alt={social.id} className={`h-8 w-8 object-contain cursor-pointer m-3 hover:scale-125 ease-in-out duration-300`} onClick={() => handleClick(social.link)} />
            ))}
          </div>
        </div>

        <div className='ss:w-[20%] flex flex-col flex-wrap md:mt-0 justify-start px-10'>
          <h4 className='font-poppins font-medium text-xl text-white mt-4 underline underline-offset-2'>Sitemap</h4>
          {footerLinks.map((footerLinks)=>(
            <div key={footerLinks.id} className='flex my-0 min-w-[150px] justify-start items-center'>
                <ul className='list-none mt-4 mx-3'>
                    <div className='flex'>
                      <li className={`font-poppins font-normal text-white hover:text-secondary cursor-pointer mb-1`}>
                        <a href={`../${footerLinks.link}`}>{footerLinks.name}</a>
                      </li>
                    </div>
                </ul>
            </div>
          ))}
        </div>

        <div className={`font-poppins font-normal text-dimWhite text-xl ss:w-[30%] text-justify px-10 flex flex-col `}>
          <h4 className='flex text-xl font-medium text-white underline underline-offset-2'>Contact</h4>
          <div className='cursor-pointer text-lg p-5' onClick={() => handleClick('https://goo.gl/maps/GjRuMDe4MQWCrr3S8')}>
            <h4 className='flex'>Computing Block,</h4>
            <span className='flex'>Coimbatore Institute of Technology,</span>
            <span className='flex'>Avinashi Road, Civil Aerodrome Post, Peelambedu, Coimbatore,<br/>Tamil Nadu 641014</span>
          </div>
          <span className='flex text-[18px] font-medium text-white'>fosscit@gmail.com </span>
        </div>
        
        <div className='ss:w-[20%] flex flex-col flex-wrap md:mt-0 justify-start px-10'>
          <h4 className='font-poppins font-medium text-xl text-white mt-4  underline underline-offset-2'>Contributors</h4>
          {contributors.map((item)=>(
            <div key={item.id} className='flex my-0 min-w-[150px] justify-start items-center'>
                <ul className='list-none mt-4 mx-3'>
                    <div className='flex'>
                      <li className={`font-poppins font-normal`}>
                        <a className='flex text-[16px] text-white hover:text-secondary cursor-pointer' onClick={() => handleClick(item.link)}>{item.name}</a>
                        <span className='flex text-[12px]'>{item.role}</span>
                      </li>
                    </div>
                </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className='w-full flex justify-center md:flex-row flex-col pt-2 border-t-[1px] border-t-[#f7f2cb] h-2'>
        <p className='font-poppins font-normal text-center text-xs text-white'> &#169; 2023 FOSS CIT. All Rights Reserved.</p>
      </div>
    
    </section>
  )
}

export default Footer;