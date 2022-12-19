import React from 'react'
import styles from '../../style';
import AnnounceCard from '../AnnounceCard'
import { eventsList } from '../../constants'

const Events = () => {
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
      <div className={`w-full flex justify-between items-center md:flex-row flex-col relative z-[1]`}>
        <h2 className={`${styles.heading2} text-center text-gradient`}>
          Events
        </h2>
      </div>
      <section id="events" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    
          <div className="flex flex-wrap justify-center w-full z-[1]" >
            {eventsList.map((card) => <div> <a href={`/events/${card.name}`}><AnnounceCard key={card.sno} {...card} /></a></div>)}
          </div>
        
      </section>
      <section id={'gallery'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h2 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-white ss:leading-[100.8px] leading-[75px]">
          Events Gallery
        </h2>
        <p>
          Events Picture can be displayed here...
        </p>
      </section>
    </div>
  )
}

export default Events;