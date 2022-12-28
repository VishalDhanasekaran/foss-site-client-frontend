import React,{useState} from 'react'
import styles from '../../style';
import AnnounceCard from '../AnnounceCard'
import { eventsList } from '../../constants'

const Events = () => {
  const [active,setActive]=useState('1');
  
  return (
    <div className='flex flex-col'>
      
      

      <div className={`${styles.paddingY} ${styles.flexCenter} animate-[zoomIn_1s_ease-in-out]`}>
        <select className='cursor-pointer bg-primary h-10 font-poppins text-2xl rounded-lg outline-none' value={active} onChange={(e)=>{setActive(e.target.value)}}>
          <option className={`my-4 font-poppins text-2xl`} value={1}>Current Year Events</option>
          <option className={`my-4 font-poppins text-2xl`} value={2}>Previous Year Events</option>
        </select>
      </div>

      <div className={`flex flex-col`}>
        
        <section id={"events"} className={` ${styles.flexCenter} flex-col relative `}>
          {active=='1' && <div data-aos="fade-up" data-aos-duration='1000'>
            <div className={`w-full flex justify-between items-center md:flex-row flex-col relative z-[1]`}>
              <h2 className={`${styles.heading2} text-center text-gradient`}>
                Events
              </h2>
            </div>
            
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
        
            <div className="flex flex-wrap justify-center w-full z-[1]" >
              {eventsList.map((card) => 
                <div data-aos="fade-up" data-aos-duration='1000'>
                  <a href={`/events/${card.id}`}><AnnounceCard key={card.id} {...card} /></a>
                  
                </div>
              )}
            </div>
          </div>}

          {active=='2' && <div data-aos="fade-up" data-aos-duration='1000'>
            <div className={`w-full flex justify-between items-center md:flex-row flex-col relative z-[1]`}>
              <h2 className={`${styles.heading2} text-center text-gradient`}>
                Events
              </h2>
            </div>
            
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
        
            <div className="flex flex-wrap justify-center w-full z-[1]" >
              {eventsList.map((card) => 
                <div data-aos="fade-up" data-aos-duration='1000'>
                  <a href={`/events/${card.id}`}><AnnounceCard key={card.id} {...card} /></a>
                  
                </div>
              )}
            </div>
          </div>}

        </section>
        
        <section id={'gallery'} className={`flex-1 ${styles.flexStart} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`} data-aos="fade-up" data-aos-duration='1000'>
          <h2 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-white ss:leading-[100.8px] leading-[75px]">
            Events Gallery
          </h2>
          <p>
            Events Picture can be displayed here...
          </p>
        </section>
      </div>
    </div>
  )
}

export default Events;