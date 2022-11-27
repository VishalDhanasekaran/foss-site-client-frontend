import React from 'react'
import { eventsList } from '../../constants'
import styles from '../../style'
import AnnounceCard from '../AnnounceCard'

const Announcement = () => {

  const handleClick=(event,link)=>{
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="announce" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} text-center`}>
          Annoucements
        </h2>
      </div>

      <div className="flex flex-wrap justify-center w-full z-[1]" >
        {eventsList.map((card) => <div onClick={event => handleClick(event, `/announcement/${card.name}`)}> <AnnounceCard key={card.sno} {...card} /></div>)}
      </div>
    </section>

  )
}

export default Announcement