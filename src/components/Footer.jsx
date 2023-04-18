import React from 'react'
import { logo } from '../assets';
import { footerLinks,socialMedia,contributors } from '../constants';
const Footer = () => {

  const handleClick=(link)=>{
    window.open(link, '_blank', 'noopener,noreferrer');
  }
return (
    <section className={`sm:py-8 py-3 flex-col`}>
      <div className={`flex ss:flex-row flex-col py-2 px-5 gap-5 items-start justify-center`}>
        
        <div className=' flex items-center w-full flex-col ss:w-[30%] gap-5 justify-end'>
          <div className='flex justify-center items-center'>
            <a href='/'><img src={logo} alt='FOSS Logo' className='h-[10rem] object-contain '/></a>
          </div>
          <div className='flex flex-row flex-wrap  justify-center items-center gap-5'>
            {socialMedia.map((social,index)=>(
              <img key={social.id} src={social.icon} alt={social.id} className={`h-8 w-8 object-contain cursor-pointer  hover:scale-125 ease-in-out duration-300`} onClick={() => handleClick(social.link)} />
            ))}
          </div>
        </div>

        <div className='ss:w-[20%] flex flex-col flex-wrap justify-start'>
          <h4 className='font-poppins font-medium text-xl text-white underline underline-offset-2'>Sitemap</h4>
          {footerLinks.map((footerLinks)=>(
            <div key={footerLinks.id} className='flex justify-start items-center'>
                <ul className='list-none py-2 '>
                    <div className='flex'>
                      <li className={`font-poppins font-normal text-base text-white hover:text-secondary cursor-pointer`}>
                        <a href={`../${footerLinks.link}`}>{footerLinks.name}</a>
                      </li>
                    </div>
                </ul>
            </div>
          ))}
        </div>

        <div className={`font-poppins font-normal text-dimWhite text-lg ss:w-[30%]  flex flex-col `}>
          <h4 className='flex text-xl font-medium text-white underline underline-offset-2'>Contact</h4>
          <div className='cursor-pointer text-lg p-5' onClick={() => handleClick('https://goo.gl/maps/GjRuMDe4MQWCrr3S8')}>
            <h4 className='flex'>Computing Block,</h4>
            <span className='flex'>Coimbatore Institute of Technology,</span>
            <span className='flex'>Avinashi Road, Civil Aerodrome Post, Peelambedu, Coimbatore,<br/>Tamil Nadu 641014</span>
          </div>
          <span className='flex text-xl font-medium text-white'>fosscit@gmail.com </span>
        </div>
        
        <div className='ss:w-[20%] flex flex-col flex-wrap justify-start'>
          <h4 className='font-poppins font-medium text-xl text-white underline underline-offset-2'>Contributors</h4>
          {contributors.map((item)=>(
            <div key={item.id} className='flex justify-start items-center'>
                <ul className='list-none py-4'>
                    <div className='flex'>
                      <li className={`font-poppins font-normal`}>
                        <a className='flex text-lg text-white hover:text-secondary cursor-pointer' onClick={() => handleClick(item.link)}>{item.name}</a>
                        <span className='flex text-sm'>{item.role}</span>
                      </li>
                    </div>
                </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className='w-full flex justify-center md:flex-row flex-col pt-2 border-t border-t-[#f7f2cb] h-2'>
        <p className='font-poppins font-normal text-center text-xs text-white'> &#169; 2023 FOSS CIT. All Rights Reserved.</p>
      </div>
    
    </section>
  )
}

export default Footer;