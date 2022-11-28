import React from 'react'
import { membersList } from '../../constants';
import MemberCard from '../MemberCard';
import styles from '../../style';
const Members = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} text-center text-gradient`}>
          FOSS Club Members
        </h2>
      </div>

      <div className="flex flex-wrap justify-center w-full z-[1]">
        {membersList.map((card) => <MemberCard key={card.sno} {...card} />)}
      </div>
    </section>
  )
}

export default Members;