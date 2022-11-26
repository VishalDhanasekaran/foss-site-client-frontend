import React from 'react'
import styles from '../../style';
import GetStarted from '../GetStarted';

const Events = () => {
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
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