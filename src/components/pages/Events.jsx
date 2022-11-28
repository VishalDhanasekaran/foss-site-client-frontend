import React from 'react'
import styles from '../../style';
import GetStarted from '../GetStarted';

const Events = () => {
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
      <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}>
        <h2 className={`${styles.heading2} text-center text-gradient`}>
          Events
        </h2>
      </div>
      <section id={'community'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h2 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-white ss:leading-[100.8px] leading-[75px]">
          Join Our Community
        </h2>
        <GetStarted text={'Telegram'}/>
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